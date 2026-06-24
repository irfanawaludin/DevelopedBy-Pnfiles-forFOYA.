"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const WA_NUMBER = "6282233192856";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WA_NUMBER}?text=Halo FOYA, saya ingin melihat koleksi produknya`,
      "_blank"
    );
  };

  useEffect(() => {
    const el = heroRef.current;

    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-40" />

        <div className="absolute bottom-20 left-10 w-96 h-96 bg-fuchsia-200 rounded-full blur-3xl opacity-30" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div
            ref={heroRef}
            className="space-y-8"
          >

            {/* Heading */}

            <div className="space-y-4">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">

                Express Your

                <br />

                <span className="bg-gradient-to-r from-purple-700 to-fuchsia-500 bg-clip-text text-transparent">
                  Style
                </span>

                <br />

                With FOYA

              </h1>

              <p className="text-lg text-gray-500 max-w-lg">
                Kaos lokal dengan desain modern, nyaman dipakai, dan siap menemani aktivitas harianmu.
              </p>

            </div>

            {/* Button */}

            <div className="flex flex-wrap gap-4">

              <a
                href="#koleksi"
                className="flex items-center gap-2 px-6 py-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-medium transition-colors"
              >

                Lihat Koleksi

                <ArrowRight size={18} />

              </a>

              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 px-6 py-4 rounded-xl border border-purple-300 hover:bg-purple-50 text-purple-700 font-medium transition-colors"
              >

                <MessageCircle size={18} />

                Pesan via WhatsApp

              </button>

            </div>

            {/* Stats */}

            <div className="flex gap-8 pt-6 border-t border-gray-200">

              {[
                {
                  value: "500+",
                  label: "Happy Customers",
                },

                {
                  value: "20+",
                  label: "Desain Eksklusif",
                },

                {
                  value: "4.9★",
                  label: "Rating Pelanggan",
                },

              ].map((item) => (

                <div key={item.label}>

                  <p className="text-2xl font-bold text-purple-700">
                    {item.value}
                  </p>

                  <p className="text-sm text-gray-500">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

<div className="hidden lg:flex justify-center items-center relative">

  <img
    src="/logofoya.png"
    alt="FOYA Logo"
    className="w-100 h-100 object-contain"
  />

</div>

        </div>

      </div>
    </section>
  );
}