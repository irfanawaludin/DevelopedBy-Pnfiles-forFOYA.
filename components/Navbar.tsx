"use client";

import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Koleksi", href: "#koleksi" },
  { label: "Tentang", href: "#tentang" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Hubungi Kami", href: "#footer" },
];

const WA_NUMBER = "6282233192856";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOrder = () => {
    const message = encodeURIComponent(
      "Halo FOYA, saya ingin mengetahui lebih lanjut tentang produk kalian."
    );

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-purple-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >

            <img
              src="/logofoya.png"
              alt="FOYA Logo"
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />

            <span className="text-2xl font-bold text-slate-900">
              FOYA
            </span>

          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (

              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors relative group"
              >

                {link.label}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-700 rounded-full transition-all duration-300 group-hover:w-full" />

              </a>

            ))}

          </div>

          {/* CTA */}
          <div className="hidden md:flex">

            <button
              onClick={handleOrder}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium transition-colors"
            >

              <ShoppingBag size={16} />

              Pesan Sekarang

            </button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >

            {isOpen ? <X size={24} /> : <Menu size={24} />}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="bg-white px-6 py-4 border-t border-purple-100 space-y-2">

          {navLinks.map((link) => (

            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >

              {link.label}

            </a>

          ))}

          <button
            onClick={handleOrder}
            className="w-full mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium transition-colors"
          >

            <ShoppingBag size={16} />

            Pesan Sekarang

          </button>

        </div>

      </div>

    </nav>
  );
}