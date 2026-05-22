"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <Card className="border border-white/10">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              Simen
            </CardTitle>
            <p className="text-lg text-gray-400">
              Founder & CTO — Skogum R&D
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-xl text-gray-300 mb-6">
              Building autonomous AI agent systems that plan, implement, and ship software end-to-end.
            </p>
            <Button variant="secondary" size="lg">
              Explore My Work
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
