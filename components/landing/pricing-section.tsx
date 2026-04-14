"use client";

import { useState } from "react";
import { ArrowRight, Check, Zap, Rocket, Clock, Leaf } from "lucide-react";

const deliveryTiers = [
  {
    name: "Express",
    icon: Zap,
    timeline: "1-3 Days",
    description: "For urgent projects that need immediate attention",
    multiplier: 1.6,
    features: [
      "Highest priority queue",
      "Daily progress updates",
      "Rush delivery guaranteed",
      "Direct communication channel",
    ],
    badge: "Limited Slots",
    popular: false,
  },
  {
    name: "Priority",
    icon: Rocket,
    timeline: "4-7 Days",
    description: "Fast delivery with balanced attention to detail",
    multiplier: 1.3,
    features: [
      "High priority queue",
      "Regular progress updates",
      "Quick turnaround",
      "Email support",
    ],
    badge: null,
    popular: true,
  },
  {
    name: "Standard",
    icon: Clock,
    timeline: "1-2 Weeks",
    description: "Our recommended option for most projects",
    multiplier: 1.0,
    features: [
      "Standard queue",
      "Weekly updates",
      "Best value option",
      "Email support",
    ],
    badge: "Most Popular",
    popular: false,
  },
  {
    name: "Flexible",
    icon: Leaf,
    timeline: "2-3 Weeks",
    description: "Budget-friendly option with flexible scheduling",
    multiplier: 0.9,
    features: [
      "Flexible scheduling",
      "Milestone updates",
      "10% discount applied",
      "Email support",
    ],
    badge: "Save 10%",
    popular: false,
  },
];

const projectTypes = [
  { name: "Portfolio Website", basePrice: 299 },
  { name: "Landing Page", basePrice: 199 },
  { name: "Custom Web App", basePrice: 999 },
  { name: "E-commerce Site", basePrice: 799 },
];

export function PricingSection() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedTier, setSelectedTier] = useState(2); // Default to Standard

  const basePrice = projectTypes[selectedProject].basePrice;
  const finalPrice = Math.round(basePrice * deliveryTiers[selectedTier].multiplier);

  return (
    <section id="pricing" className="relative py-32 lg:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
            <span className="w-8 h-px bg-primary/50" />
            Pricing
          </span>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            Transparent
            <br />
            <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Choose your project type and delivery speed. Pay only after you see the finished product.
          </p>
        </div>

        {/* Project Type Selector */}
        <div className="mb-12">
          <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">Project Type</h3>
          <div className="flex flex-wrap gap-3">
            {projectTypes.map((project, idx) => (
              <button
                key={project.name}
                onClick={() => setSelectedProject(idx)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedProject === idx
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {project.name}
                <span className="ml-2 text-xs opacity-70">from ${project.basePrice}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Tier Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliveryTiers.map((tier, idx) => {
            const Icon = tier.icon;
            const price = Math.round(basePrice * tier.multiplier);
            const isSelected = selectedTier === idx;
            
            return (
              <button
                key={tier.name}
                onClick={() => setSelectedTier(idx)}
                className={`relative p-6 text-left rounded-xl border transition-all duration-300 ${
                  isSelected
                    ? "border-primary bg-primary/5 glow-primary"
                    : "border-border bg-card hover:border-primary/50"
                } ${tier.popular ? "ring-1 ring-primary/30" : ""}`}
              >
                {tier.badge && (
                  <span className={`absolute -top-3 right-4 px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full ${
                    tier.badge === "Most Popular" 
                      ? "bg-primary text-primary-foreground" 
                      : tier.badge === "Limited Slots"
                      ? "bg-destructive text-destructive-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}>
                    {tier.badge}
                  </span>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isSelected ? "bg-primary/20" : "bg-secondary"
                }`}>
                  <Icon className={`w-6 h-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                </div>

                {/* Header */}
                <h3 className="font-display font-bold text-xl mb-1">{tier.name}</h3>
                <p className="text-sm text-primary font-mono mb-2">{tier.timeline}</p>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

                {/* Price */}
                <div className="mb-4 pb-4 border-b border-border">
                  <span className="font-display text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground text-sm ml-1">USD</span>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Selection indicator */}
                <div className={`absolute bottom-4 right-4 w-5 h-5 rounded-full border-2 transition-all ${
                  isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                }`}>
                  {isSelected && (
                    <Check className="w-full h-full text-primary-foreground p-0.5" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Summary & CTA */}
        <div className="mt-12 p-8 rounded-2xl border border-border bg-card">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-muted-foreground mb-2">Your selection:</p>
              <p className="text-2xl font-display font-bold">
                {projectTypes[selectedProject].name} with {deliveryTiers[selectedTier].name} delivery
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Estimated delivery: {deliveryTiers[selectedTier].timeline}
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total price</p>
                <p className="text-4xl font-display font-bold text-gradient">${finalPrice}</p>
              </div>
              
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all group hover-glow flex items-center gap-2">
                Book this project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Payment is collected only after project completion. Full satisfaction guaranteed.{" "}
          <a href="#contact" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Questions? Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
