"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <p>
              Simen builds infrastructure for AI agents that collaborate like engineering teams. At Skogum R&D, he designed and shipped a multi-agent platform where specialized AI agents (PM, Engineer, Frontend, QA, Infra) coordinate over an event bus to take a plain-language assignment and produce working, QA-validated, deployed software — with no human in the loop.
            </p>
            <p>
              His focus is on multi-agent AI systems, distributed architectures, and full-stack engineering. Based in Norway, Simen combines deep technical expertise with a passion for building autonomous systems that push the boundaries of what AI can achieve.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
