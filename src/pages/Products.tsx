import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const Products = () => (
  <div className="min-h-screen pt-24">
    <section className="py-20 px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-heading text-4xl md:text-6xl text-gold-heading mb-4">Ayurvedic Products</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          Curated herbal formulations, handcrafted with authenticity.
        </p>
        <div className="divider-gold w-24 mx-auto mt-8" />
      </motion.div>
    </section>

    <section className="pb-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-sm aspect-[3/4] flex flex-col items-center justify-center p-6 hover:border-gold/20 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <span className="text-gold text-xl">✦</span>
              </div>
              <span className="text-muted-foreground text-sm text-center">Coming Soon</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center bg-card border border-border rounded-sm p-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-gold-heading mb-4">Online Store Coming Soon</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're preparing our collection of authentic Ayurvedic products. 
            Follow us on Instagram to be the first to know when we launch.
          </p>
          <a
            href="https://www.instagram.com/vara.ayurveda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 border border-gold text-gold px-6 py-2.5 rounded-sm text-sm uppercase tracking-wider hover:bg-gold/10 transition-all"
          >
            Follow @varaayu__
          </a>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Products;
