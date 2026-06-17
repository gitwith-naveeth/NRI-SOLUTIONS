import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceCategories } from "@/components/home/ServiceCategories";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <WhyChooseUs />
      <ServiceCategories />
      <HowItWorks />
      <TestimonialsPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
