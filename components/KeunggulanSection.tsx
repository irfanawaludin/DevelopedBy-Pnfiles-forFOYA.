"use client";

import { useEffect, useRef } from "react";
import { Gem, Wind, Sparkles, Scissors, Heart, MapPin } from "lucide-react";

const features = [
  { icon: Gem, title: "Bahan Premium", desc: "Cotton combed 30s pilihan, adem dan tidak mudah kusut." },
  { icon: Wind, title: "Nyaman Dipakai", desc: "Potongan sempurna untuk berbagai aktivitas harianmu." },
  { icon: Sparkles, title: "Desain Eksklusif", desc: "Setiap desain original, tidak akan kamu temukan di tempat lain." },
  { icon: Scissors, title: "Jahitan Rapi", desc: "Proses produksi teliti, setiap detail dijaga kualitasnya." },
  { icon: Heart, title: "Produksi Lokal", desc: "Mendukung pengrajin lokal Indonesia yang berpengalaman." },
  { icon: MapPin, title: "Pengiriman ke Seluruh Indonesia", desc: "Kirim ke mana saja di Indonesia, cepat dan aman." },
];

export default function KeunggulanSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".animate-on-scroll").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-bg-main" ref={ref}>
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center space-y-4 mb-16 animate-on-scroll">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Keunggulan Kami
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-dark">
            Kenapa Pilih <span className="text-gradient">FOYA?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Lebih dari sekadar kaos, ini tentang kualitas, gaya, dan kebanggaan lokal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="animate-on-scroll group bg-white rounded-3xl p-7 border border-gray-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-50 group-hover:bg-foya-gradient flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon
                    size={24}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg text-text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}