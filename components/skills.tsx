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
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold gradient-text text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Badge variant="secondary" className="text-sm px-4 py-1">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
