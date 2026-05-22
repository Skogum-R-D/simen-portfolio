"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-[0.2em] uppercase text-cyan-400/70 mb-3 text-center"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black gradient-text mb-12 text-center"
        >
          Who I Am
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "What I Build",
              body: "Infrastructure for AI agents that collaborate like an engineering team. At Skogum R&D I designed and shipped a multi-agent platform where specialised AI agents — PM, Engineer, Frontend, QA, Infra — coordinate over an event bus to take a plain-language assignment and produce working, QA-validated software with no human in the loop.",
              delay: 0.15,
            },
            {
              title: "How I Work",
              body: "I care about systems that are observable, recoverable, and actually ship. Every component has a clear contract: tasks timeout, retries are capped, builds are verified before merging. I bias heavily toward automation and closing feedback loops as tight as possible.",
              delay: 0.25,
            },
          ].map(({ title, body, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay }}
              className="glassmorphism rounded-2xl p-6 hover:border-cyan-400/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
