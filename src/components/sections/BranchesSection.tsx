import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, ChevronRight, Star, Shield, Users, X } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import branchExterior from "@/assets/branch-housing-board.jpg";
import branchVijaynagar from "@/assets/branch-vijaynagar.jpg";

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

const BranchesSection = () => {
  const [mapOpen, setMapOpen] = useState<string | null>(null);

  return (
    <section id="branches" className="py-24 px-4">
      <div className="container mx-auto">
        {/* Stats */}
        <SectionHeading title="Our Branches" subtitle="Healing shouldn't have boundaries — we're growing so authentic Ayurveda is always within reach" />
        <motion.div
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="font-heading text-3xl text-gold-heading">{s.value}</p>
              <p className="text-muted-foreground text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Branch Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
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
                <img src={branch.img} alt={branch.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
                    <a
                      href="#consultation"
                      className="flex-1 text-center gradient-gold text-primary-foreground px-4 py-2.5 rounded-sm text-sm font-semibold uppercase tracking-wider glow-gold-hover transition-all duration-300"
                    >
                      Book Now
                    </a>
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

        {/* View Full Branches Page */}
        <div className="text-center">
          <Link to="/branches" className="text-gold hover:text-gold-heading transition-colors uppercase text-sm tracking-wider font-semibold">
            View Full Branch Details & Gallery →
          </Link>
        </div>
      </div>

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
                  href={branches.find(b => b.name === mapOpen)?.mapUrl || "#"}
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
    </section>
  );
};

export default BranchesSection;
