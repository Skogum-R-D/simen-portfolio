"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">Simen</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Founder & CTO — Skogum R&D
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Building autonomous AI agent systems that plan, implement, and ship software end-to-end.
        </p>
        <Button size="lg">Get in Touch</Button>
      </motion.div>
    </section>
  );
}
