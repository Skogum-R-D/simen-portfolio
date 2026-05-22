"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">About</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Simen builds infrastructure for AI agents that collaborate like engineering teams.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          At Skogum R&D he designed and shipped a multi-agent platform where specialised AI agents (PM, Engineer, Frontend, QA, Infra) coordinate over an event bus to take a plain-language assignment and produce working, QA-validated, deployed software — with no human in the loop.
        </p>
      </motion.div>
    </section>
  );
};

export default About;