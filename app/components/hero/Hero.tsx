/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from "framer-motion"
import ScrollReveal from "@/app/components/animations/ScrollReveal"
import { revealVariant } from "@/lib/animation"

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-[80vh] sm:min-h-screen flex items-center overflow-hidden
        dark:bg-slate-950
      "
    >
      {/* Background Glow Left */}
      <ScrollReveal delay={0.1} y={20}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariant(0, 20, 0.1)}
          className="
            absolute -top-16 left-0 h-72 w-72 rounded-full 
            bg-blue-300/20 dark:bg-blue-600/20 
            blur-3xl sm:h-96 sm:w-96
          "
        />
      </ScrollReveal>

      {/* Background Glow Right */}
      <ScrollReveal delay={0.15} y={20}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={revealVariant(0, 20, 0.15)}
          className="
            absolute bottom-0 right-0 h-72 w-72 rounded-full 
            bg-indigo-300/20 dark:bg-indigo-500/20 
            blur-3xl sm:h-96 sm:w-96
          "
        />
      </ScrollReveal>

      <div className="relative z-10 grid items-center gap-3 py-4 md:grid-cols-2 mx-auto max-w-[1040px] px-6">
        
        {/* Left */}
        <div>
          {/* Headline */}
          <ScrollReveal delay={0.2} y={40}>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={revealVariant(0, 40, 0.2)}
              className="
                text-4xl sm:text-5xl font-black md:text-7xl
                text-slate-900 dark:text-white
              "
            >
              Hey
              <br />
              <span className="text-cyan-500 dark:text-cyan-500">I'm Fabian</span>
            </motion.h1>
          </ScrollReveal>

          {/* Paragraph */}
          <ScrollReveal delay={0.3} y={40}>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={revealVariant(0, 40, 0.3)}
              className="
                mt-8 max-w-full sm:max-w-xl text-base sm:text-lg leading-7 sm:leading-8
                text-slate-700 dark:text-slate-300
              "
            >
              I’m a <span className="text-cyan-500 dark:text-cyan-500 font-bold">frontend software engineer</span> who turns ideas
              into clean, engaging digital experiences. I build modern, intuitive interfaces and take
              pride in crafting thoughtful, polished web applications. I’m always refining my skills
              and pushing my work forward. Here’s a closer look at what{' '}
              <span className="text-cyan-500 dark:text-cyan-500 font-bold">drives me</span>.
            </motion.p>
          </ScrollReveal>

          {/* Social Icons */}
          <ScrollReveal delay={0.4} y={40}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariant(0, 40, 0.4)}
              className="flex flex-wrap items-center gap-4 mt-6"
            >
              <div className="p-2 rounded-full bg-cyan-500 shadow">
                <a href="https://www.linkedin.com/in/fabianrob/" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                </a>
              </div>

              <div className="p-2 rounded-full bg-cyan-500 shadow">
                <a href="https://github.com/FabianR650" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/github.svg" alt="GitHub" className="h-6 w-6" />
                </a>
              </div>

              <div className="p-2 rounded-full bg-cyan-500 shadow">
                <a href="/Resume/Fabian_Robinson_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/pdf.svg" alt="Resume" className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Right */}
        <ScrollReveal delay={0.45} y={50}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealVariant(0, 60, 0.45)}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="
                absolute inset-0 rounded-full 
                bg-blue-300 dark:bg-blue-500 
                blur-3xl opacity-30
              " />

              <img
                src="/assets/profile-pic.jpg"
                alt="Fabian Robinson"
                className="
                  relative h-64 w-64 rounded-full border-4 
                  border-cyan-400 dark:border-blue-500
                  object-cover shadow-2xl animate-float 
                  sm:h-80 sm:w-80 md:h-96 md:w-96
                "
              />
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
