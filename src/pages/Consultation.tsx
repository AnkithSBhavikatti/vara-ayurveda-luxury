import { motion } from "framer-motion";
import ConsultationForm from "@/components/ConsultationForm";

const Consultation = () => (
  <div className="min-h-screen pt-24">
    <section className="py-20 px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-heading text-4xl md:text-6xl text-gold-heading mb-4">Book a Consultation</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          Take the first step towards holistic wellness. Our Ayurvedic experts will guide you on your healing journey.
        </p>
        <div className="divider-gold w-24 mx-auto mt-8" />
      </motion.div>
    </section>

    <section className="pb-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-heading text-2xl text-gold-heading mb-6">What to Expect</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Share Your Concerns", desc: "Fill out the form with your health details and goals." },
                { step: "02", title: "Expert Assessment", desc: "Our Ayurvedic doctor will review your case and reach out." },
                { step: "03", title: "Personalized Plan", desc: "Receive a customized treatment and lifestyle plan." },
                { step: "04", title: "Begin Healing", desc: "Start your Ayurvedic journey with professional guidance." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="text-gold font-heading text-2xl font-bold mt-0.5">{item.step}</span>
                  <div>
                    <h3 className="text-gold-heading font-heading text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Consultation;
