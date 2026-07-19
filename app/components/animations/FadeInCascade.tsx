"use client";

import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface FadeInCascadeProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}

export default function FadeInCascade({
  children,
  delay = 0,
  y = 30,
  duration = 0.6,
  className = "",
}: FadeInCascadeProps) {
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
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.33, 1, 0.68, 1], // smoother, softer easing
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
