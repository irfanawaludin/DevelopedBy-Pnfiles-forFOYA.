"use client";

import { MessageCircle, ArrowRight } from "lucide-react";

const WA_NUMBER = "6282233192856";

export default function CTASection() {
  const handleOrder = () => {
    window.open(
      `https://wa.me/${WA_NUMBER}?text=Halo FOYA! Saya ingin memesan kaos. Bisa bantu saya memilih produk yang tepat?`,
      "_blank"
    );
  };

  return (
    <section className="py-24 bg-bg-main">
      <div className="max-w-4xl mx-auto section-padding text-center">
        <div className="relative bg-foya-gradient rounded-[2.5rem] p-12 md:p-16 overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
                Sudah Menemukan
                <br />
                Kaos Favoritmu?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto">
                Jangan tunda lagi! Pesan sekarang dan dapatkan kaos berkualitas premium
                langsung di tanganmu.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleOrder}
                className="bg-white text-primary font-bold px-8 py-4 rounded-2xl flex items-center gap-3 text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95"
              >
                <MessageCircle size={22} />
                Pesan Sekarang via WhatsApp
                <ArrowRight size={18} />
              </button>
            </div>

            <p className="text-white/60 text-sm">
              Respon cepat · Pengiriman seluruh Indonesia · Garansi kualitas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}