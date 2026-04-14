import { useEffect, useRef, useState } from "react";

/**
 * Retorna [ref, isVisible].
 * Aplique `ref` ao elemento que quer observar.
 * `isVisible` vira true quando o elemento entra na viewport.
 *
 * @param {number} threshold - Porcentagem do elemento visível para disparar (0–1)
 * @param {string} rootMargin - Margem extra da viewport (CSS string)
 */
function useInView(threshold = 0.15, rootMargin = "0px") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // anima apenas uma vez
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

export default useInView;
