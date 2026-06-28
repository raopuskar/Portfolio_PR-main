import { motion } from "motion/react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact from Portfolio: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:raopuskar4@gmail.com?subject=${subject}&body=${body}`;

    setSuccessMessage(
      "Opening your email client so you can send the message directly. If it does not open, copy the email address below."
    );
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-green-500/50" />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 tracking-wider">
              INITIATE CONTACT
            </h2>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-green-500/50" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-xl blur-xl" />

          <form
            onSubmit={handleSubmit}
            className="relative p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-xl backdrop-blur-sm space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-green-400">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded-lg text-gray-300 placeholder-gray-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-green-400">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded-lg text-gray-300 placeholder-gray-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-green-400">
                <MessageSquare className="w-4 h-4" />
                <span>Message</span>
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-black/40 border border-green-500/30 rounded-lg text-gray-300 placeholder-gray-600 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white flex items-center justify-center gap-2 hover:from-green-400 hover:to-emerald-500 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>

            {successMessage && (
              <div className="rounded-lg border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-100">
                {successMessage}
              </div>
            )}
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center text-gray-500"
          >
            <p>Or reach out directly at <span className="text-green-400">raopuskar4@gmail.com</span></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
