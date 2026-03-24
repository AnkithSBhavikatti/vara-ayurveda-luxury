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
    <div className="rounded-md border-2 border-gold/40 bg-card/50 p-3 shadow-[0_0_30px_-10px_hsl(var(--gold)/0.2)]">
      <iframe
        src={GOOGLE_FORM_EMBED_URL}
        width="100%"
        height="700"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        className="rounded-sm"
        title="Book Consultation"
      >
        Loading…
      </iframe>
    </div>
    </motion.div>
  );
};

export default ConsultationForm;
