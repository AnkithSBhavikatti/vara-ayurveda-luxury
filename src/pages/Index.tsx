import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import DoctorSection from "@/components/DoctorSection";
import varaLogo from "@/assets/vara-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import panchakarmaImg from "@/assets/treatment-panchakarma.jpg";
import detoxImg from "@/assets/treatment-detox.jpg";
import lifestyleImg from "@/assets/treatment-lifestyle.jpg";
import aboutImg from "@/assets/about-ayurveda.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const treatments = [
  { title: "Panchakarma", desc: "A five-step Ayurvedic detoxification therapy that cleanses the body of accumulated toxins and restores balance.", img: panchakarmaImg },
  { title: "Detox Therapy", desc: "Herbal and dietary cleansing programs designed to rejuvenate your body from within.", img: detoxImg },
  { title: "Lifestyle Healing", desc: "Personalized Ayurvedic lifestyle modifications including diet, yoga, and herbal routines.", img: lifestyleImg },
];

const testimonials = [
  { name: "Priya M.", text: "VARA Ayurveda transformed my health. The Panchakarma therapy was a life-changing experience." },
  { name: "Rajan K.", text: "The consultation was thorough and the treatments were customized perfectly for my needs." },
  { name: "Ananya S.", text: "I've never felt more balanced and energized. The team at VARA truly understands holistic healing." },
  { name: "Deepak R.", text: "Professional, authentic, and deeply healing. Highly recommend their detox programs." },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.img
            src={varaLogo}
            alt="VARA Ayurveda"
            className="h-20 w-20 md:h-28 md:w-28 mx-auto mb-8 logo-themed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-semibold text-gold-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Rooted in Tradition.
            <br />
            <span className="text-gold">Refined for Modern Healing.</span>
          </motion.h1>
          <motion.p
            className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Experience authentic Ayurvedic healing at VARA — where ancient wisdom meets contemporary wellness.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              to="/consultation"
              className="gradient-gold text-primary-foreground px-8 py-3.5 rounded-sm font-semibold uppercase tracking-wider text-sm glow-gold-hover transition-all duration-300"
            >
              Book Consultation
            </Link>
            <Link
              to="/treatments"
              className="border border-gold text-gold px-8 py-3.5 rounded-sm font-semibold uppercase tracking-wider text-sm hover:bg-gold/10 transition-all duration-300"
            >
              Explore Treatments
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading title="About VARA Ayurveda" subtitle="Where ancient healing wisdom is preserved and shared with care" />
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div {...fadeUp}>
              <img src={aboutImg} alt="Ayurvedic ingredients" className="rounded-sm shadow-gold w-full" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
              <p className="text-foreground/80 leading-relaxed mb-6">
                VARA Ayurveda is dedicated to reviving the timeless science of Ayurveda for the modern world. 
                Our approach combines traditional Panchakarma therapies, herbal formulations, and personalized 
                lifestyle guidance to bring lasting wellness.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Founded on the principles of balance, purity, and natural healing, we believe every individual 
                deserves a path to holistic health — one that honors both body and mind.
              </p>
              <Link to="/about" className="text-gold hover:text-gold-heading transition-colors uppercase text-sm tracking-wider font-semibold">
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <DoctorSection />

      {/* Treatments */}
      <section className="py-24 px-4 bg-card">
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

      {/* Consultation */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Book a Consultation" subtitle="Take the first step towards holistic healing" />
          <ConsultationForm />
        </div>
      </section>

      {/* Products Coming Soon */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto text-center">
          <SectionHeading title="Ayurvedic Products" subtitle="Curated herbal formulations crafted with authenticity" />
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-secondary/30 border border-border rounded-sm aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-gold text-lg">✦</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Coming Soon</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gold font-heading text-2xl">Online Store Coming Soon</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading title="What Our Clients Say" />
          <div className="max-w-2xl mx-auto relative">
            <div className="bg-card border border-border rounded-sm p-8 md:p-12 text-center min-h-[200px] flex flex-col justify-center">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-foreground/80 italic text-lg leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-gold font-heading text-lg">— {testimonials[currentTestimonial].name}</p>
              </motion.div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 border border-border rounded-full hover:border-gold text-muted-foreground hover:text-gold transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === currentTestimonial ? "bg-gold" : "bg-border"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 border border-border rounded-full hover:border-gold text-muted-foreground hover:text-gold transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto text-center">
          <SectionHeading title="Follow Us on Instagram" />
          <a
            href="https://www.instagram.com/vara.ayurveda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gold hover:text-gold-heading transition-colors text-lg"
          >
            <Instagram size={24} />
            <span className="font-heading text-xl">@vara.ayurveda</span>
          </a>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-4xl mx-auto">
            {[panchakarmaImg, detoxImg, lifestyleImg, aboutImg].map((img, i) => (
              <a key={i} href="https://www.instagram.com/vara.ayurveda" target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-sm aspect-square">
                <img src={img} alt="Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-center">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-gold-heading mb-6">Begin Your Healing Journey</h2>
          <p className="text-foreground/70 mb-8">Experience the power of authentic Ayurveda. Book your consultation today.</p>
          <Link
            to="/consultation"
            className="inline-block gradient-gold text-primary-foreground px-10 py-4 rounded-sm font-semibold uppercase tracking-wider text-sm glow-gold-hover transition-all duration-300"
          >
            Book Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
