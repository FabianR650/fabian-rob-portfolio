'use client'

import Image from "next/image";

export default function Footer() {
  return (
    <section
      id="footer"
      className=" py-4
      flex flex-col items-center gap-8
        transition-colors
        bg-cyan-500        /* slightly darkened background in light mode */
        dark:bg-slate-900     /* pure dark mode background */
      "
    >
       {/* Light Mode Logo */}
          <Image
            src="/assets/fabian-logo3.png"
            alt="Fabian Logo Light"
            width={160}
            height={170}
            className="
              object-contain
              dark:hidden
              drop-shadow-[0_0_6px_rgba(0,140,255,0.6)]
              drop-shadow-[0_-4px_6px_rgba(4,140,255,0.5)]
              drop-shadow-[0_4px_6px_rgba(4,140,255,0.5)]
              drop-shadow-[-4px_0_6px_rgba(4,140,255,0.5)]
              drop-shadow-[4px_0_6px_rgba(4,140,255,0.5)]
            "
          />
      
          {/* Dark Mode Logo */}
          <Image
            src="/assets/fabian-logo2.png"
            alt="Fabian Logo Dark"
            width={160}
            height={170}
            className="
              object-contain
              hidden dark:block
              drop-shadow-[0_0_6px_rgba(0,200,255,0.7)]
              drop-shadow-[0_-4px_6px_rgba(0,200,255,0.6)]
              drop-shadow-[0_4px_6px_rgba(0,200,255,0.6)]
              drop-shadow-[-4px_0_6px_rgba(0,200,255,0.6)]
              drop-shadow-[4px_0_6px_rgba(0,200,255,0.6)]
            "
          />

      {/* Text Links */}
      <div className="flex items-center gap-10 text-lg font-medium">
        <a
          href="https://www.linkedin.com/in/fabianrob/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            transition-colors
            text-slate-700 hover:text-black
            dark:text-slate-300 dark:hover:text-white
          "
        >
          LINKEDIN
        </a>

        <a
          href="/Resume/Fabian_Robinson_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            transition-colors
            text-slate-700 hover:text-black
            dark:text-slate-300 dark:hover:text-white
          "
        >
          RESUME
        </a>

        <a
          href="https://github.com/FabianR650"
          target="_blank"
          rel="noopener noreferrer"
          className="
            transition-colors
            text-slate-700 hover:text-black
            dark:text-slate-300 dark:hover:text-white
          "
        >
          GITHUB
        </a>
      </div>

      {/* Copyright */}
      <p
        className="
          text-neutral-500 text-sm tracking-wide
          transition-colors
          dark:text-neutral-300
        "
      >
       Copyright © Fabian Robinson 2026
      </p>
    </section>
  );
}
