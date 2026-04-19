"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/HomePage" },
    { name: "Product", href: "/Product" },
    { name: "Pricing", href: "/Pricing" },
    { name: "About Us", href: "/AboutUS" },
    { name: "Blog", href: "/Blog" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        <Link href="/HomePage" className="flex items-center gap-2 shrink-0">
          <div className="relative w-9 h-9">
             <img src="favicon.ico" alt="Orbit Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-2xl font-black bg-gradient-to-b from-[#14ADD6] to-[#384295] bg-clip-text text-transparent tracking-tight">
            Orbit
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[15px] font-medium text-slate-600 hover:text-[#14ADD6] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/trial"
            className="hidden sm:inline-flex items-center justify-center bg-[#1D2130] text-white px-7 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-95 text-sm"
          >
            Free trial
          </Link>

          <button 
            className="md:hidden flex flex-col gap-1.5 p-2" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6 h-0.5 bg-slate-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-slate-800 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-slate-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`
        md:hidden overflow-hidden transition-all duration-300 bg-white border-b
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="px-6 py-8 flex flex-col gap-5 border-t">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-lg font-semibold text-slate-700">
              {link.name}
            </Link>
          ))}
          <Link href="/trial" className="w-full text-center bg-[#1D2130] text-white py-4 rounded-xl font-bold">
            Get Started Free
          </Link>
        </div>
      </div>
    </nav>
  );
}