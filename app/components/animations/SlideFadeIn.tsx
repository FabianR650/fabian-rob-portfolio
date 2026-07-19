"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

export default function SlideFadeIn({
  children,
  delay = 0,
  y = 20,
  scale = 0.95,
  duration = 0.5,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  duration?: number;
  className?: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden"); // allows re-trigger
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y, scale },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94], // smooth pop easing
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
