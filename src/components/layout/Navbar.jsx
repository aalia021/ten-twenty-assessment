// src/components/layout/Navbar.jsx
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = ["About", "News", "Services", "Our Team", "Make Enquiry"];

  return (
    <header className="w-full flex justify-center bg-transparent relative">
      {" "}
      {/* Added relative here for mobile dropdown positioning */}
      <div className="w-full max-w-[1400px] h-[101px] mt-4 mx-auto px-4 py-2 border border-gray-300 bg-white flex items-center justify-between md:px-8">
        {" "}
        {/* Adjusted width, added max-w, adjusted padding */}
        {/* --- LEFT: desktop nav (hidden on mobile) --- */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-black transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>
        {/* --- MIDDLE: Contact button (always visible) --- */}
        <button
          className="
            w-[148px] h-[36px] flex items-center justify-center gap-2
            border border-black bg-white text-black text-sm font-medium
            hover:bg-black hover:text-white transition-colors
          "
        >
          Contact us
          <ArrowRight size={16} strokeWidth={2} />
        </button>
        {/* --- RIGHT: Hamburger (mobile only) --- */}
        <button
          className="md:hidden bg-[#F9F5F0] p-2"
          onClick={() => setMobileOpen((p) => !p)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {/* ---------- MOBILE DROPDOWN ---------- */}
      {mobileOpen && (
        <div className="absolute top-full inset-x-0 bg-white border-t border-gray-300 px-6 py-4 flex flex-col gap-4 md:hidden z-50">
          {" "}
          {/* Changed top-[101px] to top-full */}
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-800 text-sm font-medium hover:text-black"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
