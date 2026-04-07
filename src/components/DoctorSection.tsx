import { motion } from "framer-motion";
import { Award, BookOpen, MapPin } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.png";

const DoctorSection = () => (
  <section className="py-24 px-4 bg-card">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-gold-heading mb-3">
          Meet the Doctor
        </h2>
        <div className="divider-gold w-24 mx-auto mt-6" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-80 md:w-80 md:h-96 rounded-sm overflow-hidden border-2 border-gold/20 shadow-gold">
              <img
                src={doctorImg}
                alt="Dr. Bhavana Prakash"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-gold/30 rounded-sm px-4 py-2 shadow-lg">
              <span className="text-gold font-heading text-sm">5+ Years Experience</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="font-heading text-2xl md:text-3xl text-gold-heading mb-1">
            Dr. Bhavana Prakash
          </h3>
          <p className="text-gold text-sm uppercase tracking-wider mb-1">Ayurveda Physician</p>
          <p className="text-gold/80 text-sm uppercase tracking-wider mb-6">
            Founder & CEO — Vara Ayurveda
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <div>
                <h4 className="text-foreground font-semibold text-sm mb-1">Qualifications</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>BAMS — Bapuji Ayurveda Medical College (2014)</li>
                  <li>CCP — Certificate Course in Panchakarma (SDMCAH, Hassan)</li>
                  <li>Marma Therapy — Thirumoolar Varmology Institute, Coimbatore</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <div>
                <h4 className="text-foreground font-semibold text-sm mb-1">Expertise</h4>
                <p className="text-muted-foreground text-sm">
                  Panchakarma Therapy, Marma Therapy, Holistic Ayurvedic Healing
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <div>
                <h4 className="text-foreground font-semibold text-sm mb-1">Practice</h4>
                <p className="text-muted-foreground text-sm">
                  Panchakarma & Marma Therapy Centre, Vijayanagara, Bengaluru-40
                </p>
              </div>
            </div>
          </div>

          <p className="text-foreground/80 text-sm leading-relaxed italic border-l-2 border-gold/30 pl-4">
            "True healing begins when we honour the body's innate wisdom. Ayurveda doesn't just treat symptoms — it restores the harmony between body, mind, and spirit."
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DoctorSection;
