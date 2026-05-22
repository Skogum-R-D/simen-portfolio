"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { smoothScroll } from "@/lib/smoothScroll";

export default function Navbar() {
  const handleScroll = (sectionId: string) => {
    smoothScroll(sectionId, -80); // Offset for fixed navbar
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold gradient-text cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          Simen
        </motion.div>
        <div className="hidden md:flex space-x-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => handleScroll("about")}
          >
            About
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => handleScroll("skills")}
          >
            Skills
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => handleScroll("projects")}
          >
            Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </motion.button>
        </div>
        <div className="md:hidden">
          <Button size="icon" variant="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
