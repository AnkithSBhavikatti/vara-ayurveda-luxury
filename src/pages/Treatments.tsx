import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import panchakarmaImg from "@/assets/treatment-panchakarma.jpg";
import detoxImg from "@/assets/treatment-detox.jpg";
import lifestyleImg from "@/assets/treatment-lifestyle.jpg";

const allTreatments = [
  {
    title: "Panchakarma Therapy",
    desc: "The most powerful Ayurvedic detoxification and rejuvenation program. This five-step cleansing therapy removes deep-rooted toxins, restores digestive fire, and renews vitality. Includes Vamana, Virechana, Basti, Nasya, and Raktamokshana.",
    img: panchakarmaImg,
  },
  {
    title: "Detox & Purification",
    desc: "A comprehensive cleansing program combining herbal formulations, dietary modifications, and therapeutic procedures to eliminate toxins, improve metabolism, and restore natural balance to your body systems.",
    img: detoxImg,
  },
  {
    title: "Lifestyle Healing",
    desc: "Personalized Ayurvedic lifestyle consultations that address diet, daily routines, yoga practices, meditation, and herbal supplementation tailored to your unique constitution (Prakriti) and current imbalances.",
    img: lifestyleImg,
  },
  {
    title: "Abhyanga Massage",
    desc: "Traditional warm oil massage therapy using medicated herbal oils. This deeply relaxing treatment improves circulation, nourishes tissues, promotes sound sleep, and enhances overall well-being.",
    img: panchakarmaImg,
  },
  {
    title: "Shirodhara",
    desc: "A profoundly calming therapy where a steady stream of warm medicated oil is poured on the forehead. Excellent for stress relief, mental clarity, insomnia, and neurological conditions.",
    img: detoxImg,
  },
  {
    title: "Herbal Consultation",
    desc: "One-on-one consultation with our Ayurvedic practitioners to assess your dosha constitution, identify imbalances, and create a personalized healing plan with herbal remedies and dietary guidance.",
    img: lifestyleImg,
  },
];

const Treatments = () => (
  <div className="min-h-screen pt-24">
    <section className="py-20 px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-heading text-4xl md:text-6xl text-gold-heading mb-4">Our Treatments</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          Authentic Ayurvedic therapies for complete mind-body restoration.
        </p>
        <div className="divider-gold w-24 mx-auto mt-8" />
      </motion.div>
    </section>

    <section className="pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTreatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500"
            >
              <div className="overflow-hidden h-52">
                <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-gold-heading mb-3">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{t.desc}</p>
                <Link
                  to="/consultation"
                  className="inline-block border border-gold text-gold px-5 py-2 rounded-sm text-xs uppercase tracking-wider hover:bg-gold/10 transition-all duration-300"
                >
                  Book This Treatment
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Treatments;
