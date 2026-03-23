import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, ChevronRight, Star, Shield, Users, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import branchExterior from "@/assets/branch-housing-board.jpg";
import branchInterior from "@/assets/branch-interior-1.jpg";
import branchHerbs from "@/assets/branch-herbs.jpg";
import branchTherapy from "@/assets/branch-therapy.jpg";
import branchReception from "@/assets/branch-reception.jpg";
import branchVijaynagar from "@/assets/branch-vijaynagar.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const branches = [
  {
    name: "Housing Board Branch",
    tagline: "Where It All Began",
    address: "12, 8th Main Rd, NHCS Layout, Govindaraja Nagar Ward, MC Road, Vijayanagar, Bengaluru, Karnataka 560040",
    phone: "+91 93640 81212",
    hours: "Mon–Sat: 9:00 AM – 8:00 PM",
    status: "active" as const,
    img: branchExterior,
    mapUrl: "https://maps.app.goo.gl/PbHDTHPqhVqeXwVF8",
    mapEmbed: "https://maps.google.com/maps?q=Vara+Ayurveda+12+8th+Main+Rd+NHCS+Layout+Vijayanagar+Bengaluru&t=&z=17&ie=UTF8&iwloc=&output=embed",
    features: ["Panchakarma Suite", "Consultation Rooms", "Herbal Pharmacy", "Therapy Rooms"],
  },
  {
    name: "Vijaynagar Branch",
    tagline: "Expanding Wellness Horizons",
    address: "Vijaynagar, Bengaluru",
    phone: "Coming Soon",
    hours: "Opening Soon",
    status: "coming-soon" as const,
    img: branchVijaynagar,
    mapUrl: "#",
    mapEmbed: "",
    features: ["Modern Facilities", "Extended Services", "Premium Experience", "Easy Access"],
  },
];

const stats = [
  { icon: Users, value: "5000+", label: "Patients Healed" },
  { icon: Star, value: "4.9", label: "Patient Rating" },
  { icon: Shield, value: "100%", label: "Authentic Ayurveda" },
];

const galleryImages = [
  { src: branchExterior, alt: "VARA Clinic Exterior" },
  { src: branchReception, alt: "Reception Area" },
  { src: branchInterior, alt: "Treatment Room" },
  { src: branchTherapy, alt: "Panchakarma Therapy" },
  { src: branchHerbs, alt: "Herbal Preparations" },
  { src: branchVijaynagar, alt: "Vijaynagar Branch" },
];

const Branches = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [mapOpen, setMapOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            className="text-gold uppercase tracking-[0.4em] text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Presence
          </motion.p>
          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-gold-heading mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Two Roots.{" "}
            <span className="text-gold">One Vision.</span>
          </motion.h1>
          <motion.p
            className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Healing shouldn't have boundaries. We're growing so authentic Ayurveda
            is always within your reach.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="font-heading text-3xl text-gold-heading">{s.value}</p>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="py-12 px-4 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Trusted Legacy", desc: "Built on decades of Ayurvedic expertise and patient trust." },
              { title: "Always Accessible", desc: "Multiple locations so holistic care is never far away." },
              { title: "Growing With Purpose", desc: "Expanding to serve more communities with authentic healing." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <h3 className="font-heading text-xl text-gold-heading mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Branches"
            subtitle="Experience premium Ayurvedic care at a location near you"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {branches.map((branch, i) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`group bg-card border rounded-sm overflow-hidden transition-all duration-500 ${
                  branch.status === "active"
                    ? "border-gold/30 hover:border-gold shadow-gold"
                    : "border-border opacity-90"
                }`}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={branch.img}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {branch.status === "coming-soon" && (
                    <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                      <span className="font-heading text-2xl text-gold tracking-wider">Coming Soon</span>
                    </div>
                  )}
                  {branch.status === "active" && (
                    <div className="absolute top-4 left-4 bg-gold/90 text-primary-foreground px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider">
                      Now Open
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-2xl text-gold-heading mb-1">{branch.name}</h3>
                  <p className="text-gold text-sm italic mb-4">{branch.tagline}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-foreground/70">{branch.address}</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-foreground/70">{branch.phone}</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-foreground/70">{branch.hours}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {branch.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ChevronRight className="w-3 h-3 text-gold" />
                        {f}
                      </div>
                    ))}
                  </div>

                  {branch.status === "active" ? (
                    <div className="flex gap-3">
                      <Link
                        to="/consultation"
                        className="flex-1 text-center gradient-gold text-primary-foreground px-4 py-2.5 rounded-sm text-sm font-semibold uppercase tracking-wider glow-gold-hover transition-all duration-300"
                      >
                        Book Now
                      </Link>
                      <button
                        onClick={() => setMapOpen(branch.name)}
                        className="flex items-center gap-2 border border-gold text-gold px-4 py-2.5 rounded-sm text-sm uppercase tracking-wider hover:bg-gold/10 transition-all duration-300"
                      >
                        <Navigation className="w-4 h-4" />
                        Map
                      </button>
                    </div>
                  ) : (
                    <div className="text-center py-2 border border-border rounded-sm text-muted-foreground text-sm">
                      Opening Announced Soon
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 px-4 bg-card">
        <div className="container mx-auto">
          <SectionHeading
            title="Inside VARA Ayurveda"
            subtitle="A glimpse into our premium healing spaces"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {galleryImages.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setLightboxImg(img.src)}
                className="group overflow-hidden rounded-sm aspect-[4/3] cursor-pointer relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-end p-3">
                  <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold tracking-wider">
                    {img.alt}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Find Us"
            subtitle="Tap on a branch to get directions"
          />
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {branches.map((branch) => (
              <motion.div
                key={branch.name}
                {...fadeUp}
                className="rounded-sm overflow-hidden border border-border hover:border-gold/30 transition-colors duration-300"
              >
                {branch.status === "active" ? (
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative h-64 bg-card">
                      <iframe
                        src={branch.mapEmbed}
                        className="w-full h-full border-0 pointer-events-none"
                        loading="lazy"
                        title={`Map - ${branch.name}`}
                      />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center group hover:bg-background/20 transition-colors duration-300 cursor-pointer">
                        <div className="text-center">
                          <MapPin className="w-10 h-10 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <p className="font-heading text-lg text-gold-heading">{branch.name}</p>
                          <p className="text-foreground/70 text-sm mt-1">Click to open in Google Maps</p>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="relative h-64 bg-card flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                      <p className="font-heading text-lg text-gold-heading">{branch.name}</p>
                      <p className="text-muted-foreground text-sm mt-1">Location reveal coming soon</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-card text-center">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl text-gold-heading mb-4">
            Healing, Closer to You
          </h2>
          <p className="text-foreground/70 mb-8">
            Visit our Housing Board branch today or stay tuned for Vijaynagar.
          </p>
          <Link
            to="/consultation"
            className="inline-block gradient-gold text-primary-foreground px-10 py-4 rounded-sm font-semibold uppercase tracking-wider text-sm glow-gold-hover transition-all duration-300"
          >
            Book Your Consultation
          </Link>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-6 right-6 text-gold hover:text-gold-heading transition-colors"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImg}
              alt="Gallery"
              className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-gold"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map Modal */}
      <AnimatePresence>
        {mapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setMapOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-3xl bg-card border border-border rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-heading text-lg text-gold-heading">{mapOpen}</h3>
                <button onClick={() => setMapOpen(null)} className="text-muted-foreground hover:text-gold">
                  <X size={20} />
                </button>
              </div>
              <div className="h-[400px]">
                <iframe
                  src={branches.find(b => b.name === mapOpen)?.mapEmbed || ""}
                  className="w-full h-full border-0"
                  loading="lazy"
                  title={`Map - ${mapOpen}`}
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-center">
                <a
                  href="https://www.google.com/maps?q=Housing+Board"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-heading text-sm uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Branches;
