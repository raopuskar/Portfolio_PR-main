import { motion } from "motion/react";
import { MapPin, Mail, Linkedin, Github, Globe } from "lucide-react";
import profileImage from "./asset/profileImg.jpeg";

export function ProfileSection() {
  

  return (
    <section id="profile" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse" />

              <div className="relative w-72 h-72 rounded-full border-4 border-cyan-500/50 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-[0_0_50px_rgba(6,182,212,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                <img
                  src={profileImage}
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <motion.div
                  className="absolute inset-0 border-4 border-transparent rounded-full"
                  style={{
                    borderImage: "linear-gradient(45deg, #06b6d4, #a855f7, #ec4899) 1",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-black/80 border border-green-500/50 rounded-lg backdrop-blur-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400">ONLINE</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
              >
                <span className="text-cyan-400 tracking-wider">PROFILE INITIALIZED</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              >
                Puskar Rao
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-purple-400 tracking-wide"
              >
                Java Full Stack Developer | DSA Enthusiast | Open Source Contributor
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Kolkata, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>raopushkar4@gmail.com</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 leading-relaxed border-l-2 border-cyan-500/30 pl-4"
            >
              Final-year Computer Science student and Java Full Stack Developer with experience building scalable web applications using Java, Spring Boot, React.js, MySQL, and MongoDB. Recently completed a Software Engineer Internship at Cognizant and passionate about creating efficient, real-world software solutions.
    </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/raopuskar" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/puskar-rao/" },
                { icon: Globe, label: "Website", href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400/50 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                  <span className="text-gray-400 group-hover:text-gray-300">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
