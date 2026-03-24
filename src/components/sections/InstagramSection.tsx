import { Instagram } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import panchakarmaImg from "@/assets/treatment-panchakarma.jpg";
import detoxImg from "@/assets/treatment-detox.jpg";
import lifestyleImg from "@/assets/treatment-lifestyle.jpg";
import aboutImg from "@/assets/about-ayurveda.jpg";

const InstagramSection = () => (
  <section className="py-24 px-4 bg-card">
    <div className="container mx-auto text-center">
      <SectionHeading title="Follow Us on Instagram" />
      <a href="https://www.instagram.com/varaayu__/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-gold hover:text-gold-heading transition-colors text-lg">
        <Instagram size={24} />
        <span className="font-heading text-xl">@varaayu__</span>
      </a>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 max-w-4xl mx-auto">
        {[panchakarmaImg, detoxImg, lifestyleImg, aboutImg].map((img, i) => (
          <a key={i} href="https://www.instagram.com/varaayu__/" target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-sm aspect-square">
            <img src={img} alt="Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default InstagramSection;
