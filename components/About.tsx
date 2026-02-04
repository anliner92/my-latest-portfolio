"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
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

  const details = [
    { icon: MapPin, label: "Location", value: "Cebu, Philippines" },
    { icon: Briefcase, label: "Experience", value: "8+ Years" },
    { icon: CheckCircle2, label: "Status", value: "Open to new opportunities" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              About Me
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Crafting Digital
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-xl text-foreground/80 leading-relaxed">
                A passionate frontend developer with 8 years of experience
                specializing in crafting elegant and intuitive user interfaces.
                My drive stems from a deep love for coding and a commitment to
                solving user problems through clean, efficient code.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I excel in a modern tech stack, leveraging JavaScript and TypeScript to
                build dynamic applications using frameworks like Next.js and
                Gatsby. I am also proficient in crafting semantic markup with
                HTML and Pug.
              </p>

              {/* Details Grid */}
              <div className="grid grid-cols-1 gap-4 pt-6">
                {details.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <motion.div
                      key={detail.label}
                      className="group p-4 rounded-xl glass border border-border/50 hover:border-blue-500/50 transition-all duration-300 modern-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60 font-medium">
                            {detail.label}
                          </p>
                          <p className="text-lg font-semibold text-foreground">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
                
                {/* Main card */}
                <div className="relative aspect-square rounded-2xl overflow-hidden glass border border-border/50 modern-card">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center p-8">
                    <div className="text-center space-y-4">
                      <div className="text-8xl animate-float">💻</div>
                      <div className="space-y-2">
                        <p className="text-foreground/60 font-medium">Your Image Here</p>
                        <div className="flex gap-2 justify-center">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/30 rounded-full blur-xl animate-float" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
