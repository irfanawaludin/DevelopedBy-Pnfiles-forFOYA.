export interface Product {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
  description: string;
  sizes: string[];
  image: string;
  badge?: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "I know you want this",
    price: 129000,
    priceFormatted: "Rp 85.000",
    description: "Kaos classic dengan logo FOYA embossed. Bahan cotton combed 24s, adem dan nyaman dipakai.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/products/kaos1.png",
    badge: "Best Seller",
    category: "Classic",
  },
  {
    id: 2,
    name: "No worries, just Foya",
    price: 159000,
    priceFormatted: "Rp 85.000",
    description: "Oversized fit dengan warna sablon purple. Cocok untuk tampilan casual yang tetap stylish.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/products/kaos2.png",
    badge: "New Arrival",
    category: "Oversized",
  },
  {
    id: 3,
    name: "Foya custom design",
    price: 149000,
    priceFormatted: "Rp 85.000",
    description: "Kaos dengan desain custom yang bisa kamu pilih sendiri. Bahan cotton combed 24s, nyaman dan cocok untuk berbagai aktivitas.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/products/graphic-drop.jpg",
    badge: "Custom Design",
    category: "Graphic",
  },
];