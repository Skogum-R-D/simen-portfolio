"use client";
import { useEffect } from "react";
import { smoothScroll } from "@/lib/smooth-scroll";

export default function SmoothScrollListener() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        e.preventDefault();
        const sectionId = target.hash.substring(1);
        smoothScroll(sectionId, 80);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
