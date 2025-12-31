"use client";

import Navigation from "../../components/Navigation";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
