"use client";

import { useEffect, useRef } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function KatalogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="koleksi" className="py-24 bg-bg-main" ref={sectionRef}>
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-on-scroll">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Koleksi Terbaru
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-dark">
            Temukan Kaos{" "}
            <span className="text-gradient">Favoritmu</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Setiap desain dibuat dengan penuh perhatian untuk memastikan kamu tampil terbaik setiap hari.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={product.id} className="animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}