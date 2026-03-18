import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent("Hello VARA Ayurveda, I'd like to know more about your treatments.")}`;

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-heading text-4xl md:text-6xl text-gold-heading mb-4">Contact Us</h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Reach out for consultations, queries, or feedback.
          </p>
          <div className="divider-gold w-24 mx-auto mt-8" />
        </motion.div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl text-gold-heading mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Mail className="text-gold mt-1" size={20} />
                    <div>
                      <p className="text-gold-heading font-heading">Email</p>
                      <p className="text-muted-foreground text-sm">contact@varaayurveda.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold mt-1" size={20} />
                    <div>
                      <p className="text-gold-heading font-heading">Visit Us</p>
                      <p className="text-muted-foreground text-sm">VARA Ayurveda Clinic</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-secondary/50 border border-border rounded-sm px-5 py-3 hover:border-gold/30 transition-colors group"
                >
                  <MessageCircle size={20} className="text-gold" />
                  <span className="text-foreground/80 group-hover:text-gold-heading transition-colors">Chat on WhatsApp</span>
                </a>
                <a
                  href="https://www.instagram.com/varaayu__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-secondary/50 border border-border rounded-sm px-5 py-3 hover:border-gold/30 transition-colors group"
                >
                  <Instagram size={20} className="text-gold" />
                  <span className="text-foreground/80 group-hover:text-gold-heading transition-colors">Follow on Instagram</span>
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {[
                { name: "name" as const, placeholder: "Your Name", type: "text" },
                { name: "email" as const, placeholder: "Email Address", type: "email" },
                { name: "phone" as const, placeholder: "Phone Number", type: "tel" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                />
              ))}
              <textarea
                required
                placeholder="Your message..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full gradient-gold text-primary-foreground py-3 rounded-sm font-semibold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity glow-gold-hover"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
