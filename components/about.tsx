"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-300 leading-relaxed mb-4"
            >
              Simen builds infrastructure for AI agents that collaborate like engineering teams. At Skogum R&D he designed and shipped a multi-agent platform where specialised AI agents (PM, Engineer, Frontend, QA, Infra) coordinate over an event bus to take a plain-language assignment and produce working, QA-validated, deployed software — with no human in the loop.
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
