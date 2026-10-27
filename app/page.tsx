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
import { PopularLinks } from "@/components/popular-links";
import { CallbackSection } from "@/components/callback-section";
import { StoreGallery } from "@/components/store-gallery";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";
import { faqs } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <HeroSection />
      <TrustStrip />
      <HowItWorks />
      <ServicesSection />
      <BrandSection />
      <FitmentSection />
      <StoreGallery />
      <AlloyWheelsSection />
      <AccessoriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CallbackSection />
      <SeoSection />
      <PopularLinks />
    </>
  );
}
