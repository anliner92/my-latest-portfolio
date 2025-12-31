"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory and payment processing.",
    tags: ["React", "Next.js", "TypeScript", "Stripe"],
    link: "#",
    github: "#",
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team features.",
    tags: ["React", "Firebase", "Tailwind CSS", "WebSocket"],
    link: "#",
    github: "#",
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts and real-time metrics.",
    tags: ["Next.js", "D3.js", "TypeScript", "API Integration"],
    link: "#",
    github: "#",
    image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
  },
];

export default function Projects() {
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
      id="projects"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div
                  className={`h-48 ${project.image} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={project.link}
                      className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Visit</span>
                    </Link>
                    <Link
                      href={project.github}
                      className="flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
