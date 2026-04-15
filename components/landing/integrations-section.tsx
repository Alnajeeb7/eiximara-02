"use client";

import { useEffect, useState, useRef } from "react";

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Vercel", category: "Hosting" },
  { name: "Supabase", category: "Database" },
  { name: "Stripe", category: "Payments" },
  { name: "Framer Motion", category: "Animations" },
  { name: "shadcn/ui", category: "Components" },
  { name: "Prisma", category: "ORM" },
  { name: "GitHub", category: "Version Control" },
  { name: "Figma", category: "Design" },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary/50" />
            Tech Stack
            <span className="w-8 h-px bg-primary/50" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            Built with modern
            <br />
            <span className="text-gradient">technologies.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We use the latest tools and frameworks to build fast, scalable, and maintainable solutions.
          </p>
        </div>

      </div>
      
      {/* Full-width marquees outside container */}
      <div className="w-full mb-6">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {techStack.map((tech) => (
                <div
                  key={`${tech.name}-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-border rounded-xl bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {tech.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{tech.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {[...techStack].reverse().map((tech) => (
                <div
                  key={`${tech.name}-reverse-${setIndex}`}
                  className="shrink-0 px-8 py-6 border border-border rounded-xl bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {tech.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{tech.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
