"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Skogum R&D Multi-Agent Platform",
    description: (
      <>
        <p className="mb-4">
          An autonomous software engineering platform built on Python asyncio, Valkey pub/sub, and Mistral AI. Six specialised agents collaborate over an event bus: the PM plans and dispatches, engineers implement and self-correct via build loops, QA validates with both static analysis and live builds.
        </p>
        <p className="text-sm text-muted-foreground">
          Tech: Python 3.12, asyncio, Valkey, Mistral AI (devstral), Next.js 16.2, Docker, GitHub API
        </p>
      </>
    ),
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">Featured Project</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Autonomous AI agent systems
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {project.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;