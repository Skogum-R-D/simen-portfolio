"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

export default function FeaturedProject() {
  const techStack = [
    "Python 3.12",
    "asyncio",
    "Valkey",
    "Mistral AI",
    "Next.js 16.2",
    "Docker",
    "GitHub API",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold gradient-text mb-12 text-center">
          Featured Project
        </h2>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Skogum R&D Multi-Agent Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                An autonomous software engineering platform built on Python asyncio, Valkey pub/sub, and Mistral AI. Six specialised agents collaborate over an event bus: the PM plans and dispatches, engineers implement and self-correct via build loops, QA validates with both static analysis and live builds. Assignments go from plain English to merged, tested code with no human intervention.
              </p>

              <div className="pt-4">
                <h4 className="text-lg font-semibold gradient-text mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
