import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import varaLogo from "@/assets/vara-logo.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={varaLogo} alt="VARA Ayurveda" className="h-16 w-16 mb-4 logo-themed" />
          <p className="font-heading text-lg text-gold-heading">VARA Ayurveda</p>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Rooted in Tradition.<br />Refined for Modern Healing.
          </p>
        </div>
        <div>
          <h4 className="text-gold-heading font-heading text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Treatments", "Consultation"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-gold-heading font-heading text-lg mb-4">Treatments</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Panchakarma</span>
            <span>Detox Therapy</span>
            <span>Lifestyle Healing</span>
            <span>Herbal Consultation</span>
          </div>
        </div>
        <div>
          <h4 className="text-gold-heading font-heading text-lg mb-4">Connect</h4>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/varaayu__/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <Instagram size={18} /> @varaayu__
            </a>
            <a
              href="https://www.youtube.com/@varaayurveda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <Youtube size={18} /> @varaayurveda
            </a>
          </div>
        </div>
      </div>
      <div className="divider-gold mt-12 mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VARA Ayurveda. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
