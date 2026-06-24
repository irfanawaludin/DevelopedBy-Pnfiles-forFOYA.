"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimoniSection() {
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
                }, i * 100);
              });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const avatarColors = [
    "from-purple-400 to-purple-600",
    "from-pink-400 to-purple-500",
    "from-violet-400 to-indigo-500",
    "from-fuchsia-400 to-purple-600",
    "from-indigo-400 to-purple-500",
  ];

  return (
    <section
      id="testimoni"
      className="py-24 bg-white overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center space-y-4 mb-16 animate-on-scroll">

          <span className="text-purple-700 font-semibold text-sm uppercase tracking-widest">

            Testimoni

          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">

            Kata Mereka Tentang{" "}

            <span className="bg-gradient-to-r from-purple-700 to-fuchsia-500 bg-clip-text text-transparent">

              FOYA

            </span>

          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">

            Ribuan pelanggan sudah membuktikan kualitas FOYA. Giliran kamu!

          </p>

        </div>

        {/* Slider */}

        <div className="overflow-hidden">

          <div className="flex gap-6 animate-marquee w-max">

            {[...testimonials, ...testimonials].map((t, i) => (

              <div
                key={`${t.id}-${i}`}
                className="w-[350px] flex-shrink-0 bg-white rounded-3xl p-6 border border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 relative group"
              >

                {/* Quote */}

                <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">

                  <Quote
                    size={48}
                    className="text-purple-700"
                  />

                </div>

                {/* Rating */}

                <div className="flex gap-1 mb-4">

                  {Array.from({ length: t.rating }).map((_, idx) => (

                    <Star
                      key={idx}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                  ))}

                </div>

                {/* Komentar */}

                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">

                  &ldquo;{t.comment}&rdquo;

                </p>

                {/* Produk */}

                <div className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full mb-4">

                  {t.product}

                </div>

                {/* Profil */}

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">

                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                      avatarColors[i % avatarColors.length]
                    } flex items-center justify-center`}
                  >

                    <span className="text-white font-bold text-sm">

                      {t.name.charAt(0)}

                    </span>

                  </div>

                  <div>

                    <p className="font-semibold text-sm text-slate-900">

                      {t.name}

                    </p>

                    <p className="text-xs text-gray-400">

                      {t.location}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}