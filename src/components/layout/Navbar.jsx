// src/components/layout/Navbar.jsx
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = ["About", "News", "Services", "Our Team", "Make Enquiry"];

  return (
    <header className="w-full flex justify-center bg-transparent">
      {/* FIXED bar */}
      <div
        className="
          fixed top-0                          /* stick to top on mobile */
          md:top-6                           /* 24px inset on md+ */
          left-0 right-0                    /* Span full width by default */
          md:left-auto md:right-auto        /* Remove left/right on md+ to allow margin auto */
          md:w-[96%] max-w-[1400px]
          md:mx-auto                         /* Auto margins for centering on md+ */
          h-[101px]
          px-4 py-2
          border border-gray-300 bg-white
          flex items-center justify-between
          z-50 shadow-sm
        "
      >
        {/* Desktop nav links */}
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

        {/* Contact button */}
        <button className="w-[148px] h-[36px] flex items-center justify-center gap-2 border border-black bg-white text-black text-sm font-medium hover:bg-black hover:text-white transition-colors">
          Contact us
          <ArrowRight size={16} strokeWidth={2} />
        </button>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden bg-[#F9F5F0] p-2"
          onClick={() => setMobileOpen((p) => !p)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="
            fixed top-[101px] inset-x-0         /* directly under the bar */
            bg-white border-t border-gray-300
            px-6 py-4 flex flex-col gap-4 md:hidden z-40
          "
        >
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
