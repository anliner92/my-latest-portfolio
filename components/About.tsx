"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                A passionate frontend developer with 8 years of experience
                specializing in crafting elegant and intuitive user interfaces.
                My drive stems from a deep love for coding and a commitment to
                solving user problems through clean, efficient code. I excel in
                a modern tech stack, leveraging JavaScript and TypeScript to
                build dynamic applications using frameworks like Next.js and
                Gatsby. I am also proficient in crafting semantic markup with
                HTML and Pug.
              </p>

              <div className="space-y-3">
                <p className="text-foreground/80">
                  <span className="font-semibold text-accent">Location:</span>{" "}
                  Cebu, Philippines
                </p>
                <p className="text-foreground/80">
                  <span className="font-semibold text-accent">Experience:</span>{" "}
                  8+ Years
                </p>
                <p className="text-foreground/80">
                  <span className="font-semibold text-accent">Status:</span>{" "}
                  Open to new opportunities
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-accent/30 mb-4">
                      💻
                    </div>
                    <p className="text-foreground/50">Your Image Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
