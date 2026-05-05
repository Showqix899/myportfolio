import ScrollReveal from "../components/ScrollReveal"
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

const skillsLogos = [
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984751/django_logo_mnmwn5.png", alt: "django" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984751/express_logo_wqqiju.png", alt: "express" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984752/nodejs_logo_alexho.png", alt: "node" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984753/react_logo_usgu7w.png", alt: "react" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984753/psql_logo_l5fntv.png", alt: "postgresql" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984752/mongo_db_logo_hkkcot.png", alt: "mongodb" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984752/msql_logo_z7pzje.png", alt: "mssql" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984753/redis_log_qaisdb.png", alt: "redis" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984751/docker_logo_oy3lto.png", alt: "docker" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984752/nginx_logo_ztpleb.png", alt: "nginx" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984751/firebase_logo_c39hdg.png", alt: "firebase" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984753/postman_loog_bgutkd.png", alt: "postman" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984751/github_logo_2_zrmf4s.png", alt: "github" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984752/numpy_logo_tlj2j0.png", alt: "numpy" },
    { src: "https://res.cloudinary.com/dll75buvd/image/upload/v1777984752/pandas_logo_b72ovu.png", alt: "pandas" },
];

export default function Home() {
    const duplicatedLogos = [...skillsLogos, ...skillsLogos, ...skillsLogos];
    return (
        <>

            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center justify-center py-20 px-6">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Introduction Section */}
                    <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">

                        <div className="space-y-2">
                            <ScrollReveal duration={0.8} direction="right">
                                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                                    I’m Mahmud Showqi,
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal duration={0.9} direction="left">
                                <h2 className="text-2xl md:text-4xl font-light">
                                    A <span className=" font-medium italic">Full Stack Developer</span>
                                </h2>
                            </ScrollReveal>
                        </div>

                        <div className="max-w-lg">
                            <ScrollReveal duration={1} direction="right">
                                <p className="text-sm md:text-base leading-relaxed font-mono uppercase tracking-widest">
                                    Who builds modern, high-performance web experiences from idea to deployment.
                                </p>
                            </ScrollReveal>
                        </div>

                        {/* Optional: Add a subtle CTA or separator line */}
                        <div className="pt-4">
                            <div className="h-px w-12  mx-auto lg:mx-0"></div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <ScrollReveal direction="right">
                        <div className="flex items-center justify-center mt-2">

                            <div className="hover-3d">
                                <figure className="w-auto rounded-2xl">
                                    <img src="https://res.cloudinary.com/dll75buvd/image/upload/v1777984623/img1_gmzwb8.jpg" alt="Tailwind CSS 3D card" className="w-72" />
                                </figure>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>



                        </div>

                    </ScrollReveal>

                </div>
            </section>
            {/* about me section */}
            <div className="divider sm:mb-8"></div>
            <div className=" grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center mb-4 mt-2 px-4">
                    <ScrollReveal duration={0.8} direction="left">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center">
                            About Me
                        </h1>
                    </ScrollReveal>
                </div>

                <div className="flex items-center justify-center lg:h-96 px-4 lg:p-5 ">
                    <ScrollReveal duration={2} direction="right">


                        <>
                            <p className="text-lg md:text-xl font-light  leading-relaxed tracking-tight">
                                I’m a <span className=" font-medium">Full Stack Web Developer</span> skilled in building modern web applications using <span className=" font-medium border-b border-neutral-800">React</span> on the frontend and <span className=" font-medium">Django REST Framework / Express.js</span> on the backend. I work with <span className="">PostgreSQL, MS SQL,</span> and <span className="">MongoDB</span> to design scalable and efficient systems.
                            </p>

                            <p className="mt-6 text-sm md:text-base text-neutral-500 font-normal border-l border-neutral-800 pl-4">
                                I also have experience with <span className="">DevOps basics</span> including Docker, Nginx, and Gunicorn, along with backend optimization techniques like caching, database indexing, and background workers.
                            </p>

                            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-bold">
                                Clean Code // High Performance // Smooth UX
                            </p>
                        </>
                    </ScrollReveal>
                </div>
            </div>

            <div className="divider"></div>

            {/* Edication section */}

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
                <div className="order-2 lg:order-1 flex items-center justify-center px-4 lg:p-5">
                    <ScrollReveal duration={1} direction="right">



                        <div className="w-full flex justify-center items-center py-10">
                            <div className="max-w-xl w-full space-y-12">

                                {/* Item 1: Degree */}
                                <div className="relative pl-8 border-l border-neutral-800 group">
                                    {/* Minimalist "bullet" indicator */}


                                    <h3 className="text-lg md:text-xl font-bold  tracking-tight">
                                        BSc in Computer Science and Engineering
                                    </h3>
                                    <p className="text-neutral-400 text-sm md:text-base mt-1">
                                        International Islamic University Chittagong
                                    </p>
                                </div>

                                {/* Item 2: Certification */}
                                <div className="relative pl-8 border-l border-neutral-800 group">
                                    {/* Minimalist "bullet" indicator */}

                                    <h3 className="text-lg md:text-xl font-bold  tracking-tight">
                                        Python Django
                                    </h3>
                                    <p className="text-neutral-400 text-sm md:text-base mt-1 italic">
                                        Enhancing Digital Government and Economy (EDGE)
                                    </p>

                                    <div className="mt-4">
                                        <a
                                            href="https://drive.google.com/file/d/1KiOFGWiQFXQ0rHN9ir0icxBJHE-xi0Nu/view?usp=sharing"
                                            className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-neutral-500 hover:text-white border border-neutral-800 px-4 py-2 rounded-sm transition-all duration-300 hover:bg-neutral-900"
                                        >
                                            View Certificate
                                            <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="order-1 lg:order-2 flex items-center justify-center h-52  px-4">
                    <ScrollReveal duration={0.8} direction="left">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center">
                            Education & <br />
                            Certifications
                        </h1>
                    </ScrollReveal>
                </div>
            </div>

            <div className="divider"></div>

            {/* Skills & Tools Section */}
            <section className="py-10 md:py-20 px-4 max-w-7xl mx-auto">

                {/* MOBILE & TABLET VERSION (Visible on sm and md, hidden on lg+) */}
                <div className="lg:hidden">
                    <ScrollReveal duration={0.8} direction="up">
                        <div className="w-full p-5 flex flex-col items-center justify-center bg-base-100 border border-base-300 rounded-3xl shadow-xl">
                            <div className="flex w-full mt-2 items-center justify-center h-24">
                                <h2 className="text-3xl font-black tracking-tighter">Skills & Tools</h2>
                            </div>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 w-full place-items-center px-4 pb-8">
                                {skillsLogos.map((logo, index) => (
                                    <div key={index} className="w-16 h-16 flex items-center justify-center rounded-xl bg-base-200 border border-base-300">
                                        <img className="w-10 h-auto object-contain" src={logo.src} alt={logo.alt} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* DESKTOP VERSION (Hidden on sm/md, visible on lg+) */}
                <div className="hidden lg:block">
                    <ScrollReveal duration={0.8} direction="left">
                        <div className="bg-base-100 border border-base-300 rounded-3xl p-10 shadow-xl overflow-hidden">

                            <div className="text-center mb-16">
                                <h2 className="text-6xl font-black tracking-tighter">
                                    Skills <span className="opacity-30">&</span> Tools
                                </h2>
                            </div>

                            <div className="relative flex overflow-hidden">
                                <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-base-100 to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-base-100 to-transparent z-10"></div>

                                <motion.div
                                    className="flex flex-none gap-8 pr-8"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{
                                        ease: "linear",
                                        duration: 25,
                                        repeat: Infinity,
                                    }}
                                >
                                    {duplicatedLogos.map((logo, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex-none group relative"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                        >
                                            <div className="w-32 h-32 flex items-center justify-center rounded-2xl bg-base-200 border border-base-300 transition-colors group-hover:border-primary/30">
                                                <img
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    className="w-16 h-auto transition-all duration-300"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

            </section>


            <div className="divider"></div>
            {/* projects */}



            <ScrollReveal duration={0.8}>
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-2xl lg:text-5xl font-bold">Projects</h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full place-items-center p-5">
                    {/* card-1 */}
                    <div className="hover-3d">
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://res.cloudinary.com/dll75buvd/image/upload/v1777984628/zing-banner_tjccp3.png"
                                    alt="zingfashion.com"
                                    className="rounded-xl"
                                />
                            </figure>

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">ZingFashion E-Commerce</h2>

                                <div className="w-full flex items-center justify-between p-3">
                                    <a className="btn btn-outline btn-success" href="https://zingfashion.com/" target="/">
                                        live-link
                                    </a>
                                    <Link className="btn btn-outline btn-ghost btn-sm" to="/zing-fashion">
                                        More...
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 3D layers */}
                        <div className="pointer-events-none">
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className="hover-3d">
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://res.cloudinary.com/dll75buvd/image/upload/v1777984625/watch-party-banner_flc1dp.jpg"
                                    alt="zingfashion.com"
                                    className="rounded-xl"
                                />
                            </figure>

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Live-Watch Party</h2>

                                <div className="w-full flex items-center justify-between p-3">
                                    <a className="btn btn-outline btn-success" href="https://live-watch-room-6msc.vercel.app/" target="/">
                                        live-link
                                    </a>
                                    <Link to="/live-watch-party" className="btn btn-outline btn-primary">
                                        More...
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 3D layers */}
                        <div className="pointer-events-none">
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                        </div>
                    </div>

                </div>
            </ScrollReveal>

            <section className="p-8 md:p-16 min-h-screen flex items-center justify-center m-3">
                <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <ScrollReveal>
                        <div className="space-y-6 order-2 lg:order-1">
                            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tighter">
                                Work <br /> Experience
                            </h1>

                            <div className="space-y-4 text-neutral-400">
                                <p className="text-lg border-l-2 border-neutral-700 pl-4">
                                    Currently a member of <span className=" font-medium">IIUC Developers & Entrepreneurs Society</span>.
                                </p>
                                <a
                                    href="https://www.facebook.com/IIUC.DES"
                                    target="/"
                                    className="inline-block text-sm uppercase tracking-widest text-green-700 hover:text-black transition-colors duration-300 underline underline-offset-8"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column: Image */}
                    <ScrollReveal direction="down" duration={1}>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <div className="relative w-full max-w-100 aspect-square overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-neutral-800 p-1">
                                <img
                                    src="src/assets/img/dev-socity.jpeg"
                                    alt="IIUC Developer Society"
                                    className="w-full h-full object-cover  transition-all duration-700 ease-in-out"
                                />
                            </div>
                        </div>

                    </ScrollReveal>

                </div>
            </section>


        </>
    )
}