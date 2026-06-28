import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Node {
  x: number;
  y: number;
  layer: number;
}

export function NeuralNetwork() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [activeConnections, setActiveConnections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const layers = [4, 6, 6, 4];
    const newNodes: Node[] = [];
    const width = 100;
    const height = 100;

    layers.forEach((count, layerIndex) => {
      const layerX = (layerIndex / (layers.length - 1)) * width;
      for (let i = 0; i < count; i++) {
        const layerY = ((i + 1) / (count + 1)) * height;
        newNodes.push({ x: layerX, y: layerY, layer: layerIndex });
      }
    });

    setNodes(newNodes);

    const interval = setInterval(() => {
      const randomConnections = new Set<string>();
      for (let i = 0; i < 8; i++) {
        const from = Math.floor(Math.random() * newNodes.length);
        const to = Math.floor(Math.random() * newNodes.length);
        if (newNodes[from].layer < newNodes[to].layer) {
          randomConnections.add(`${from}-${to}`);
        }
      }
      setActiveConnections(randomConnections);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-950/20 to-purple-950/20 rounded-xl border border-cyan-500/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((from, i) =>
          nodes
            .filter(to => to.layer === from.layer + 1)
            .map((to, j) => {
              const key = `${i}-${nodes.indexOf(to)}`;
              const isActive = activeConnections.has(key);
              return (
                <motion.line
                  key={key}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={isActive ? "rgba(6, 182, 212, 0.6)" : "rgba(6, 182, 212, 0.1)"}
                  strokeWidth="0.1"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    stroke: isActive ? "rgba(6, 182, 212, 0.6)" : "rgba(6, 182, 212, 0.1)"
                  }}
                  transition={{ duration: 0.5 }}
                />
              );
            })
        )}

        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="0.8"
            fill="rgba(6, 182, 212, 0.8)"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              filter: [
                "drop-shadow(0 0 2px rgba(6, 182, 212, 0.8))",
                "drop-shadow(0 0 4px rgba(6, 182, 212, 1))",
                "drop-shadow(0 0 2px rgba(6, 182, 212, 0.8))"
              ]
            }}
            transition={{
              delay: i * 0.05,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        ))}
      </svg>

      <div className="absolute top-4 left-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 tracking-wider"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="opacity-90">NEURAL INTERFACE</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
