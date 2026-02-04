"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Wrench, Palette, Zap } from "lucide-react";
import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "React",
      "Next.js",
      "Gatsby.js",
      "PUG",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Tools & Libraries",
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
    skills: ["Git", "BrowserStack", "VsCode", "Bootstrap", "SaSS", "Postman"],
  },
  {
    category: "Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: ["UI/UX", "CSS Animations", "Responsive Design"],
  },
  {
    category: "Other",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    skills: [
      "REST APIs",
      "Performance Optimization",
      "Accessibility",
      "SEO",
      "Supabase",
    ],
  },
];

export default function Skills() {
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

  return (
    <section id="skills" ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
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
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">
              Skills & Technologies
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              What I Work With
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className="group p-6 rounded-2xl glass border border-border/50 hover:border-transparent transition-all duration-500 modern-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className={`px-4 py-2.5 rounded-lg bg-background/50 border border-border/50 group-hover:border-transparent group-hover:bg-gradient-to-r ${category.color} group-hover:text-white transition-all duration-300 text-sm font-medium text-foreground cursor-default`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + skillIndex * 0.05, ease: "easeOut" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
