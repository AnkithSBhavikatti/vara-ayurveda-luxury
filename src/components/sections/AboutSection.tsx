import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-ayurveda.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const AboutSection = () => (
  <section id="about" className="py-24 px-4">
    <div className="container mx-auto">
      <SectionHeading title="About VARA Ayurveda" subtitle="Where ancient healing wisdom is preserved and shared with care" />
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <img src={aboutImg} alt="Ayurvedic ingredients" className="rounded-sm shadow-gold w-full" />
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
          <p className="text-foreground/80 leading-relaxed mb-6">
            VARA Ayurveda is dedicated to reviving the timeless science of Ayurveda for the modern world.
            Our approach combines traditional Panchakarma therapies, herbal formulations, and personalized
            lifestyle guidance to bring lasting wellness.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Founded on the principles of balance, purity, and natural healing, we believe every individual
            deserves a path to holistic health — one that honors both body and mind.
          </p>
          <Link to="/about" className="text-gold hover:text-gold-heading transition-colors uppercase text-sm tracking-wider font-semibold">
            Learn More →
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
