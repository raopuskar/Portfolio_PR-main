import { motion } from "motion/react";
import { Code2, Zap, Brain } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <Code2 className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 tracking-wider">SYSTEM ONLINE</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 tracking-tight">
            FULL-STACK DEVELOPER
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Building the future with code, one neural connection at a time.
          Specializing in modern web technologies, AI integration, and cloud architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-2 text-white">
              <Zap className="w-5 h-5" />
              <span>Initialize Connection</span>
            </div>
          </button>

          <button className="group relative px-8 py-4 border border-purple-500/50 rounded-lg overflow-hidden backdrop-blur-sm hover:border-purple-400 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-2 text-purple-400">
              <Brain className="w-5 h-5" />
              <span>View Neural Map</span>
            </div>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Projects Deployed", value: "50+", color: "cyan" },
            { label: "Lines of Code", value: "500K+", color: "purple" },
            { label: "Technologies", value: "25+", color: "pink" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className={`p-6 bg-gradient-to-br from-${stat.color}-500/5 to-transparent border border-${stat.color}-500/20 rounded-lg backdrop-blur-sm`}
            >
              <div className={`text-${stat.color}-400 mb-2 tracking-wider opacity-80`}>
                {stat.label}
              </div>
              <div className={`text-transparent bg-clip-text bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600`}>
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    </div>
  );
}
