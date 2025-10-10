import { useEffect } from 'react';

interface RevealOptions {
  selector?: string;
  threshold?: number;
}

export const useRevealOnScroll = ({
  selector = 'section, footer, [data-reveal]',
  threshold = 0.1,
}: RevealOptions = {}) => {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(selector));

    if (targets.length === 0) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => {
        el.classList.add('reveal', 'visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector, threshold]);
};
