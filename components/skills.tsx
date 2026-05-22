"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Code2, Server, Boxes } from "lucide-react";

const CATEGORIES = [
  {
    icon: Bot,
    label: "AI & Agents",
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    glow: "group-hover:shadow-cyan-500/10",
    skills: ["Multi-agent systems", "LLM tool loops", "Mistral AI", "Agentic workflows", "Prompt engineering"],
  },
  {
    icon: Code2,
    label: "Frontend",
    color: "text-violet-400",
    border: "border-violet-400/20",
    glow: "group-hover:shadow-violet-500/10",
    skills: ["Next.js 16 / App Router", "TypeScript", "Tailwind CSS", "Framer Motion", "React 19"],
  },
  {
    icon: Server,
    label: "Backend",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    glow: "group-hover:shadow-emerald-500/10",
    skills: ["Python / asyncio", "Event-driven arch", "Valkey / Redis", "REST APIs", "WebSockets"],
  },
  {
    icon: Boxes,
    label: "DevOps & Infra",
    color: "text-orange-400",
    border: "border-orange-400/20",
    glow: "group-hover:shadow-orange-500/10",
    skills: ["Docker / Podman", "Kubernetes", "CI/CD pipelines", "GitHub Actions", "Container orchestration"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-[0.2em] uppercase text-cyan-400/70 mb-3 text-center"
        >
          Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black gradient-text mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map(({ icon: Icon, label, color, border, glow, skills }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className={`group glassmorphism rounded-2xl p-5 border ${border} hover:shadow-lg ${glow} transition-all duration-300`}
            >
              <div className={`${color} mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className={`text-sm font-semibold ${color} mb-3 uppercase tracking-wider`}>{label}</h3>
              <ul className="space-y-1.5">
                {skills.map((s) => (
                  <li key={s} className="text-xs text-gray-400 flex items-center gap-2">
                    <span className={`w-1 h-1 rounded-full ${color} opacity-60 flex-shrink-0`} style={{ background: "currentColor" }} />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
