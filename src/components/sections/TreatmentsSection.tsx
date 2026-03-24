import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import panchakarmaImg from "@/assets/treatment-panchakarma.jpg";
import detoxImg from "@/assets/treatment-detox.jpg";
import lifestyleImg from "@/assets/treatment-lifestyle.jpg";

const treatments = [
  { title: "Panchakarma", desc: "A five-step Ayurvedic detoxification therapy that cleanses the body of accumulated toxins and restores balance.", img: panchakarmaImg },
  { title: "Detox Therapy", desc: "Herbal and dietary cleansing programs designed to rejuvenate your body from within.", img: detoxImg },
  { title: "Lifestyle Healing", desc: "Personalized Ayurvedic lifestyle modifications including diet, yoga, and herbal routines.", img: lifestyleImg },
];

const TreatmentsSection = () => (
  <section id="treatments" className="py-24 px-4 bg-card">
    <div className="container mx-auto">
      <SectionHeading title="Our Treatments" subtitle="Authentic therapies designed to restore your natural balance" />
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {treatments.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group bg-secondary/30 rounded-sm overflow-hidden border border-border hover:border-gold/30 transition-all duration-500"
          >
            <div className="overflow-hidden h-56">
              <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl text-gold-heading mb-3">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.desc}</p>
              <Link to="/treatments" className="text-gold text-sm uppercase tracking-wider hover:text-gold-heading transition-colors">
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TreatmentsSection;
