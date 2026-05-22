"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const TAGLINES = [
  "Building autonomous AI agent systems.",
  "Shipping software end-to-end, no humans.",
  "Multi-agent platforms that actually work.",
];

function TypingText() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TAGLINES[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 45);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
    } else {
      setDeleting(false);
      setLineIndex((i) => (i + 1) % TAGLINES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, lineIndex]);

  return (
    <span className="text-cyan-300/80">
      {displayed}
      <span className="cursor-blink ml-0.5 inline-block w-0.5 h-5 bg-cyan-400 align-middle" />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Aurora background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-blob-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="aurora-blob-2 absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-500/25 blur-[100px]" />
        <div className="aurora-blob-3 absolute bottom-1/4 left-1/2 w-72 h-72 rounded-full bg-emerald-500/15 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium tracking-[0.25em] uppercase text-cyan-400/70 mb-4"
          >
            Founder & CTO — Skogum R&D
          </motion.p>

          <h1 className="text-7xl md:text-9xl font-black gradient-text mb-6 tracking-tight">
            Simen
          </h1>

          <div className="h-8 mb-8 text-lg md:text-xl font-mono">
            <TypingText />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white border-0 px-8 shadow-lg shadow-cyan-500/20"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                See My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:border-cyan-400/50 hover:bg-cyan-400/5"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
