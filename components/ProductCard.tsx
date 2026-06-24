"use client";

import { useState } from "react";
import { MessageCircle, Tag } from "lucide-react";
import { Product } from "@/data/products";

const WA_NUMBER = "6282233192856"; // GANTI DENGAN NOMOR ADMIN FOYA

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, string> = {
  Classic: "from-gray-400 to-gray-600",
  Oversized: "from-purple-500 to-purple-700",
  Graphic: "from-pink-500 to-purple-600",
  Minimal: "from-gray-100 to-gray-300",
  Premium: "from-purple-700 to-fuchsia-500",
};

const colors = ["Putih", "Hitam", "Cream"];

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [imgError, setImgError] = useState(false);

  const handleOrder = () => {
    if (!selectedSize) {
      alert("Silakan pilih ukuran.");
      return;
    }

    if (!selectedColor) {
      alert("Silakan pilih warna.");
      return;
    }

    const message = `Apakah ini ready min FOYA?

Produk : ${product.name}

Ukuran : ${selectedSize}

Warna : ${selectedColor}`;

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const gradient =
    categoryColors[product.category] || "from-purple-700 to-fuchsia-500";

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">

      {/* Image */}
      <div className="relative overflow-hidden aspect-square">

        {!imgError ? (

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />

        ) : (

          <div
            className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
          >
            <span className="text-6xl font-black text-white">
              F
            </span>
          </div>

        )}

        {product.badge && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">

            <Tag size={10} />

            {product.badge}

          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-5">

        {/* Product Name */}
        <div className="flex justify-between items-start gap-2">

          <h3 className="text-lg font-bold text-slate-900">

            {product.name}

          </h3>

          <span className="text-lg font-bold text-purple-700">

            {product.priceFormatted}

          </span>

        </div>

        {/* Description */}

        <p className="text-sm text-gray-500">

          {product.description}

        </p>

        {/* Size */}

        <div className="space-y-2">

          <p className="text-xs font-semibold text-gray-400 uppercase">

            Pilih Ukuran

          </p>

          <div className="flex flex-wrap gap-2">

            {product.sizes.map((size) => (

              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 rounded-xl border-2 text-sm font-semibold transition-all ${
                  selectedSize === size
                    ? "bg-purple-700 text-white border-purple-700"
                    : "border-gray-200 hover:border-purple-700"
                }`}
              >

                {size}

              </button>

            ))}

          </div>

        </div>

        {/* Color */}

        <div className="space-y-2">

          <p className="text-xs font-semibold text-gray-400 uppercase">

            Pilih Warna

          </p>

          <div className="flex flex-wrap gap-2">

            {colors.map((color) => (

              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 rounded-xl border-2 text-sm transition-all ${
                  selectedColor === color
                    ? "bg-purple-700 text-white border-purple-700"
                    : "border-gray-200 hover:border-purple-700"
                }`}
              >

                {color}

              </button>

            ))}

          </div>

        </div>

        {/* Button */}

        <button
          onClick={handleOrder}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white font-semibold hover:scale-[1.02] transition-all"
        >

          <MessageCircle size={18} />

          Pesan via WhatsApp

        </button>

      </div>
    </div>
  );
}