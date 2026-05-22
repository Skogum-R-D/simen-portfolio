"use client";

import { motion } from "framer-motion";
import { Mail, GitHub } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">Contact</h2>
        <p className="text-xl text-muted-foreground mb-12">
          Get in touch for collaborations, consulting, or just to say hello.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <motion.a
            href="mailto:totenvegen576a@gmail.com"
            className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6" />
            <span>totenvegen576a@gmail.com</span>
          </motion.a>

          <motion.a
            href="https://github.com/Skogum-R-D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHub className="w-6 h-6" />
            <span>github.com/Skogum-R-D</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;