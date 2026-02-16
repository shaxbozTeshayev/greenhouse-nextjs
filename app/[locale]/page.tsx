import { CTASection } from "@/components/sections/CtaSection";
import { FAQSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { MapSection } from "@/components/sections/MapSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ProductsSection />
      <TestimonialsSection />
      <FAQSection />
      <MapSection />
      <CTASection />
      <Footer />
    </main>
  );
}
