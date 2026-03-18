import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-ayurveda.jpg";
import lifestyleImg from "@/assets/treatment-lifestyle.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const About = () => (
  <div className="min-h-screen pt-24">
    {/* Hero */}
    <section className="py-20 px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-heading text-4xl md:text-6xl text-gold-heading mb-4">Our Story</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          A journey rooted in ancient wisdom, dedicated to authentic healing.
        </p>
        <div className="divider-gold w-24 mx-auto mt-8" />
      </motion.div>
    </section>

    {/* Brand Story */}
    <section className="py-16 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-5xl">
        <motion.div {...fadeUp}>
          <img src={aboutImg} alt="Ayurvedic herbs" className="rounded-sm shadow-gold w-full" />
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
          <h2 className="font-heading text-2xl md:text-3xl text-gold-heading mb-6">The VARA Vision</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            VARA Ayurveda was born from a deep reverence for India's most ancient healing science. 
            We believe that true health is not merely the absence of disease, but a harmonious balance 
            of body, mind, and spirit.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Our name, "VARA," signifies the gift of healing — a sacred offering passed down 
            through generations of Ayurvedic practitioners. We honor this lineage by combining 
            traditional therapies with modern understanding.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Every treatment at VARA is personalized, every formulation authentic, and every 
            interaction guided by compassion and expertise.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="The Ayurveda Philosophy" subtitle="The science of life — balancing the five elements within" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <div className="space-y-6">
              {[
                { title: "Vata", desc: "The energy of movement — air and ether. Governs breathing, circulation, and the nervous system." },
                { title: "Pitta", desc: "The energy of transformation — fire and water. Governs digestion, metabolism, and intellect." },
                { title: "Kapha", desc: "The energy of structure — earth and water. Governs strength, immunity, and stability." },
              ].map((dosha, i) => (
                <motion.div
                  key={dosha.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-secondary/30 border border-border p-6 rounded-sm"
                >
                  <h3 className="font-heading text-xl text-gold-heading mb-2">{dosha.title}</h3>
                  <p className="text-muted-foreground text-sm">{dosha.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <img src={lifestyleImg} alt="Ayurvedic consultation" className="rounded-sm shadow-gold w-full" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Our Values" />
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { icon: "✦", title: "Authenticity", desc: "Every treatment and formulation follows classical Ayurvedic texts." },
            { icon: "❋", title: "Compassion", desc: "We treat every individual with care, empathy, and deep respect." },
            { icon: "◈", title: "Balance", desc: "We seek to restore harmony between body, mind, and spirit." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center bg-card border border-border rounded-sm p-8 hover:border-gold/30 transition-colors"
            >
              <span className="text-gold text-2xl">{v.icon}</span>
              <h3 className="font-heading text-lg text-gold-heading mt-4 mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
