"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
          Simen
        </h1>
        <p className="text-2xl text-muted-foreground mb-4">
          Founder & CTO — Skogum R&D
        </p>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Building autonomous AI agent systems that plan, implement, and ship software end-to-end.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;