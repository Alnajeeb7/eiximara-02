"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, CreditCard, Lock, CheckCircle } from "lucide-react";

const trustFeatures = [
  {
    icon: CheckCircle,
    title: "Pay after completion",
    description: "See your finished project before making any payment. Full transparency.",
  },
  {
    icon: Lock,
    title: "Secure delivery",
    description: "All project files delivered securely via email with full documentation.",
  },
  {
    icon: Shield,
    title: "Full ownership",
    description: "You own 100% of the code and design. No hidden fees or royalties.",
  },
  {
    icon: CreditCard,
    title: "Transparent pricing",
    description: "Clear upfront pricing. No surprise charges or scope creep costs.",
  },
];

const guarantees = ["100% Satisfaction", "Money Back", "Full Ownership", "Ongoing Support", "Fast Response"];

export function SecuritySection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
              <span className="w-8 h-px bg-primary/50" />
              Trust & Security
            </span>
            <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-8">
              Your success
              <br />
              <span className="text-gradient">is guaranteed.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We believe in our work. That&apos;s why you only pay after seeing your completed 
              project. No risks, no surprises - just quality results.
            </p>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-3">
              {guarantees.map((guarantee, index) => (
                <span
                  key={guarantee}
                  className={`px-4 py-2 border border-border bg-secondary rounded-full text-sm font-mono transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {guarantee}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="grid gap-4">
            {trustFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border border-border rounded-xl bg-background hover:border-primary/30 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-border rounded-lg group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <feature.icon className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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
