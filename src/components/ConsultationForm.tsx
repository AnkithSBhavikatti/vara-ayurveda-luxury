import { motion } from "framer-motion";

const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfLeIne42OZKdfzlhI12x63p3hUfjqMjKjL4bf1OQGA-PJHdA/viewform?embedded=true";

const ConsultationForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto"
    >
      <iframe
        src={GOOGLE_FORM_EMBED_URL}
        width="100%"
        height="700"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        className="rounded-sm border border-border"
        title="Book Consultation"
      >
        Loading…
      </iframe>
    </motion.div>
  );
};

export default ConsultationForm;
