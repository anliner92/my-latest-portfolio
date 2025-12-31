"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
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

  const socialLinks = [
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-8 mx-auto" />
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-4 rounded-xl border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-foreground/60 group-hover:text-accent transition-colors duration-300" />
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="mailto:hello@example.com"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              Send me an email
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-foreground/60 text-sm">
              © 2025 Frontend Developer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
