"use client";
import { useEffect } from "react";

export function useReveal(selector = ".reveal, .reveal-left, .timeline-item") {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
