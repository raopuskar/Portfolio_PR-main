import { motion } from "motion/react";
import { useMemo, useState } from "react";

interface Skill {
  name: string;
  x: number;
  y: number;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Java", x: 20, y: 30, level: 90, category: "backend" },
  { name: "Spring Boot", x: 35, y: 20, level: 85, category: "backend" },
  { name: "React.js", x: 50, y: 35, level: 85, category: "frontend" },
  { name: "JavaScript", x: 65, y: 25, level: 80, category: "frontend" },
  { name: "MySQL", x: 80, y: 40, level: 80, category: "database" },
  { name: "MongoDB", x: 25, y: 60, level: 80, category: "database" },
  { name: "Microservices", x: 45, y: 70, level: 75, category: "backend" },
  { name: "Kafka", x: 70, y: 65, level: 70, category: "backend" },
  { name: "Tailwind CSS", x: 55, y: 50, level: 80, category: "frontend" },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [2, 6], [6, 7], [4, 7],
  [1, 8], [8, 6]
];

const starPoints = Array.from({ length: 40 }, () => ({
  x: 8 + Math.random() * 84,
  y: 8 + Math.random() * 84,
  r: 0.08 + Math.random() * 0.14,
  delay: Math.random() * 3,
}));

export function ConstellationSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const stars = useMemo(() => starPoints, []);

  return (
    <div className="relative w-full min-h-[30rem] md:h-[34rem] bg-gradient-to-br from-purple-950/20 to-indigo-950/20 rounded-xl border border-purple-500/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {stars.map((star, i) => (
          <motion.circle
            key={`star-${i}`}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="rgba(255, 255, 255, 0.28)"
            animate={{
              opacity: [0.18, 0.82, 0.18],
              r: [star.r, star.r * 1.4, star.r],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {connections.map(([from, to], i) => (
          <motion.line
            key={`connection-${i}`}
            x1={skills[from].x}
            y1={skills[from].y}
            x2={skills[to].x}
            y2={skills[to].y}
            stroke="rgba(168, 85, 247, 0.46)"
            strokeWidth="0.14"
            strokeLinecap="round"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.78, 0.2] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: i * 0.08,
              ease: "easeInOut",
            }}
          />
        ))}

        {skills.map((skill, i) => (
          <g key={skill.name}>
            <motion.circle
              cx={skill.x}
              cy={skill.y}
              r={skill.level / 26}
              fill="rgba(168, 85, 247, 0.22)"
              stroke="rgba(168, 85, 247, 0.9)"
              strokeWidth="0.24"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: hoveredSkill === skill.name ? 1.28 : [1, 1.03, 1],
                opacity: hoveredSkill === skill.name ? 1 : 0.85,
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: i * 0.08, ease: 'easeInOut' }}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            />
            <motion.circle
              cx={skill.x}
              cy={skill.y}
              r="0.55"
              fill="rgba(168, 85, 247, 1)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: hoveredSkill === skill.name ? 1.16 : [0.95, 1.04, 0.95],
                opacity: hoveredSkill === skill.name ? 1 : 0.9,
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
              filter="drop-shadow(0 0 4px rgba(168, 85, 247, 0.8))"
            />
          </g>
        ))}
      </svg>

      {skills.map((skill, i) => (
        <motion.div
          key={`label-${skill.name}`}
          className="absolute text-purple-300 pointer-events-none"
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            transform: 'translate(-50%, -150%)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: hoveredSkill === skill.name || hoveredSkill === null ? 1 : 0.3,
            y: 0,
            scale: hoveredSkill === skill.name ? 1.1 : 1
          }}
          transition={{ delay: i * 0.1 }}
        >
          <span className="drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">{skill.name}</span>
        </motion.div>
      ))}

      <div className="absolute top-4 left-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-purple-400 tracking-wider"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="opacity-90">SKILL CONSTELLATION</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
