import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TreatmentsSection from "@/components/sections/TreatmentsSection";
import ConsultationSection from "@/components/sections/ConsultationSection";
import ProductsSection from "@/components/sections/ProductsSection";
import BranchesSection from "@/components/sections/BranchesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import InstagramSection from "@/components/sections/InstagramSection";
import CtaSection from "@/components/sections/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <ConsultationSection />
      <ProductsSection />
      <BranchesSection />
      <TestimonialsSection />
      <ContactSection />
      <InstagramSection />
      <CtaSection />
    </div>
  );
};

export default Index;
