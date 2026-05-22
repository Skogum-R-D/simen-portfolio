"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glassmorphism backdrop-blur-lg"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold gradient-text">Simen</div>
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
        <Button variant="outline" size="sm">
          Resume
        </Button>
      </div>
    </motion.nav>
  );
}
