import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 z-50" data-theme="acid">
                {/* <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div> */}
                <div className="navbar-start">
                    <div className="avatar avatar-placeholder">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <img src="src\assets\img\img1.jpg"/>
                        </div>
                    </div>
                    <span className="pl-3"><Link to="/">MahmudShowqi</Link></span>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-between items-center full">
                        <a href="https://github.com/Showqix899" className="btn btn-ghost  btn-circle">
                            <img src="https://res.cloudinary.com/dll75buvd/image/upload/v1777984752/icons8-github-94_rtcrda.png" alt="github" />
                        </a>
                        <a href="https://x.com/ShowqiMahmud281" className="btn btn-ghost  btn-circle">
                            <img src="https://res.cloudinary.com/dll75buvd/image/upload/v1777984752/icons8-x-94_fvxkrn.png" alt="x" />
                        </a>
                        <a href="https://www.facebook.com/sami.hasan.31586526/" className="btn btn-ghost  btn-circle">
                            <img src="https://res.cloudinary.com/dll75buvd/image/upload/v1777984751/icons8-facebook-94_nh9jwm.png" alt="x" />
                        </a>
                        <a href="https://www.linkedin.com/in/mahmod-showqi-4477a82b2/" className="btn btn-ghost btn-circle">
                            <img src="https://res.cloudinary.com/dll75buvd/image/upload/v1777984752/icons8-linkedin-94_e0vuom.png" alt="linkedin" />
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

