import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import KatalogSection from "@/components/KatalogSection";
import CustomSection from "@/components/CustomSection";
import TentangSection from "@/components/TentangSection";
import KeunggulanSection from "@/components/KeunggulanSection";
import TestimoniSection from "@/components/TestimoniSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />

      <HeroSection />

      <KatalogSection />

      <CustomSection />

      <TentangSection />

      <KeunggulanSection />

      <TestimoniSection />

      <CTASection />

      <Footer />

    </main>
  );
}