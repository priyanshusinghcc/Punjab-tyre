import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesSection } from "@/components/services-section";
import { BrandSection } from "@/components/brand-section";
import { FitmentSection } from "@/components/fitment-section";
import { AlloyWheelsSection } from "@/components/alloy-wheels-section";
import { AccessoriesSection } from "@/components/accessories-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { SeoSection } from "@/components/seo-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <HowItWorks />
      <ServicesSection />
      <BrandSection />
      <FitmentSection />
      <AlloyWheelsSection />
      <AccessoriesSection />
      <TestimonialsSection />
      <FAQSection />
      <SeoSection />
    </>
  );
}
