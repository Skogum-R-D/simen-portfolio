"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
          Simen
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Founder & CTO — Skogum R&D
        </p>
        <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto">
          Building autonomous AI agent systems that plan, implement, and ship software end-to-end.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative z-10 mt-16 w-full max-w-2xl"
      >
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              Simen builds infrastructure for AI agents that collaborate like engineering teams. At Skogum R&D he designed and shipped a multi-agent platform where specialised AI agents (PM, Engineer, Frontend, QA, Infra) coordinate over an event bus to take a plain-language assignment and produce working, QA-validated, deployed software — with no human in the loop.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}