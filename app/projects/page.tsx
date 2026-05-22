"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function FeaturedProject() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold gradient-text mb-8">Featured Project</h2>
        <Card>
          <CardHeader>
            <CardTitle>Skogum R&D Multi-Agent Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-6">
              An autonomous software engineering platform built on Python asyncio, Valkey pub/sub, and Mistral AI. Six specialised agents collaborate over an event bus: the PM plans and dispatches, engineers implement and self-correct via build loops, QA validates with both static analysis and live builds. Assignments go from plain English to merged, tested code with no human intervention.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Python 3.12</Badge>
              <Badge variant="default">asyncio</Badge>
              <Badge variant="default">Valkey</Badge>
              <Badge variant="default">Mistral AI</Badge>
              <Badge variant="default">Next.js 16.2</Badge>
              <Badge variant="default">Docker</Badge>
              <Badge variant="default">GitHub API</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}