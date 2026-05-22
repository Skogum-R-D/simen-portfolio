"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({ children, id, className = "", delay = 0 }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
