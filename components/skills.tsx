"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="skills"
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Badge variant="default" className="text-sm px-4 py-1">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
