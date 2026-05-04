import ScrollReveal from "../components/ScrollReveal"

export default function Home() {
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
                    <div className="flex items-center justify-center mt-2">

                        <div className="hover-3d">
                            <figure className="w-auto rounded-2xl">
                                <img src="\src\assets\img\img1.jpg" alt="Tailwind CSS 3D card" className="w-72" />
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


                </div>
            </section>
            {/* about me section */}
            <div className="divider sm:mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
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

            {/* Skills section */}
            <ScrollReveal>
                <div className="w-full p-5 sm:flex-col items-center justify-center">
                    <div className="flex w-full lg:mt-5 sm:mt-2 items-center justify-center h-32">
                        <h1 className="text-5xl font-bold text-black">Skills & Tools</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full place-items-center px-4">
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/django_logo.png" alt="django" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/express_logo.png" alt="express" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/nodejs_logo.png" alt="node" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/react_logo.png" alt="react" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/psql_logo.png" alt="postgresql" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/mongo_db_logo.png" alt="mongodb" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/msql_logo.png" alt="mssql" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/redis_log.png" alt="redis" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/docker_logo.png" alt="docker" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/nginx_logo.png" alt="nginx" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/firebase_logo.png" alt="firebase" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/postman_loog.png" alt="postman" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/github_logo_2.png" alt="github" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/numpy_logo.png" alt="numpy" />
                        <img className="w-12 sm:w-14 md:w-16 h-auto object-contain" src="src/assets/logo/pandas_logo.png" alt="pandas" />
                    </div>
                </div >
            </ScrollReveal>

            <div className="divider"></div>
            {/* projects */}



            <ScrollReveal>
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-2xl lg:text-5xl font-bold">Projects</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full place-items-center p-5">
                    {/* card-1 */}
                    <div className="hover-3d">
                        <div className="card bg-base-100 w-96 shadow-sm relative z-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src="src/assets/img/zing-banner.png"
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
                                    <a className="btn btn-outline btn-primary" href="#">
                                        More...
                                    </a>
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
                                    src="src\assets\img\watch-party-banner.jpg"
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
                                    <a className="btn btn-outline btn-primary" href="#">
                                        More...
                                    </a>
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