import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  { name: "Priya M.", text: "VARA Ayurveda transformed my health. The Panchakarma therapy was a life-changing experience." },
  { name: "Rajan K.", text: "The consultation was thorough and the treatments were customized perfectly for my needs." },
  { name: "Ananya S.", text: "I've never felt more balanced and energized. The team at VARA truly understands holistic healing." },
  { name: "Deepak R.", text: "Professional, authentic, and deeply healing. Highly recommend their detox programs." },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <SectionHeading title="What Our Clients Say" />
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-background border border-border rounded-sm p-8 md:p-12 text-center min-h-[200px] flex flex-col justify-center">
            <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <p className="text-foreground/80 italic text-lg leading-relaxed mb-6">"{testimonials[current].text}"</p>
              <p className="text-gold font-heading text-lg">— {testimonials[current].name}</p>
            </motion.div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="p-2 border border-border rounded-full hover:border-gold text-muted-foreground hover:text-gold transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-gold" : "bg-border"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)} className="p-2 border border-border rounded-full hover:border-gold text-muted-foreground hover:text-gold transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
