import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  duration = 0.7,
  delay = 0,
  amount = 0.2,
  once = false,
  direction = "up",
  distance = 60,
}) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        transition={{ duration, delay }}
        viewport={{ once, amount }}
      >
        {children}
      </motion.div>
    </div>
  );
}