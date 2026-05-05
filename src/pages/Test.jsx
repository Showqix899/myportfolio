// ============================================================
// ScrollStory.jsx — Scroll-driven background crossfade story
// ============================================================
// HOW TO REUSE:
//   1. Edit the SCENES array — each scene needs:
//      - image: any valid CSS url('...') string
//      - title: big heading text
//      - subtitle: (optional) smaller text below
//   2. Component auto-distributes scroll ranges evenly.
//   3. Tweak BLUR_PEAK and OVERLAY_OPACITY at the top.
//   4. Add/remove scenes freely — height adjusts automatically.
// ============================================================

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion"

// ─────────────────────────────────────────────
// CONFIG — tweak these to customise the feel
// ─────────────────────────────────────────────
const BLUR_PEAK = 10          // blur (px) at peak of each transition
const OVERLAY_OPACITY = 0.55  // dark tint over images (0 = none, 1 = black)
const SPRING = { stiffness: 80, damping: 22 } // scroll spring feel

// ─────────────────────────────────────────────
// SCENES — edit, add, or remove freely
// Each entry = one background + one sticky section
// ─────────────────────────────────────────────
const SCENES = [
  {
    image: "url('https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80')",
    title: "Tokyo Nights",
    subtitle: "Scroll down slowly",
  },
  {
    image: "url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80')",
    title: "Neon Streets",
    subtitle: "The city never sleeps",
  },
  {
    image: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
    title: "Future City",
    subtitle: "Where tomorrow begins",
  },
]

// ─────────────────────────────────────────────
// CROSSFADE FIX
// Builds opacity keyframes so adjacent images
// overlap — their opacities always sum to 1,
// so the background is never transparent/gray.
//
// Strategy: each image owns a slot of 1/N.
// It fades in during the last 50% of the previous
// slot, and fades out during the first 50% of the
// next slot. Adjacent images always overlap.
// ─────────────────────────────────────────────
function buildOpacityFrames(index, total) {
  const slot = 1 / total
  const fade = slot * 0.5 // overlap = half a slot

  const start = index * slot
  const end   = start + slot

  if (index === 0) {
    // First image: starts fully opaque, fades out at the end
    return { input: [0, end - fade, end], output: [1, 1, 0] }
  }
  if (index === total - 1) {
    // Last image: fades in, stays fully opaque to the end
    return { input: [start - fade, start, 1], output: [0, 1, 1] }
  }
  // Middle images: fade in then fade out
  return {
    input:  [start - fade, start, end - fade, end],
    output: [0,            1,     1,           0],
  }
}

// ─────────────────────────────────────────────
// BLUR FRAMES
// Blur spikes to BLUR_PEAK at each scene
// boundary, then clears — never blurs at rest.
// ─────────────────────────────────────────────
function buildBlurFrames(total) {
  const slot = 1 / total
  const half = slot * 0.25 // ramp width = quarter slot

  const input  = [0]
  const output = [0]

  for (let i = 1; i < total; i++) {
    const boundary = i * slot
    input.push(boundary - half, boundary, boundary + half)
    output.push(0, BLUR_PEAK, 0)
  }

  input.push(1)
  output.push(0)

  return { input, output }
}

// ─────────────────────────────────────────────
// BgLayer — one fixed image layer per scene
// ─────────────────────────────────────────────
function BgLayer({ image, opacity, scale, filter }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        scale,
        filter,
        backgroundImage: image,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  )
}

// ─────────────────────────────────────────────
// Scene — one sticky text panel per scene
// ─────────────────────────────────────────────
function Scene({ title, subtitle, isFirst }) {
  const Tag = isFirst ? "h1" : "h2"
  return (
    <section
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", padding: "0 24px" }}>
        <Tag
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: 0,
            textShadow: "0 2px 24px rgba(0,0,0,0.5)",
          }}
        >
          {title}
        </Tag>
        {subtitle && (
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// ProgressBar — thin line at bottom of screen
// Shows how far through the story you are.
// Remove <ProgressBar /> below to hide it.
// ─────────────────────────────────────────────
function ProgressBar({ progress }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "rgba(255,255,255,0.12)",
        zIndex: 50,
      }}
    >
      <motion.div
        style={{
          height: "100%",
          background: "rgba(255,255,255,0.6)",
          scaleX: progress,
          transformOrigin: "left",
        }}
      />
    </div>
  )
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function ScrollStory() {
  const containerRef = useRef(null)

  // scrollYProgress goes 0 → 1 as you scroll through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Spring smoothing — tweak SPRING config at the top
  const smooth = useSpring(scrollYProgress, SPRING)

  // Subtle zoom-in across the full scroll
  const scale = useTransform(smooth, [0, 1], [1, 1.06])

  // Blur spikes only at scene boundaries
  const blurFrames = buildBlurFrames(SCENES.length)
  const blurRaw    = useTransform(smooth, blurFrames.input, blurFrames.output)
  const filter     = useMotionTemplate`blur(${blurRaw}px)`

  // One opacity value per scene — crossfade ensures no gap
  const opacities = SCENES.map((_, i) => {
    const frames = buildOpacityFrames(i, SCENES.length)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useTransform(smooth, frames.input, frames.output)
  })

  return (
    // Total scroll height = one viewport per scene
    <div
      ref={containerRef}
      style={{
        position: "relative",
        background: "#000",
        color: "#fff",
        height: `${SCENES.length * 100}vh`,
      }}
    >
      {/* ── FIXED BACKGROUND STACK ──────────────────────── */}
      {/* All images live here, stacked, crossfading.        */}
      {/* At least one image is always fully opaque —        */}
      {/* the gray-flash bug cannot happen.                  */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden" }}>
        {SCENES.map((scene, i) => (
          <BgLayer
            key={i}
            image={scene.image}
            opacity={opacities[i]}
            scale={scale}
            filter={filter}
          />
        ))}

        {/* Dark overlay — change OVERLAY_OPACITY at the top */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#000",
            opacity: OVERLAY_OPACITY,
          }}
        />
      </div>

      {/* ── STICKY TEXT SECTIONS ────────────────────────── */}
      {/* Each section sticks during its scroll range, then  */}
      {/* gets pushed off naturally by the next section.     */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {SCENES.map((scene, i) => (
          <Scene
            key={i}
            title={scene.title}
            subtitle={scene.subtitle}
            isFirst={i === 0}
          />
        ))}
      </div>

      {/* ── PROGRESS BAR ────────────────────────────────── */}
      {/* Remove this line to hide the scroll indicator.    */}
      <ProgressBar progress={smooth} />
    </div>
  )
}