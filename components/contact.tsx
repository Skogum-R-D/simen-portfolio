"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">Email</h4>
              <a
                href="mailto:totenvegen576a@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                totenvegen576a@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">GitHub</h4>
              <a
                href="https://github.com/Skogum-R-D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                github.com/Skogum-R-D
              </a>
            </div>
            <div className="pt-4">
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
