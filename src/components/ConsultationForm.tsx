import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ConsultationForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", concern: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly.");
    setForm({ name: "", phone: "", email: "", concern: "" });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-5"
    >
      {[
        { name: "name" as const, placeholder: "Your Name", type: "text" },
        { name: "phone" as const, placeholder: "Phone Number", type: "tel" },
        { name: "email" as const, placeholder: "Email Address", type: "email" },
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
        placeholder="Describe your health concern..."
        rows={4}
        value={form.concern}
        onChange={(e) => setForm({ ...form, concern: e.target.value })}
        className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
      />
      <button
        type="submit"
        className="w-full gradient-gold text-primary-foreground py-3 rounded-sm font-semibold uppercase tracking-wider text-sm hover:opacity-90 transition-opacity glow-gold-hover"
      >
        Book Consultation
      </button>
    </motion.form>
  );
};

export default ConsultationForm;
