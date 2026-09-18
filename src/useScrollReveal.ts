import { useEffect } from "react";

export function useScrollReveal(): void {
  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "is-visible",
            entry.isIntersecting
          );
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px",
      }
    );

    elements.forEach((element, index) => {
      element.style.setProperty(
        "--reveal-delay",
        `${(index % 4) * 70}ms`
      );

      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}