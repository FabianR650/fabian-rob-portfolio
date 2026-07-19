"use client";

import { motion, type Variants } from "framer-motion";
import ScrollReveal from "@/app/components/animations/ScrollReveal";
import { revealVariant } from "@/lib/animation";

import AnimationRow from "@/app/animations/AnimationRow";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="
        py-20 
        dark:bg-slate-900
        text-slate-900 dark:text-white
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <ScrollReveal delay={0.1} y={40}>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={revealVariant(40, 0.1)}
            className="
              text-3xl font-bold mb-6 text-center
              text-slate-900 dark:text-white
            "
          >
            My Favorite Animations I've{" "}
            <span className="text-cyan-600 dark:text-cyan-500">created!</span>
          </motion.h1>
        </ScrollReveal>

        {/* Animation Grid */}
        <ScrollReveal delay={0.2} y={40}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealVariant(40, 0.2)}
          >
            <AnimationRow />
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  );
}
