import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  { 
    title: "Full-Stack Developer Intern", 
    company: "Cognizant", 
    period: "Jan 2026 – May 2026", 
    description: "Developed and enhanced enterprise full-stack applications using Java, Spring Boot, React.js, MySQL, and REST APIs while collaborating in Agile development teams.", 
    achievements: [ 
      "Built responsive frontend interfaces using React.js", 
      "Developed backend services with Spring Boot and REST APIs", 
      "Integrated MySQL databases for business workflows", 
      "Worked in Agile environment to deliver features and resolve bugs" 
    ], 
    color: "cyan" 
  },
  
  { title: "Web Development Intern", 
    company: "Physics Wallah (formerly iNeuron.ai)", 
    period: "Jan 2025 – Apr 2025", 
    description: "Contributed to the development of a full-stack Doctor Appointment Booking System using the MERN stack with secure authentication and scalable backend services.", 
    achievements: [ 
      "Implemented JWT authentication with bcrypt and HTTP-only cookies", 
      "Built RESTful APIs using Node.js and Express.js", 
      "Integrated MongoDB for doctor, patient, and appointment management", 
      "Developed React components for a responsive user experience" 
    ], 
    color: "purple" },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider">
              EXPERIENCE LOG
            </h2>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1" />

                <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-black shadow-[0_0_20px_rgba(6,182,212,0.5)]`} />

                <div className="flex-1 ml-8 md:ml-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 bg-gradient-to-br from-${exp.color}-500/10 to-transparent border border-${exp.color}-500/30 rounded-xl backdrop-blur-sm`}
                  >
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className={`text-${exp.color}-400 mb-1`}>{exp.title}</h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1.5 bg-${exp.color}-500/10 border border-${exp.color}-500/30 rounded-lg`}>
                        <Calendar className={`w-4 h-4 text-${exp.color}-400`} />
                        <span className={`text-${exp.color}-400`}>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + j * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <div className={`w-1.5 h-1.5 bg-${exp.color}-400 rounded-full mt-2 flex-shrink-0`} />
                          <span className="text-gray-500">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
