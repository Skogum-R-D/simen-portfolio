"use client";

/**
 * Smooth scroll to a target element by ID
 * @param sectionId - The ID of the element to scroll to
 * @param offset - Optional offset from the top (default: 0)
 */
export function smoothScroll(sectionId: string, offset: number = 0): void {
  const section = document.getElementById(sectionId);
  if (section) {
    const topPosition = section.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({
      top: topPosition,
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
