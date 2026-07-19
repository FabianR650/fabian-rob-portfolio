/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";

import Header from "@/app/components/layout/Header"; 
import Hero from "@/app/components/hero/Hero";
import Gallery from "@/app/components/gallery/Gallery";
import Skills  from "@/app/components/about/Skills";
import ProjectsSection from "@/app/components/projects/ProjectsSection";
import Footer from "@/app/components/layout/Footer";
import ContactModal from "@/app/components/contact/ContactModal";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="dark:bg-slate-950 transition-colors duration-300">

        <Header
          isDark={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          setOpen={setOpen}
        />

        <ContactModal open={open} setOpen={setOpen} />

        <Hero />
        <Gallery />
        <ProjectsSection />
        <Skills />
        <Footer />

      </main>

      {/* 🔥 MAIL ICON TRIGGER */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-4 right-4 bg-cyan-500 p-3 rounded-full shadow-lg 
          hover:scale-110 transition-transform sm:bottom-6 z-50
        "
      >
        <img src="/icons/email.svg" alt="Email" className="h-6 w-6" />
      </button>

    </div>
  );
}
