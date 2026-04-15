import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1D2130] text-white p-10 pb-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
                <nav className="flex flex-col gap-2">
                    <h6 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-2">Company</h6>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">About Us</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Why Choose us</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Pricing</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Testimonial</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-2">Resources</h6>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Privacy Policy</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Terms and Condition</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Blog</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Contact Us</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-2">Product</h6>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Project management</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Time tracker</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Time schedule</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Lead generate</a>
                    <a className="cursor-pointer hover:text-[#14ADD6] transition-colors">Remote Collaboration</a>
                </nav>

                <nav className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <img src="favicon.ico" alt="Orbit Logo" width={32} height={32} />
                        <span className="text-xl font-extrabold bg-gradient-to-b from-[#14ADD6] to-[#384295] bg-clip-text text-transparent">
                            Orbit
                        </span>
                    </div>
                    <p className="font-bold text-lg">Subscribe to our Newsletter</p>
                    <div className="relative w-full max-w-md">
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-[#2B2E3C] rounded-2xl border border-gray-700 p-2 focus-within:border-[#14ADD6] transition-colors">
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-full flex-1 bg-transparent px-4 py-3 focus:outline-none text-sm sm:text-base text-white placeholder-gray-400"
                            />
                            <button className="w-full sm:w-auto h-11 sm:h-12 px-8 bg-white text-[#1D2130] rounded-xl font-bold hover:bg-gray-200 active:scale-95 transition-all text-sm sm:text-base whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <footer className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm opacity-70">
                    © {new Date().getFullYear()} Orbit Inc. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="#" className="text-white hover:text-[#14ADD6] transition-colors"><FaFacebook /></a>
                    <a href="#" className="text-white hover:text-[#14ADD6] transition-colors"><RiTwitterXLine /></a>
                    <a href="#" className="text-white hover:text-[#14ADD6] transition-colors"><FaInstagram /></a>
                    <a href="#" className="text-white hover:text-[#14ADD6] transition-colors"><FaLinkedin /></a>
                </div>
            </footer>
        </footer>
    );
}