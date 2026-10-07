"use client";
import { useState, useEffect } from "react";


const navLinks = [
  { href: "/#menu", label: "Menu" },
  { href: "/#cabang", label: "Cabang" },
  { href: "/#cara-pesan", label: "Cara Pesan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3A2318]/95 backdrop-blur-sm shadow-[0_2px_16px_rgba(58,35,24,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 font-display font-bold text-[#E8A93B] text-lg tracking-tight"
        >
          <img src="/logo.png" alt="Lekker Story Logo" className="h-6 w-auto" />
          Lekker Story
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 rounded text-[#F3EBD9]/80 hover:text-[#F3EBD9] text-sm font-body font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#cara-pesan"
              className="ml-2 px-4 py-1.5 rounded bg-[#E8A93B] text-[#3A2318] text-sm font-body font-600 hover:bg-[#d4963a] transition-colors duration-200"
              style={{ fontWeight: 600 }}
            >
              Pesan Sekarang
            </a>
          </li>
        </ul>

        {/* Mobile: just show order button */}
        <a
          href="/#cara-pesan"
          className="md:hidden px-3 py-1.5 rounded bg-[#E8A93B] text-[#3A2318] text-sm font-body"
          style={{ fontWeight: 600 }}
        >
          Pesan
        </a>
      </nav>
    </header>
  );
}
