"use client";
import React from "react";
import FeaturedProject from "@/components/featured-project";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FeaturedProject />
        </motion.div>
      </div>
    </main>
  );
}
