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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold gradient-text mb-8 text-center"
        >
          Skills
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ 
            hidden: {}, 
            show: { transition: { staggerChildren: 0.1 } } 
          }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{ 
                hidden: { opacity: 0, y: 10 }, 
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } } 
              }}
            >
              <Badge variant="secondary">{skill}</Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
