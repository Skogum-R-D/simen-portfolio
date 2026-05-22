"use client";

/**
 * Smooth scroll to a target element
 * @param targetId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 0)
 */
export function smoothScroll(targetId: string, offset: number = 0): void {
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }
}

/**
 * Smooth scroll to top of page
 */
export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}