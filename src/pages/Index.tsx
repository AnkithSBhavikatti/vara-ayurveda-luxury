import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Instagram, MapPin, Clock, Phone, Navigation, ChevronRight as ChevRight, Star, Shield, Users, X, Video, Mail, UserRound, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import varaLogo from "@/assets/vara-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import panchakarmaImg from "@/assets/treatment-panchakarma.jpg";
import detoxImg from "@/assets/treatment-detox.jpg";
import lifestyleImg from "@/assets/treatment-lifestyle.jpg";
import aboutImg from "@/assets/about-ayurveda.jpg";
import videoImg from "@/assets/consultation-video.jpg";
import emailImg from "@/assets/consultation-email.jpg";
import personalImg from "@/assets/consultation-personal.jpg";
import branchExterior from "@/assets/branch-housing-board.jpg";
import branchInterior from "@/assets/branch-interior-1.jpg";
import branchHerbs from "@/assets/branch-herbs.jpg";
import branchTherapy from "@/assets/branch-therapy.jpg";
import branchReception from "@/assets/branch-reception.jpg";
import branchVijaynagar from "@/assets/branch-vijaynagar.jpg";
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
