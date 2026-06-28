import { motion } from "motion/react";
import { Home, User, Briefcase, Mail, Code } from "lucide-react";

const navItems = [
  { icon: Home, label: "Profile", id: "profile" },
  { icon: User, label: "About", id: "about" },
  { icon: Code, label: "Skills", id: "skills" },
  { icon: Briefcase, label: "Experience", id: "experience" },
  { icon: Mail, label: "Contact", id: "contact" }
];

export function FloatingNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 px-6 py-4 bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.3)]">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative p-3 rounded-full hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 transition-all"
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 border border-cyan-500/30 rounded-lg whitespace-nowrap pointer-events-none"
            >
              <span className="text-cyan-400">{item.label}</span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black border-r border-b border-cyan-500/30" />
            </motion.div>

            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all" />
          </motion.button>
        ))}
      </div>

      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-xl -z-10" />
    </motion.nav>
  );
}
