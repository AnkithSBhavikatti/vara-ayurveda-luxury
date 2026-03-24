import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const ProductsSection = () => (
  <section id="products" className="py-24 px-4 bg-card">
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
);

export default ProductsSection;
