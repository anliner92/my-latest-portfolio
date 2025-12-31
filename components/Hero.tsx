"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-accent text-lg font-semibold mb-4 tracking-wide">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Frontend Developer
          </h1>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            I build fast, engaging, and intuitive web experiences. Over the past
            8 years, I've honed my skills in React, Next.js, Gatsby, and
            TypeScript to transform complex problems into elegant digital
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex justify-center animate-bounce">
            <ChevronDown className="w-6 h-6 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
