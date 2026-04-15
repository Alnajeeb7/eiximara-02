"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Portfolio Websites",
    description: "Stand out with a professional portfolio that showcases your work. Perfect for students and professionals looking to make a strong impression.",
    visual: "portfolio",
  },
  {
    number: "02",
    title: "Custom Software",
    description: "Tailored software solutions built for your specific needs. From web apps to automation tools, we bring your ideas to life.",
    visual: "software",
  },
  {
    number: "03",
    title: "Personal Branding",
    description: "Establish your digital presence with cohesive branding. We help you create a memorable identity that resonates with your audience.",
    visual: "branding",
  },
  {
    number: "04",
    title: "Support & Maintenance",
    description: "Ongoing support to keep your projects running smoothly. Bug fixes, updates, and feature enhancements when you need them.",
    visual: "support",
  },
];

function PortfolioVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="portfolioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.62 0.25 295)" />
          <stop offset="100%" stopColor="oklch(0.70 0.2 330)" />
        </linearGradient>
      </defs>
      
      {/* Browser frame */}
      <rect x="30" y="20" width="140" height="120" rx="6" fill="none" stroke="url(#portfolioGrad)" strokeWidth="2" />
      
      {/* Browser dots */}
      <circle cx="45" cy="32" r="3" fill="oklch(0.62 0.25 295)" opacity="0.6" />
      <circle cx="58" cy="32" r="3" fill="oklch(0.62 0.25 295)" opacity="0.4" />
      <circle cx="71" cy="32" r="3" fill="oklch(0.62 0.25 295)" opacity="0.2" />
      
      {/* Content blocks */}
      <rect x="40" y="50" width="60" height="30" rx="2" fill="oklch(0.62 0.25 295)" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="110" y="50" width="50" height="80" rx="2" fill="oklch(0.55 0.2 170)" opacity="0.2">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </rect>
      <rect x="40" y="90" width="60" height="40" rx="2" fill="oklch(0.70 0.2 330)" opacity="0.25">
        <animate attributeName="opacity" values="0.25;0.55;0.25" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function SoftwareVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="softwareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.55 0.2 170)" />
          <stop offset="100%" stopColor="oklch(0.60 0.2 200)" />
        </linearGradient>
      </defs>
      
      {/* Central gear */}
      <circle cx="100" cy="80" r="25" fill="none" stroke="url(#softwareGrad)" strokeWidth="3">
        <animateTransform attributeName="transform" type="rotate" from="0 100 80" to="360 100 80" dur="8s" repeatCount="indefinite" />
      </circle>
      
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <rect
            key={i}
            x={100 + Math.cos(rad) * 25 - 4}
            y={80 + Math.sin(rad) * 25 - 4}
            width="8"
            height="8"
            fill="oklch(0.55 0.2 170)"
          >
            <animateTransform attributeName="transform" type="rotate" from={`0 100 80`} to={`360 100 80`} dur="8s" repeatCount="indefinite" />
          </rect>
        );
      })}
      
      {/* Connection lines */}
      <line x1="40" y1="80" x2="75" y2="80" stroke="oklch(0.55 0.2 170)" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
      </line>
      <line x1="125" y1="80" x2="160" y2="80" stroke="oklch(0.55 0.2 170)" strokeWidth="2" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-8" dur="0.5s" repeatCount="indefinite" />
      </line>
      
      {/* Input/Output nodes */}
      <circle cx="35" cy="80" r="8" fill="none" stroke="oklch(0.62 0.25 295)" strokeWidth="2" />
      <circle cx="165" cy="80" r="8" fill="oklch(0.55 0.2 170)" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function BrandingVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.62 0.25 295)" />
          <stop offset="50%" stopColor="oklch(0.70 0.2 330)" />
          <stop offset="100%" stopColor="oklch(0.55 0.2 170)" />
        </linearGradient>
      </defs>
      
      {/* Diamond/Brand mark */}
      <path
        d="M 100 30 L 140 80 L 100 130 L 60 80 Z"
        fill="none"
        stroke="url(#brandGrad)"
        strokeWidth="2"
      >
        <animate attributeName="stroke-dasharray" values="0 400;400 0" dur="3s" repeatCount="indefinite" />
      </path>
      
      {/* Inner diamond */}
      <path
        d="M 100 50 L 125 80 L 100 110 L 75 80 Z"
        fill="oklch(0.62 0.25 295)"
        opacity="0.2"
      >
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Center point */}
      <circle cx="100" cy="80" r="5" fill="oklch(0.70 0.2 330)">
        <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" />
      </circle>
      
      {/* Sparkles */}
      <circle cx="50" cy="40" r="2" fill="oklch(0.62 0.25 295)" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="50" r="2" fill="oklch(0.55 0.2 170)" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="145" cy="120" r="2" fill="oklch(0.70 0.2 330)" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function SupportVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <linearGradient id="supportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.55 0.2 170)" />
          <stop offset="100%" stopColor="oklch(0.62 0.25 295)" />
        </linearGradient>
      </defs>
      
      {/* Shield */}
      <path
        d="M 100 25 L 145 45 L 145 85 Q 145 120 100 140 Q 55 120 55 85 L 55 45 Z"
        fill="none"
        stroke="url(#supportGrad)"
        strokeWidth="2"
      />
      
      {/* Inner shield glow */}
      <path
        d="M 100 40 L 130 55 L 130 80 Q 130 105 100 120 Q 70 105 70 80 L 70 55 Z"
        fill="oklch(0.55 0.2 170)"
        opacity="0.1"
      >
        <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
      </path>
      
      {/* Checkmark */}
      <path
        d="M 80 80 L 95 95 L 120 65"
        fill="none"
        stroke="oklch(0.55 0.2 170)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate attributeName="stroke-dasharray" values="0 100;100 0" dur="1.5s" repeatCount="indefinite" />
      </path>
      
      {/* Pulse rings */}
      <circle cx="100" cy="85" r="20" fill="none" stroke="oklch(0.62 0.25 295)" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="20;50" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "portfolio":
      return <PortfolioVisual />;
    case "software":
      return <SoftwareVisual />;
    case "branding":
      return <BrandingVisual />;
    case "support":
      return <SupportVisual />;
    default:
      return <PortfolioVisual />;
  }
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-border">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary/40 via-primary/20 to-transparent tracking-tighter">
            {service.number}
          </span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display font-bold mb-4 group-hover:translate-x-2 transition-transform duration-500 group-hover:text-gradient">
              {service.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={service.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary/50" />
            Our Services
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display font-bold tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What we offer.
            <br />
            <span className="text-muted-foreground">Built with care.</span>
          </h2>
        </div>

        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
