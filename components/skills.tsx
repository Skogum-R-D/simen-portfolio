"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export default function Skills() {
  const skills = [
    "Multi-agent AI systems",
    "Python / asyncio",
    "Next.js / TypeScript",
    "Distributed systems (Valkey, Redis, event-driven)",
    "DevOps (Docker, Podman, Kubernetes, CI/CD)",
    "Mistral AI / LLM tool loops",
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Badge variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
