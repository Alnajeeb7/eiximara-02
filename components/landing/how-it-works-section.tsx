"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "I",
    title: "Share your vision",
    description: "Tell us about your project. Whether it's a portfolio, website, or custom software - we'll understand exactly what you need.",
    details: [
      "Fill out our booking form",
      "Select your delivery timeline",
      "Upload any references or assets",
      "We'll confirm within 24 hours"
    ],
  },
  {
    number: "II",
    title: "We build it",
    description: "Our team gets to work bringing your vision to life. Professional design, clean code, and attention to every detail.",
    details: [
      "Design mockups shared for approval",
      "Development with modern tech stack",
      "Regular progress updates",
      "Testing across all devices"
    ],
  },
  {
    number: "III",
    title: "You receive it",
    description: "Once complete, pay and receive your finished project. Full ownership, complete files, and ongoing support available.",
    details: [
      "Final review and approval",
      "Payment after completion",
      "Live website + GitHub access",
      "Support via email or phone"
    ],
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-card overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary/50" />
            How It Works
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display font-bold tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Simple process.
            <br />
            <span className="text-muted-foreground">Stunning results.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-border transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className={`font-display text-3xl transition-colors duration-300 ${activeStep === index ? "text-primary" : "text-muted-foreground"}`}>
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Progress indicator */}
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-border overflow-hidden">
                        <div 
                          className="h-full bg-primary w-0"
                          style={{
                            animation: 'progress 6s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Details display */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="border border-border overflow-hidden bg-secondary/30 rounded-xl">
              {/* Window header */}
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <div className="w-3 h-3 rounded-full bg-accent/40" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">step {activeStep + 1} of 3</span>
              </div>

              {/* Details content */}
              <div className="p-8 min-h-[320px]">
                <h4 className="text-xl font-display font-bold mb-6 text-gradient">
                  {steps[activeStep].title}
                </h4>
                <ul className="space-y-4">
                  {steps[activeStep].details.map((detail, i) => (
                    <li 
                      key={`${activeStep}-${i}`}
                      className="flex items-start gap-3 detail-line-reveal"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      </span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status */}
              <div className="px-6 py-4 border-t border-border flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">
                  {activeStep === 0 && "Start your journey"}
                  {activeStep === 1 && "We handle everything"}
                  {activeStep === 2 && "Receive your project"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .detail-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
