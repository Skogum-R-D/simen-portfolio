"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
          Simen
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Founder & CTO — Skogum R&D
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Building autonomous AI agent systems that plan, implement, and ship software end-to-end.
        </p>
        <Button variant="secondary" size="lg">
          Explore My Work
        </Button>
      </motion.div>
    </motion.section>
  );
}
