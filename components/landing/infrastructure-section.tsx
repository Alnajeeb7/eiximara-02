"use client";

import { useEffect, useState, useRef } from "react";

const projectTypes = [
  { name: "Portfolio Website", timeline: "3-7 days", features: "5+ pages" },
  { name: "Landing Page", timeline: "2-5 days", features: "Single page" },
  { name: "Custom Web App", timeline: "2-4 weeks", features: "Full-stack" },
  { name: "E-commerce Site", timeline: "2-3 weeks", features: "Payments" },
  { name: "SaaS Dashboard", timeline: "3-6 weeks", features: "Complex UI" },
  { name: "Mobile-First Site", timeline: "3-5 days", features: "Responsive" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projectTypes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
              <span className="w-8 h-px bg-primary/50" />
              What We Build
            </span>
            <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-8">
              From idea to
              <br />
              <span className="text-gradient">launch.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We build a wide range of digital products for students and professionals. 
              From simple portfolios to complex web applications - we&apos;ve got you covered.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">Next.js</div>
                <div className="text-sm text-muted-foreground">Modern framework</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">Vercel</div>
                <div className="text-sm text-muted-foreground">Fast hosting</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">React</div>
                <div className="text-sm text-muted-foreground">Component based</div>
              </div>
            </div>
          </div>

          {/* Right: Project types list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-border rounded-xl overflow-hidden bg-card">
              {/* Header */}
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Project Types</span>
                <span className="flex items-center gap-2 text-xs font-mono text-accent">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Accepting bookings
                </span>
              </div>

              {/* Project Types */}
              <div>
                {projectTypes.map((project, index) => (
                  <div
                    key={project.name}
                    className={`px-6 py-5 border-b border-border/50 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeProject === index ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span 
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          activeProject === index ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-muted-foreground">{project.features}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-primary">{project.timeline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
