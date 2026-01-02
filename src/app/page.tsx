"use client";

import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <>
      {/* Base background layer - ensures solid white/black background */}
      <div className="fixed inset-0 bg-white dark:bg-black transition-colors duration-300 -z-30" />
      
      <div className="min-h-screen relative">
        {/* Animated background gradient - Light mode */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 transition-opacity duration-300 animate-gradient dark:opacity-0" />
        
        {/* Animated background gradient - Dark mode */}
        <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 transition-opacity duration-300 animate-gradient opacity-0 dark:opacity-100" />
        
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
