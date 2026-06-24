export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  product: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rizky Aditya",
    location: "Jakarta",
    rating: 5,
    comment: "Kualitasnya beneran premium! Bahannya adem banget, ga bikin gerah meski seharian dipakai. Desainnya juga clean dan stylish. Udah order 3x dan ga pernah kecewa.",
    avatar: "/avatars/avatar-1.jpg",
    product: "FOYA I know you want this",
  },
  {
    id: 2,
    name: "Tania Putri",
    location: "Bandung",
    rating: 5,
    comment: "Oversized purple-nya BAGUS BANGET! Warnanya persis kayak di foto, ga kecewa sama sekali. Jahitannya juga rapi. Langsung jadi favorit di lemari.",
    avatar: "/avatars/avatar-2.jpg",
    product: "FOYA custom oversize",
  },
  {
    id: 3,
    name: "Fajar Nugraha",
    location: "Surabaya",
    rating: 5,
    comment: "Pesan via WA gampang banget, responsnya cepet. Barang dateng dalam 2 hari, packaging juga keren. Kaosnya sesuai ekspektasi, recommended banget!",
    avatar: "/avatars/avatar-3.jpg",
    product: "No worries, just Foya",
  },
  {
    id: 4,
    name: "Aulia Rahma",
    location: "Yogyakarta",
    rating: 4,
    comment: "FOYA tuh beneran ngerti selera anak muda. Desainnya ga norak, modern banget. Udah kasih tau semua temen buat order sini, harus cobain deh hasil desain sama kualitas bajunya.",
    avatar: "/avatars/avatar-4.jpg",
    product: "FOYA Minimal White",
  },
  {
    id: 5,
    name: "Dimas Pratama",
    location: "Semarang",
    rating: 5,
    comment: "Brand lokal tapi kualitasnya ga kalah sama brand luar. Bahan premiumnya kerasa banget, apalagi setelah dicuci ga melar dan warnanya tetap cerah.",
    avatar: "/avatars/avatar-5.jpg",
    product: "FOYA Gradient Tee",
  },
   {
    id: 6,
    name: "Irfan Awaludin",
    location: "Banjarnegara",
    rating: 5,
    comment: "Produk lokal tapi kualitasnya ga kaleng-kaleng sih ini. Bahan enak banget dipakai, desainya juga ga pasaran pokoknya josjis banget ga nyesel beli di sini",
    avatar: "/avatars/avatar-6.jpg",
    product: "FOYA I know you want this",
  },
];