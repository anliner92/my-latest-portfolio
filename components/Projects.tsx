"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory and payment processing.",
    tags: ["React", "Next.js", "TypeScript", "Stripe"],
    link: "#",
    github: "#",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team features.",
    tags: ["React", "Firebase", "Tailwind CSS", "WebSocket"],
    link: "#",
    github: "#",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts and real-time metrics.",
    tags: ["Next.js", "D3.js", "TypeScript", "API Integration"],
    link: "#",
    github: "#",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
];

export default function Projects() {
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
    <section
      id="projects"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-4">
              Featured Projects
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              My Recent Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative modern-card ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl overflow-hidden glass border border-border/50 hover:border-transparent transition-all duration-500">
                  {/* Gradient Header */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-2xl">🚀</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-background/50 border border-border/50 group-hover:border-transparent group-hover:bg-gradient-to-r ${project.gradient} group-hover:text-white transition-all duration-300 text-foreground ${
                            isVisible
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-90"
                          }`}
                          style={{
                            transitionDelay: isVisible
                              ? `${index * 150 + tagIndex * 50}ms`
                              : "0ms",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t border-border/50">
                      <Link
                        href={project.link}
                        className="flex items-center gap-2 text-foreground/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        <span className="text-sm">Live Demo</span>
                      </Link>
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 text-foreground/70 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium group/link"
                      >
                        <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                        <span className="text-sm">Code</span>
                      </Link>
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10 rounded-2xl`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
