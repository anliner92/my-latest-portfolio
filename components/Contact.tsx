"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Twitter, Send, Star } from "lucide-react";
import Link from "next/link";

export default function Contact() {
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

  const socialLinks = [
    { 
      icon: Mail, 
      href: "mailto:hello@example.com", 
      label: "Email",
      color: "from-red-500 to-pink-500",
      hoverColor: "hover:from-red-600 hover:to-pink-600"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    { 
      icon: Github, 
      href: "#", 
      label: "GitHub",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-800 hover:to-black"
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter",
      color: "from-sky-500 to-blue-500",
      hoverColor: "hover:from-sky-600 hover:to-blue-600"
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-orb-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-orb-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-pink-600 dark:text-pink-400 mb-4">
              <Star className="w-4 h-4 fill-pink-600 dark:fill-pink-400" />
              Get In Touch
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Let's Work
              <span className="block bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-blue-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className={`group relative p-5 rounded-2xl glass border border-border/50 hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 ${
                    isVisible
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                  aria-label={social.label}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                  <Icon className="w-6 h-6 text-foreground/70 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mb-16">
            <Link
              href="mailto:hello@example.com"
              className={`group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{
                transitionDelay: isVisible ? "400ms" : "0ms",
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send me an email
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Footer */}
          <div
            className={`mt-20 pt-8 border-t border-border/50 text-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Frontend Developer. All rights reserved.
            </p>
            <p className="text-foreground/40 text-xs mt-2">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
