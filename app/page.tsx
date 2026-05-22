"use client";
import React from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import FeaturedProject from "@/components/featured-project";
import Contact from "@/components/contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e]">
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Contact />
    </main>
  );
}
