"use client";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}