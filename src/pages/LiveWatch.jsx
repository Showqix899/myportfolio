import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const images = [
    { src: "src/assets/img/watch-party-banner.jpg", alt: "img1" },
    { src: "src/assets/img/watch-party-1.png", alt: "img2" },
    { src: "src/assets/img/watch-party-2.png", alt: "img3" },
    { src: "src/assets/img/watch-party-3.png", alt: "img4" },
    { src: "src/assets/img/watch-party-banner.png", alt: "img1" },
    { src: "src/assets/img/watch-party-2.png", alt: "img3" },
];

export default function WatchLive() {
    // We double the array to ensure there's always content visible during the loop
    const infiniteImages = [...images, ...images, ...images, ...images, ...images];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[70%_30%] lg:grid-cols-[70%_30%] mt-20">


                {/* Infinite Scroll Container */}
                <ScrollReveal direction="left" duration={0.8}>
                    <div className="relative w-full overflow-hidden bg-gray-50 py-4 lg:border-r-4 border-0 border-gray-500">
                        <motion.div
                            className="flex whitespace-nowrap"
                            animate={{
                                x: ["0%", "-50%"], // Moves from start to halfway (since we doubled the images)
                            }}
                            transition={{
                                duration: 10, // Adjust speed here (higher = slower)
                                ease: "linear",
                                repeat: Infinity,

                            }}
                        >
                            {infiniteImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    className="shrink-0 px-4 w-75 md:w-125"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Optional: Gradient Overlays for a "fade" edge effect */}
                        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent pointer-events-none" />


                    </div>
                </ScrollReveal>
                <div className="flex w-full items-center justify-center">
                    <ScrollReveal direction="right" duration={0.8} delay={0.1} className="">

                        <h1 className="lg:text-3xl sm:text-2xl font-bold italic text-center">Live-Watch party</h1>
                    </ScrollReveal>
                </div>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ScrollReveal direction="left" duration={0.5}>
                    <div className="">
                        <a href="https://live-watch-room-6msc.vercel.app/" target="/" className="btn btn-xl btn-outline btn-success text-gray-500">llive-link</a>
                    </div>
                </ScrollReveal>
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }}>
                    <a href="https://github.com/Showqix899/Live-watch-room" className="btn btn-xl btn-outline btn-info text-gray-500">GitHub-link</a>
                </motion.div>
                

            </div>

            {/* Introduction */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 mt-12 lg:mt-20 font-sans text-gray-800">
                {/* Header Section */}
                <div className="mb-6">
                    <motion.h1
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }} // Optional: prevents animation from re-triggering every scroll
                        transition={{
                            duration: 1,
                            ease: "easeOut"
                        }}
                        variants={{
                            hidden: {
                                opacity: 0, // Fixed spelling
                                y: 60,      // Changed from 1 to 20 for a subtle "slide up" effect
                            },
                            show: {
                                opacity: 1, // Fixed spelling
                                y: 0,
                            }
                        }}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                        Introduction
                    </motion.h1>
                    <hr className="mt-4 border-t-2 border-gray-100" />
                </div>

                {/* Content Section */}
                <div className="space-y-6 leading-relaxed text-lg">
                    <motion.p initial="hidden" whileInView="show" transition={{
                        duration: 1,
                        ease: "easeOut"
                    }} variants={{
                        hidden: {
                            opacity: 0.2,
                            x: 60
                        },
                        show: {
                            opacity: 1,
                            x: 0
                        }
                    }}>
                        This project is a modern
                        <span className="mx-1 font-semibold text-gray-600">e-commerce</span>
                        platform built for clothing retail. It allows customers to browse products, explore categories, view product details, manage carts, and place orders through a fast and responsive web interface. The system is designed to provide a smooth shopping experience while also giving administrators full control over products, inventory, customer activity, and business operations.
                    </motion.p>

                    <motion.p initial="hidden" whileInView="show" transition={{
                        duration: 1,
                        ease: "easeOut"
                    }} variants={{
                        hidden: {
                            opacity: 0.2,
                            x: -60
                        },
                        show: {
                            opacity: 1,
                            x: 0
                        }
                    }}
                    >
                        The frontend is developed with
                        <span className="mx-1 font-semibold text-blue-500">React</span>,
                        which provides a dynamic and interactive user experience. The backend uses
                        <span className="mx-1 font-semibold text-emerald-800">Django REST Framework</span>
                        to expose secure and scalable APIs.
                        <span className="font-medium text-gray-900">MongoDB</span> is used for flexible storage, while
                        <span className="font-medium text-gray-900">Redis</span> is integrated for caching frequently accessed data to improve response speed and reduce server load.
                    </motion.p>

                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-400">
                        <motion.p initial="hidden" whileInView="show" transition={{
                            duration: 1,
                            ease: "easeOut"
                        }} variants={{
                            hidden: {
                                opacity: 0.2,
                                x: 60
                            },
                            show: {
                                opacity: 1,
                                x: 0
                            }
                        }}
                        >
                            In addition to standard functionality, the platform includes an
                            <span className="font-bold text-gray-900"> admin dashboard </span>
                            with analytical monitoring. This gives administrators visibility into customer behavior, sales activity, and stock movement, supporting data-driven business decisions.
                        </motion.p>
                    </div>

                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 md:px-12 pb-20 font-sans text-gray-800 mt-20">

                {/* Key Features Header */}
                <ScrollReveal duration={0.4}>
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                        <div className="h-1 w-20 bg-blue-500 mt-2"></div>
                    </div>
                </ScrollReveal>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Customer Features */}
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                            <span className="mr-2">🛍️</span> Customer Experience
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> User registration & secure authentication</li>
                            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Dynamic product search, filtering, and sorting</li>
                            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Detailed product pages (size, color, availability)</li>
                            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Advanced shopping cart & order history</li>
                            <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Fully responsive mobile-first design</li>
                        </ul>
                    </motion.div>

                    {/* Admin Dashboard */}
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1 }} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center">
                            <span className="mr-2">⚙️</span> Admin Management
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Full CRUD operations for products & inventory</li>
                            <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Real-time order monitoring & fulfillment</li>
                            <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Category and stock management</li>
                            <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Customer activity & purchase tracking</li>
                        </ul>
                    </motion.div>

                    {/* Analytics & Surveillance - Full Width on Desktop */}
                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 1.2 }} className="md:col-span-2 bg-gray-900 p-8 rounded-2xl text-gray-100">
                        <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center">
                            <span className="mr-2">📊</span> Analytics & Surveillance
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Sales analytics (Daily/Weekly/Monthly)</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Behavior tracking & cart abandonment</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Best-selling product performance</li>
                            </ul>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start"><span className="text-red-400 mr-2">⚠</span> Anomaly detection (suspicious login spikes)</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Real-time inventory movement tracking</li>
                                <li className="flex items-start"><span className="text-blue-400 mr-2">✓</span> Revenue & engagement metrics</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Technical Stack Section */}
                <div className="mt-16">
                    <motion.h2
                        initial="hidden" whileInView="show" transition={{
                            duration: 1,
                            ease: "easeOut"
                        }} variants={{
                            hidden: {
                                opacity: 0.2,
                                x: 60
                            },
                            show: {
                                opacity: 1,
                                x: 0
                            }
                        }}
                        className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Stack
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4 py-10 bg-gray-50">
                        {/* React */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="px-6 py-2.5 rounded-2xl font-bold border border-white/40 bg-white/20 backdrop-blur-md shadow-lg text-blue-600 cursor-default hover:bg-white/30 transition-colors"
                        >
                            React
                        </motion.div>

                        {/* Django REST Framework */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="px-6 py-2.5 rounded-2xl font-bold border border-white/40 bg-white/20 backdrop-blur-md shadow-lg text-emerald-800 cursor-default hover:bg-white/30 transition-colors"
                        >
                            Django REST Framework
                        </motion.div>

                        {/* MongoDB */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="px-6 py-2.5 rounded-2xl font-bold border border-white/40 bg-white/20 backdrop-blur-md shadow-lg text-green-700 cursor-default hover:bg-white/30 transition-colors"
                        >
                            MongoDB
                        </motion.div>

                        {/* Redis */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="px-6 py-2.5 rounded-2xl font-bold border border-white/40 bg-white/20 backdrop-blur-md shadow-lg text-red-600 cursor-default hover:bg-white/30 transition-colors"
                        >
                            Redis
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}