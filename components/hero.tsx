"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
          Simen
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          Founder & CTO — Skogum R&D
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Building autonomous AI agent systems that plan, implement, and ship software end-to-end.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Button size="lg" variant="secondary">
          Explore My Work
        </Button>
      </motion.div>
    </motion.section>
  );
}
// Updated in feature/portfolio branch
