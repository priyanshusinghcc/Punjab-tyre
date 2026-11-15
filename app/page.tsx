import { HomeBanners } from "@/components/home/home-banners";
import { CategoryGrid } from "@/components/home/category-grid";
import { CompareSection, GuaranteeSection, HomeIntro, HowItWorksSteps, OutletSection } from "@/components/home/home-sections";
import { ServicesSection } from "@/components/services-section";
import { BrandSection } from "@/components/brand-section";
import { AlloyWheelsSection } from "@/components/alloy-wheels-section";
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
      <HomeBanners />
      <CategoryGrid />
      <HomeIntro />
      <HowItWorksSteps />
      <GuaranteeSection />
      <CompareSection />
      <AlloyWheelsSection />
      <ServicesSection />
      <TestimonialsSection />
      <BrandSection />
      <OutletSection />
      <StoreGallery />
      <FAQSection />
      <CallbackSection />
      <SeoSection />
      <PopularLinks />
    </>
  );
}
