"use client";
import { useEffect } from "react";
import { smoothScroll } from "@/lib/smooth-scroll";

export default function SmoothScrollListener() {
  useEffect(() => {
    // Handle anchor link clicks for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const sectionId = target.hash.substring(1); // Remove the #
        smoothScroll(sectionId, 80); // 80px offset for navbar
      }
    };

    document.addEventListener("click", handleAnchorClick);
    
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
