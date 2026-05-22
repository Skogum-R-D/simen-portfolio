"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text text-center mb-12">
          Featured Project
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Skogum R&D Multi-Agent Platform</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <p>
              An autonomous software engineering platform built on Python asyncio, Valkey pub/sub, and Mistral AI. Six specialised agents collaborate over an event bus: the PM plans and dispatches, engineers implement and self-correct via build loops, QA validates with both static analysis and live builds. Assignments go from plain English to merged, tested code with no human intervention.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-white mb-2">Tech Stack:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Python 3.12, asyncio</li>
                <li>Valkey, Mistral AI (devstral)</li>
                <li>Next.js 16.2, Docker, GitHub API</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
