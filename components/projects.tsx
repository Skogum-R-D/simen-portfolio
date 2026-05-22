"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold gradient-text mb-12 text-center">
          Featured Project
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Skogum R&D Multi-Agent Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed mb-6">
              An autonomous software engineering platform built on Python asyncio, Valkey pub/sub, and Mistral AI. Six specialised agents collaborate over an event bus: the PM plans and dispatches, engineers implement and self-correct via build loops, QA validates with both static analysis and live builds. Assignments go from plain English to merged, tested code with no human intervention.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Tech:</strong> Python 3.12, asyncio, Valkey, Mistral AI (devstral), Next.js 16.2, Docker, GitHub API
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
