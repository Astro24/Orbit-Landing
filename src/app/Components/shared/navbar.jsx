import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between max-w-7xl mx-auto p-4 sm:p-6 font-Roboto">
            <div className="flex items-center gap-2">
                <Link href='HomePage' className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <img src="favicon.ico" alt="Orbit Logo" width={32} height={32} />
                    </div>
                    <span className="text-xl font-extrabold bg-gradient-to-b from-[#14ADD6] to-[#384295] bg-clip-text text-transparent">Orbit</span>
                </Link>
            </div>
            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
                    <Link href="/" className="hover:text-black">Home</Link>
                    <Link href="/Product" className="hover:text-black">Product</Link>
                    <Link href="/Pricing" className="hover:text-black">Pricing</Link>
                    <Link href="/Aboutus" className="hover:text-black">About Us</Link>
                    <Link href="/Blog" className="hover:text-black">Blog</Link>
                    <Link href="/Contact" className="hover:text-black">Contact</Link>
                </div>

                <Link
                    href="/trial"
                    className="bg-[#1e293b] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-700 transition-colors"
                >
                    Free trial
                </Link>
            </div>
        </nav>
    )
}