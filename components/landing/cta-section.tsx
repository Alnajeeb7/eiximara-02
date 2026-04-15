"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";
import Link from "next/link";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-border rounded-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300 rounded-2xl"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, oklch(0.62 0.25 295 / 0.3), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
                  <span className="w-8 h-px bg-primary/50" />
                  Get in touch
                </span>
                
                <h2 className="text-4xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-[0.95]">
                  Ready to build
                  <br />
                  <span className="text-gradient">something great?</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  Let&apos;s create a portfolio or software that truly represents you. 
                  Start with a conversation - no commitment required.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                  <Link href="/book">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-full group hover-glow"
                    >
                      Book your project
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-border hover:bg-secondary"
                  >
                    View our work
                  </Button>
                </div>

                {/* Contact info */}
                <div className="flex flex-col sm:flex-row gap-6 text-muted-foreground">
                  <a href="mailto:hello@eiximara.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-mono">hello@eiximara.com</span>
                  </a>
                  <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm font-mono">+91 98765 43210</span>
                  </a>
                </div>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-primary/20 rounded-bl-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-accent/20 rounded-tr-2xl" />
        </div>
      </div>
    </section>
  );
}
