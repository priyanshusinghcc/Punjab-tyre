import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesSection } from "@/components/services-section";
import { FitmentSection } from "@/components/fitment-section";
import { BrandSection } from "@/components/brand-section";
import { AlloyWheelsSection } from "@/components/alloy-wheels-section";
import { AccessoriesSection } from "@/components/accessories-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { SeoSection } from "@/components/seo-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <HeroSection />
      <TrustStrip />
      <HowItWorks />
      <ServicesSection />
      <FitmentSection />
      <BrandSection />
      <AlloyWheelsSection />
      <AccessoriesSection />
      <TestimonialsSection />
      <FAQSection />
      <SeoSection />
    </main>
  );
}
