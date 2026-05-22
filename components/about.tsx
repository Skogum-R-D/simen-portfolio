"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold gradient-text mb-12 text-center">About</h2>
        <Card>
          <CardHeader>
            <CardTitle>Simen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed mb-6">
              Simen builds infrastructure for AI agents that collaborate like engineering teams. At Skogum R&D he designed and shipped a multi-agent platform where specialised AI agents (PM, Engineer, Frontend, QA, Infra) coordinate over an event bus to take a plain-language assignment and produce working, QA-validated, deployed software — with no human in the loop.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
