import { motion } from "framer-motion";

const CtaSection = () => (
  <section className="py-24 px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="font-heading text-3xl md:text-5xl text-gold-heading mb-6">Begin Your Healing Journey</h2>
      <p className="text-foreground/70 mb-8">Experience the power of authentic Ayurveda. Book your consultation today.</p>
      <a
        href="#consultation"
        className="inline-block gradient-gold text-primary-foreground px-10 py-4 rounded-sm font-semibold uppercase tracking-wider text-sm glow-gold-hover transition-all duration-300"
      >
        Book Consultation
      </a>
    </motion.div>
  </section>
);

export default CtaSection;
