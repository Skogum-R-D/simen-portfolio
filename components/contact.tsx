"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="contact"
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold gradient-text mb-6">Contact</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Email: <a href="mailto:totenvegen576a@gmail.com" className="text-blue-400 hover:underline">
              totenvegen576a@gmail.com
            </a>
          </p>
          <p>
            GitHub: <a href="https://github.com/Skogum-R-D" className="text-blue-400 hover:underline">
              github.com/Skogum-R-D
            </a>
          </p>
        </div>
        <div className="mt-8">
          <Button variant="secondary" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
