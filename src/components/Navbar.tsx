import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import varaLogo from "@/assets/vara-logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const links = [
  { to: "/", label: "Home", topics: ["Featured Treatments", "About VARA", "Book Consultation", "Testimonials", "Ayurvedic Products", "Instagram"] },
  { to: "/about", label: "About", topics: ["Our Story", "Brand Philosophy", "Why VARA", "Our Values"] },
  { to: "/treatments", label: "Treatments", topics: ["Panchakarma Therapy", "Detox & Purification", "Lifestyle Healing", "Abhyanga Massage", "Shirodhara", "Herbal Consultation"] },
  { to: "/consultation", label: "Consultation", topics: ["Video Consultation", "E-Mail Consultation", "Personal Consultation", "Booking Form"] },
  { to: "/products", label: "Products", topics: ["Herbal Formulations", "Ayurvedic Oils", "Online Store — Coming Soon"] },
  { to: "/branches", label: "Branches", topics: ["Housing Board Branch", "Vijaynagar Branch", "Locations & Directions"] },
  { to: "/contact", label: "Contact", topics: ["Email Us", "Talk to Us", "Visit Us", "WhatsApp", "Send a Message"] },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-gold"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <motion.img src={varaLogo} alt="VARA Ayurveda" className="h-16 w-16 object-contain logo-themed" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <div className="hidden sm:block">
            <span className="font-heading text-xl font-semibold text-gold-heading tracking-wider">VARA</span>
            <span className="block text-xs text-gold tracking-[0.3em] -mt-1">AYURVEDA</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <HoverCard key={link.to} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Link
                  to={link.to}
                  className={`relative text-sm tracking-wider uppercase transition-colors duration-300 hover:text-gold-heading group ${
                    location.pathname === link.to ? "text-gold-heading" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 glow-gold ${
                      location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-56 bg-card border-border p-4" side="bottom" align="center">
                <p className="font-heading text-gold-heading text-sm mb-2">{link.label}</p>
                <ul className="space-y-1">
                  {link.topics.map((topic) => (
                    <li key={topic} className="text-muted-foreground text-xs flex items-center gap-2">
                      <span className="text-gold text-[8px]">✦</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
          ))}
          <ThemeToggle />
          <Link
            to="/consultation"
            className="ml-2 px-5 py-2 text-sm uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 glow-gold-hover rounded-sm"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-gold">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm tracking-wider uppercase transition-colors ${
                    location.pathname === link.to ? "text-gold-heading" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/consultation"
                onClick={() => setOpen(false)}
                className="mt-2 px-6 py-2 text-sm uppercase tracking-wider border border-gold text-gold rounded-sm"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
