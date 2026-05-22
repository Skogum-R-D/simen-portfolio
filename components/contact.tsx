"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold gradient-text mb-12 text-center">
          Get in Touch
        </h2>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a
                  href="mailto:totenvegen576a@gmail.com"
                  className="text-lg hover:text-blue-400 transition-colors"
                >
                  totenvegen576a@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-blue-400" />
                <a
                  href="https://github.com/Skogum-R-D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-blue-400 transition-colors"
                >
                  github.com/Skogum-R-D
                </a>
              </div>
            </div>

            <div className="pt-6 text-center text-gray-400">
              <p>Based in Norway, building the future of autonomous AI systems.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}