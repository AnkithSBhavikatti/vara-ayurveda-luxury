import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const whatsappUrl = `https://wa.me/919364081212?text=${encodeURIComponent("Hello VARA Ayurveda, I'd like to know more about your treatments.")}`;

const StickyConsultation = () => (
  <motion.div
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ delay: 2, type: "spring", stiffness: 100 }}
    className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
  >
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
    <Link
      to="/consultation"
      className="gradient-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider shadow-gold-lg glow-gold-hover transition-all duration-300 block"
    >
      Book Consultation
    </Link>
  </motion.div>
);

export default StickyConsultation;
