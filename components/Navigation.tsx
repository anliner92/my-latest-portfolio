"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-accent hover:text-accent/80 transition-colors duration-300"
          >
            &lt;Dev /&gt;
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["about", "experience", "projects", "skills", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-foreground/70 hover:text-accent capitalize transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </button>
              )
            )}
          </div>

          <Link
            href="mailto:hello@example.com"
            className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 text-sm font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
