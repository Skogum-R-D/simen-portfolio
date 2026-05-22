"use client";

import { motion } from "framer-motion";

const skills = [
  "Multi-agent AI systems",
  "Python / asyncio",
  "Next.js / TypeScript",
  "Distributed systems (Valkey, Redis, event-driven)",
  "DevOps (Docker, Podman, Kubernetes, CI/CD)",
  "Mistral AI / LLM tool loops",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">Skills</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Technical expertise and focus areas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-lg p-6 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="text-lg font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;