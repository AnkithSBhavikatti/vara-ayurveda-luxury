import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import varaLogo from "@/assets/vara-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/consultation", label: "Consultation" },
  { to: "/products", label: "Products" },
  { to: "/branches", label: "Branches" },
  { to: "/contact", label: "Contact" },
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
          <img src={varaLogo} alt="VARA Ayurveda" className="h-12 w-12 object-contain" />
          <div className="hidden sm:block">
            <span className="font-heading text-xl font-semibold text-gold-heading tracking-wider">VARA</span>
            <span className="block text-xs text-gold tracking-[0.3em] -mt-1">AYURVEDA</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
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
          ))}
          <Link
            to="/consultation"
            className="ml-4 px-5 py-2 text-sm uppercase tracking-wider border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 glow-gold-hover rounded-sm"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-gold">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
