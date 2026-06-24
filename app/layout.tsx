import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FOYA — Express Your Style",
  description: "Kaos lokal dengan desain modern, nyaman dipakai, dan siap menemani aktivitas harianmu.",
  keywords: "kaos lokal, brand lokal, FOYA, kaos premium, fashion Indonesia",
  openGraph: {
    title: "FOYA — Express Your Style",
    description: "Kaos lokal dengan desain modern, nyaman dipakai, dan siap menemani aktivitas harianmu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}