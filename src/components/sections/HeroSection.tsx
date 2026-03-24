import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import varaLogo from "@/assets/vara-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <motion.img
        src={varaLogo}
        alt="VARA Ayurveda"
        className="h-28 w-28 md:h-36 md:w-36 mx-auto mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="font-heading text-4xl md:text-5xl lg:text-7xl font-semibold text-gold-heading mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Rooted in Tradition.
        <br />
        <span className="text-gold">Refined for Modern Healing.</span>
      </motion.h1>
      <motion.p
        className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Experience authentic Ayurvedic healing at VARA — where ancient wisdom meets contemporary wellness.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href="#consultation"
          className="gradient-gold text-primary-foreground px-8 py-3.5 rounded-sm font-semibold uppercase tracking-wider text-sm glow-gold-hover transition-all duration-300"
        >
          Book Consultation
        </a>
        <a
          href="#treatments"
          className="border border-gold text-gold px-8 py-3.5 rounded-sm font-semibold uppercase tracking-wider text-sm hover:bg-gold/10 transition-all duration-300"
        >
          Explore Treatments
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
