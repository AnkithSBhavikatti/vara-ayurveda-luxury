import { motion } from "framer-motion";
import { Video, Mail, UserRound } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import videoImg from "@/assets/consultation-video.jpg";
import emailImg from "@/assets/consultation-email.jpg";
import personalImg from "@/assets/consultation-personal.jpg";

const consultationTypes = [
  {
    title: "Video Consultation",
    desc: "Book an online video consultation with our Ayurvedic doctors from the comfort of your home.",
    image: videoImg,
    icon: Video,
  },
  {
    title: "E-Mail Consultation",
    desc: "Share your health concerns via email and receive a detailed Ayurvedic assessment.",
    image: emailImg,
    icon: Mail,
  },
  {
    title: "Personal Consultation",
    desc: "Visit our clinic for a comprehensive in-person consultation with pulse diagnosis.",
    image: personalImg,
    icon: UserRound,
  },
];

const ConsultationSection = () => (
  <section id="consultation" className="py-24 px-4">
    <div className="container mx-auto">
      <SectionHeading title="Book a Consultation" subtitle="Take the first step towards holistic healing" />
      
      {/* Consultation Types */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {consultationTypes.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 * i }}
            className="group relative rounded-sm overflow-hidden border border-border hover:border-gold/50 transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-5 h-5 text-gold" />
                  <h3 className="font-heading text-xl text-gold-heading">{item.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Form */}
      <ConsultationForm />
    </div>
  </section>
);

export default ConsultationSection;
