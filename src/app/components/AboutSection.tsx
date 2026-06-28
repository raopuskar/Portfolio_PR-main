import { motion } from "motion/react";
import { Code2, Database, Cloud, Server, Boxes } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Expert",
    description: "React.js, JavaScript, HTML, CSS, Tailwind CSS",
    color: "cyan"
  },
  {
    icon: Server,
    title: "Backend Master",
    description: "Java, Spring Boot, Node.js, Express.js",
    color: "purple"
  },
  {
    icon: Boxes,
    title: "Microservices",
    description: "Eureka, API Gateway, OpenFeign, Kafka",
    color: "pink"
  },
  {
    icon: Database,
    title: "Database",
    description: "MySQL, MongoDB",
    color: "green"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
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
              ABOUT ME
            </h2>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
              <h3 className="text-cyan-400 mb-4">My Journey</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Final-year Computer Science student and Java Full Stack Developer with hands-on experience building scalable web applications using Java, Spring Boot, React.js, MySQL, and MongoDB. Recently completed a Software Engineer Internship at Cognizant and developed full-stack projects using Microservices, API Gateway, Eureka, OpenFeign, and Kafka.       </p>
              <p className="text-gray-400 leading-relaxed">
                Passionate about software engineering, problem-solving, and building real-world applications.   </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl backdrop-blur-sm">
              <h3 className="text-purple-400 mb-4">What I Do</h3>
              <ul className="space-y-3">
                {[
                  "Build full-stack web applications using Java, Spring Boot, React.js, and MySQL",
                  "Design REST APIs and Microservices-based architectures",
                  "Solve DSA problems and strengthen system design fundamentals",
                  "Develop scalable backend services and database solutions",
                  "Continuously learn modern software engineering practices"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 bg-gradient-to-br from-${item.color}-500/10 to-transparent border border-${item.color}-500/30 rounded-xl backdrop-blur-sm group cursor-pointer`}
              >
                <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                </div>
                <h4 className={`text-${item.color}-400 mb-2`}>{item.title}</h4>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
