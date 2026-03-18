import { motion } from "framer-motion";
import { Video, Mail, UserRound } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import videoImg from "@/assets/consultation-video.jpg";
import emailImg from "@/assets/consultation-email.jpg";
import personalImg from "@/assets/consultation-personal.jpg";

const consultationTypes = [
  {
    title: "Video Consultation",
    desc: "Book an online video consultation with our Ayurvedic doctors from the comfort of your home. You can also WhatsApp us for quick scheduling.",
    image: videoImg,
    icon: Video,
  },
  {
    title: "E-Mail Consultation",
    desc: "Share your health concerns via email and receive a detailed Ayurvedic assessment and personalized treatment recommendations.",
    image: emailImg,
    icon: Mail,
  },
  {
    title: "Personal Consultation",
    desc: "Visit our clinic for a comprehensive in-person consultation with pulse diagnosis, body constitution analysis, and a tailored healing plan.",
    image: personalImg,
    icon: UserRound,
  },
];

const Consultation = () => (
  <div className="min-h-screen pt-24">
    {/* Header */}
    <section className="py-20 px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-heading text-4xl md:text-6xl text-gold-heading mb-4">Consultation</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          VARA Ayurveda offers classical Ayurvedic treatments and authentic therapies to patients seeking holistic healing and lasting wellness.
        </p>
        <div className="divider-gold w-24 mx-auto mt-8" />
      </motion.div>
    </section>

    {/* Consultation Types */}
    <section className="pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          {consultationTypes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-gold" />
                    <h3 className="font-heading text-2xl text-gold-heading">{item.title}</h3>
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{item.desc}</p>
                  {/* Gold bottom bar */}
                  <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Form + Steps */}
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
