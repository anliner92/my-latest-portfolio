"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
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
    skills: ["Git", "BrowserStack", "VsCode", "Bootstrap", "SaSS", "Postman"],
  },
  {
    category: "Design",
    skills: ["UI/UX", "CSS Animations", "Responsive Design"],
  },
  {
    category: "Other",
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
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border border-border hover:border-accent transition-all duration-300 group cursor-pointer transform hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <h3 className="text-lg font-bold text-accent mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-background border border-border group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 text-sm font-medium text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
