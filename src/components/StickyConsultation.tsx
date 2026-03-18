import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StickyConsultation = () => (
  <motion.div
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ delay: 2, type: "spring", stiffness: 100 }}
    className="fixed bottom-6 right-6 z-50"
  >
    <Link
      to="/consultation"
      className="gradient-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider shadow-gold-lg glow-gold-hover transition-all duration-300 block"
    >
      Book Consultation
    </Link>
  </motion.div>
);

export default StickyConsultation;
