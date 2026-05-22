"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto"
      >
        <Card className="border border-white/10">
          <CardHeader className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text"
            >
              Simen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-lg sm:text-xl text-gray-300"
            >
              Founder & CTO — Skogum R&D
            </motion.p>
          </CardHeader>
          <CardContent className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Building autonomous AI agent systems that plan, implement, and ship software end-to-end.
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
