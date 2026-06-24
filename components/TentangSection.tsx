"use client";

import { useEffect, useRef } from "react";

export default function TentangSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add("visible");
                }, i * 150);
              });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tentang" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual Side */}
          <div className="relative animate-on-scroll">

            <div className="relative w-full aspect-square max-w-md mx-auto">

              {/* Logo FOYA */}
              <div className="absolute inset-0 flex items-center justify-center">

                <img
                  src="/logofoya.png"
                  alt="FOYA Logo"
                  className="w-150 h-150 object-contain"
                />

              </div>

              

            </div>

          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-on-scroll">

            <span className="text-purple-700 font-semibold text-sm uppercase tracking-widest">
              Tentang Kami
            </span>

            <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 leading-tight">

              Siapa <span className="text-purple-700">FOYA?</span>

            </h2>

            <p className="text-gray-500 text-lg leading-relaxed">

              FOYA adalah lokal brand yang menghadirkan desain sederhana,
              modern, dan nyaman dipakai untuk berbagai aktivitas sehari-hari.

            </p>

            <p className="text-gray-500 leading-relaxed">

              Kami percaya bahwa fashion lokal bisa bersaing dengan brand
              internasional. Dengan bahan premium dan proses produksi yang
              teliti, setiap kaos FOYA dibuat untuk tahan lama dan tetap stylish.

            </p>

            <div className="flex flex-wrap gap-4 pt-2">

              {[
                {
                  emoji: "🔰",
                  text: "Lokal Pride",
                },

                {
                  emoji: "♻️",
                  text: "Sustainable Fashion",
                },

              ].map((item) => (

                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2"
                >

                  <span>{item.emoji}</span>

                  <span className="text-sm font-medium text-slate-700">
                    {item.text}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}