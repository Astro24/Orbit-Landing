export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-[#1D2130] text-base-content p-10">
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Why Choose us</a>
                <a className="link link-hover">Pricing</a>
                <a className="link link-hover">Testimonial</a>
            </nav>
            <nav>
                <h6 className="footer-title">Resources</h6>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Terms and Condition</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Contact Us</a>
            </nav>
            <nav>
                <h6 className="footer-title">Product</h6>
                <a className="link link-hover">Project managment</a>
                <a className="link link-hover">Time tracker</a>
                <a className="link link-hover">Time schedule</a>
                <a className="link link-hover">Lead generate</a>
                <a className="link link-hover">Remote Collaboration</a>
            </nav>
            <nav>
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <img src="favicon.ico" alt="Orbit Logo" width={32} height={32} />
                    </div>
                    <span className="text-xl font-extrabold bg-gradient-to-b from-[#14ADD6] to-[#384295] bg-clip-text text-transparent">Orbit</span>
                </div>
                <p className="font-bold">Subscribe to our Newsletter</p>
                <div>
                    <input type="email" placeholder="Enter your Email" className="h-[56px] w-[290px] bg-[#2B2E3C]" />
                    <button className="bg-[#FFFFFF] text-[#1D2130] h-[56px] w-[152] px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-700 transition-colors">Subscribe</button>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto px-10 pb-6 flex items-center gap-5">
                <div className="h-px flex-grow bg-gray-700" />
                <span className="text-sm text-slate-500 whitespace-nowrap">© Copyright Orbit 2022</span>
                <div className="flex gap-4 text-slate-400">
                    <span className="cursor-pointer hover:text-white transition-colors">FB</span>
                    <span className="cursor-pointer hover:text-white transition-colors">TW</span>
                    <span className="cursor-pointer hover:text-white transition-colors">IG</span>
                    <span className="cursor-pointer hover:text-white transition-colors">LN</span>
                </div>
                <div className="h-px flex-grow bg-gray-700" />
            </div>
        </footer>
    )
}