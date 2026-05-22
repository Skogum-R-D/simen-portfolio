"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Projects() {
  return (
    <motion.section
      id="projects"
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
          Featured Project
        </motion.h2>
        <Card>
          <CardHeader>
            <CardTitle>Skogum R&D Multi-Agent Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-300 leading-relaxed mb-4"
            >
              An autonomous software engineering platform built on Python asyncio, Valkey pub/sub, and Mistral AI. Six specialised agents collaborate over an event bus: the PM plans and dispatches, engineers implement and self-correct via build loops, QA validates with both static analysis and live builds. Assignments go from plain English to merged, tested code with no human intervention.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-400 text-sm"
            >
              <strong>Tech:</strong> Python 3.12, asyncio, Valkey, Mistral AI (devstral), Next.js 16.2, Docker, GitHub API
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
