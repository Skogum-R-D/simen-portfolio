"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { GitBranch, Cpu, Layers } from "lucide-react";

const STACK = ["Python 3.12", "asyncio", "Valkey", "Mistral AI", "Next.js 16.2", "Docker", "GitHub API"];

const HIGHLIGHTS = [
  { icon: Cpu, text: "6 specialised agents coordinate over an async event bus" },
  { icon: GitBranch, text: "Agents push code to GitHub, run builds, open PRs automatically" },
  { icon: Layers, text: "Plain-language assignment → merged, QA-validated code, no humans" },
];

export default function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-[0.2em] uppercase text-cyan-400/70 mb-3 text-center"
        >
          Featured Project
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black gradient-text mb-12 text-center"
        >
          Skogum R&D Platform
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="glassmorphism rounded-2xl p-8 border border-violet-400/15 hover:border-violet-400/25 transition-colors"
        >
          <p className="text-gray-300 leading-relaxed mb-8">
            An autonomous software engineering platform built on Python asyncio, Valkey pub/sub, and Mistral AI.
            The PM plans and dispatches, engineers implement and self-correct via build loops, QA validates with
            both static analysis and live builds — assignments go from plain English to merged, tested code with
            no human intervention.
          </p>

          <div className="space-y-3 mb-8">
            {HIGHLIGHTS.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3"
              >
                <Icon className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{text}</span>
              </motion.div>
            ))}
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.45 + i * 0.04 }}
                >
                  <Badge variant="secondary">{tech}</Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
