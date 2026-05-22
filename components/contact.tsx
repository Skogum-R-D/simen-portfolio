"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold gradient-text mb-12">Contact</h2>
        <div className="space-y-6">
          <p className="text-gray-300">
            <strong>Email:</strong> totenvegen576a@gmail.com
          </p>
          <p className="text-gray-300">
            <strong>GitHub:</strong> github.com/Skogum-R-D
          </p>
        </div>
        <div className="mt-12">
          <Button variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
