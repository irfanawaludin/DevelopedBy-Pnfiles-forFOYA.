"use client";

import {
  Palette,
  Users,
  Shirt,
  MessageCircle,
  Clock,
  Upload,
} from "lucide-react";

const WA_NUMBER = "6282233192856";

export default function CustomSection() {
  const handleOrder = () => {
    const message = encodeURIComponent(
      `Halo FOYA, saya ingin membuat custom kaos.

Nama :
Jumlah :
Jenis Kaos :
Ukuran :
Desain : (sudah ada/belum ada)

Bisa minta informasi lebih lanjut?`
    );

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${message}`,
      "_blank"
    );
  };

  const services = [
    {
      icon: Shirt,
      title: "Kaos Custom",
      desc: "Buat desain kaos sesuai keinginanmu.",
    },
    {
      icon: Users,
      title: "Kaos Komunitas",
      desc: "Cocok untuk organisasi, kelas, dan komunitas.",
    },
    {
      icon: Palette,
      title: "Desain Bebas",
      desc: "Kirim logo atau desain sendiri.",
    },
    {
      icon: Upload,
      title: "Upload Desain",
      desc: "Bisa kirim file PNG, JPG, AI, atau PDF.",
    },
    {
      icon: Clock,
      title: "Pengerjaan Cepat",
      desc: "Estimasi 3-7 hari kerja.",
    },
    {
      icon: Users,
      title: "Tanpa Ribet",
      desc: "Konsultasi langsung via WhatsApp.",
    },
  ];

  return (
    <section
      id="custom"
      className="py-24 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <span className="text-purple-700 font-semibold uppercase tracking-widest text-sm">

            Custom Kaos

          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">

            Buat Kaos Sesuai

            <span className="bg-gradient-to-r from-purple-700 to-fuchsia-500 bg-clip-text text-transparent">

              {" "}Keinginanmu

            </span>

          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4">

            FOYA melayani pembuatan kaos custom untuk komunitas,
            organisasi, event, perusahaan, UMKM, dan kebutuhan pribadi.

          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {services.map((item, index) => {
            const Icon = item.icon;

            return (

              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >

                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">

                  <Icon
                    size={30}
                    className="text-purple-700"
                  />

                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">

                  {item.title}

                </h3>

                <p className="text-gray-500">

                  {item.desc}

                </p>

              </div>

            );
          })}

        </div>

        {/* Info Box */}

        <div className="grid md:grid-cols-3 gap-6 mb-14">

          <div className="bg-white p-6 rounded-3xl shadow-sm text-center">

            <h3 className="text-3xl font-bold text-purple-700">

              1 pcs

            </h3>

            <p className="text-gray-500">

              Minimal Order

            </p>

          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm text-center">

            <h3 className="text-3xl font-bold text-purple-700">

              3-7 Hari

            </h3>

            <p className="text-gray-500">

              Estimasi Pengerjaan

            </p>

          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm text-center">

            <h3 className="text-3xl font-bold text-purple-700">

              100%

            </h3>

            <p className="text-gray-500">

              Desain Bebas

            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="bg-gradient-to-r from-purple-700 to-fuchsia-500 rounded-3xl p-10 text-center text-white">

          <h3 className="text-3xl font-bold mb-4">

            Punya Desain Sendiri?

          </h3>

          <p className="max-w-2xl mx-auto mb-8 text-white/90">

            Kirim desain, logo, atau ide yang kamu punya dan FOYA akan membantu mewujudkannya menjadi kaos berkualitas premium.

          </p>

          <button
            onClick={handleOrder}
            className="bg-white text-purple-700 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition-transform"
          >

            <MessageCircle size={20} />

            Pesan Custom Sekarang

          </button>

        </div>

      </div>
    </section>
  );
}