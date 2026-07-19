"use client";

import Image from "next/image";
import { useDarkMode } from "../hooks/useDarkMode";
import { useState } from "react";

interface HeaderProps {
  setOpen: (value: boolean) => void;
  isDark: boolean;
  toggleDarkMode: () => void;
}

export default function Header({
  setOpen,
  isDark,
  toggleDarkMode,
}: HeaderProps) {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-[80px] border-b dark:bg-slate-900/80 backdrop-blur-lg shadow-lg">

      <nav className="max-w-[1200px] h-full mx-auto flex justify-between items-center p-2 sm:p-6">

        {/* Logo */}
        <h1 className="font-bold text-2xl transform-transition duration-300 hover:scale-105 hover:text-pink-500">
          <div className="relative">
            <Image
              src="/assets/fabian-logo3.png"
              alt="Fabian Logo Light"
              width={120}
              height={130}
              className="
                object-contain
                dark:hidden
                drop-shadow-[0_0_6px_rgba(0,140,255,0.6)]
              "
            />

            <Image
              src="/assets/fabian-logo2.png"
              alt="Fabian Logo Dark"
              width={120}
              height={130}
              className="
                object-contain
                hidden dark:block
                drop-shadow-[0_0_6px_rgba(0,200,255,0.7)]
              "
            />
          </div>
        </h1>

        {/* Desktop Nav + Dark Mode */}
        <div className="gap-2 md:flex items-center">
          <ul className="hidden md:flex gap-8 text-lg font-medium text-slate-700 dark:text-slate-200">
            <li><a href="#gallery" className="nav-link">Animation</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>

            {/* Desktop Contact Modal Trigger */}
            <li>
              <button
                onClick={() => setOpen(true)}
                className="nav-link"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="rounded-lg bg-slate-600 dark:bg-slate-700 px-3 py-2 transition-colors items-center"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden ml-3 text-slate-900 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-[2px] bg-current mb-[5px]"></div>
            <div className="w-6 h-[2px] bg-current mb-[5px]"></div>
            <div className="w-6 h-[2px] bg-current"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden w-full bg-white dark:bg-slate-900 shadow-lg 
          transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-lg font-medium text-slate-700 dark:text-slate-200">
          <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Animation</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>

          {/* Mobile Contact Modal Trigger */}
          <li>
            <button
              onClick={() => {
                setMenuOpen(false);
                setOpen(true);
              }}
              className="nav-link"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
