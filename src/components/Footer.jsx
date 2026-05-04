export default function Footer() {
    return (
        <>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <p className="link link-hover"><b>Email</b> : mshowqi12@gmail.com</p>
                    <a className="link link-hover"><b>phone</b>: 01307823878</a>
                    
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                       
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </>
    )
}