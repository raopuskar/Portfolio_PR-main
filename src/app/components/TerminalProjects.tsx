import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUpRight, ChevronRight, Folder, GitBranch, Star } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  status: "active" | "complete" | "archived" | "featured";
  stars?: string;
}


const projects: Project[] = [
  {
    name: "BuildLedger",
    description:
      "A microservices-based construction contract and vendor management platform with vendor management, contract lifecycle, invoice processing, and role-based authentication.",
    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "Eureka",
      "OpenFeign",
      "REST API"
    ],
    github: "https://github.com/raopuskar/buildledger",
    status: "featured"
  },
  {
    name: "HostNet",
    description:
      "A full-stack doctor appointment booking application with JWT authentication, doctor search, appointment scheduling, and responsive dashboards.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT"
    ],
    github: "https://github.com/raopuskar/Host-Net",
    status: "complete"
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, technical skills, internships, GitHub repositories, and contact information with a modern responsive UI.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS"
    ],
    github: "https://github.com/raopuskar/Landing-Page",
    status: "active"
  }
];


export function TerminalProjects() {
  const [currentCommand, setCurrentCommand] = useState("");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const commands = ["ls -la projects/", "cat README.md", "git status", "npm run dev"];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentCommand(commands[index]);
      index = (index + 1) % commands.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-black/80 rounded-xl border border-green-500/30 overflow-hidden backdrop-blur-sm">
      <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 px-4 py-2 border-b border-green-500/30 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-green-400 ml-4 tracking-wider opacity-80">terminal@portfolio:~</span>
      </div>

      <div className="p-6 font-mono space-y-4">
        <div className="flex items-center gap-2 text-green-400">
          <ChevronRight className="w-4 h-4" />
          <span className="opacity-80">$ {currentCommand}</span>
          {cursorVisible && <span className="inline-block w-2 h-4 bg-green-400 animate-pulse" />}
        </div>

        <div className="space-y-3 mt-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  selectedProject === index
                    ? "border-green-400 bg-green-500/10"
                    : "border-green-500/20 bg-green-500/5 hover:border-green-400/50 hover:bg-green-500/10"
                }`}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <Folder className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-green-300 group-hover:text-green-200">
                          {project.name}
                        </h3>
                        {project.stars && (
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-3 h-3 fill-current" />
                            <span className="opacity-80">{project.stars}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <GitBranch className="w-3 h-3 text-cyan-400" />
                          <span
                            className={`px-2 py-0.5 rounded text-xs ${
                              project.status === "active"
                                ? "bg-green-500/20 text-green-300"
                                : project.status === "complete"
                                ? "bg-blue-500/20 text-blue-300"
                                : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-green-400/60 mt-2">{project.description}</p>
                      {selectedProject === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 flex flex-wrap items-center gap-2"
                        >
                          {project.tech.map(tech => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-300"
                            >
                              {tech}
                            </span>
                          ))}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="inline-flex items-center gap-2 rounded-md border border-green-400/40 bg-green-500/10 px-3 py-2 text-sm font-medium text-green-200 transition hover:border-green-300 hover:bg-green-500/20 hover:text-white"
                          >
                            <span>View on GitHub</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: selectedProject === index ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-green-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 pt-4 border-t border-green-500/20"
        >
          <div className="flex items-center gap-2 text-green-400/60">
            <ChevronRight className="w-4 h-4" />
            <span className="opacity-80">Total projects: {projects.length} | Active: {projects.filter(p => p.status === "active").length}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
