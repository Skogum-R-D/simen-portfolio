"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, ExternalLink } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "totenvegen576a@gmail.com",
    href: "mailto:totenvegen576a@gmail.com",
    color: "group-hover:text-cyan-400",
    border: "group-hover:border-cyan-400/30",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Skogum-R-D",
    href: "https://github.com/Skogum-R-D",
    color: "group-hover:text-violet-400",
    border: "group-hover:border-violet-400/30",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-4">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-[0.2em] uppercase text-cyan-400/70 mb-3"
        >
          Let&apos;s Talk
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black gradient-text mb-5"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-12 leading-relaxed"
        >
          Interested in autonomous AI systems, agent platforms, or just want to talk tech?
          I&apos;m always up for a conversation.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {LINKS.map(({ icon: Icon, label, value, href, color, border }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`group glassmorphism rounded-2xl px-6 py-5 flex items-center gap-4 border border-white/8 ${border} transition-all duration-200 cursor-pointer`}
            >
              <Icon className={`w-5 h-5 text-gray-500 ${color} transition-colors flex-shrink-0`} />
              <div className="text-left">
                <p className="text-xs text-gray-500 mb-0.5 uppercase tracking-wider">{label}</p>
                <p className={`text-sm font-medium text-white/80 ${color} transition-colors`}>{value}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-gray-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
