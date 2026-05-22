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
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold text-white">Email:</span> totenvegen576a@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-white">GitHub:</span> github.com/Skogum-R-D
              </p>
            </div>
            <div className="pt-4">
              <Button variant="secondary">Get in Touch</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
