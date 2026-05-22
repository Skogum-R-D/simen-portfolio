"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, GitHub } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold gradient-text mb-12 text-center">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-gray-400" />
                <a
                  href="mailto:totenvegen576a@gmail.com"
                  className="text-lg text-gray-300 hover:text-white transition-colors"
                >
                  totenvegen576a@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <GitHub className="h-6 w-6 text-gray-400" />
                <a
                  href="https://github.com/Skogum-R-D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-300 hover:text-white transition-colors"
                >
                  github.com/Skogum-R-D
                </a>
              </div>
              <div className="pt-4">
                <Button variant="outline" size="lg" className="w-full">
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}