"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "EIXIMARA delivered my portfolio in just 3 days. It helped me land my dream internship within a month.",
    author: "Priya Sharma",
    role: "Computer Science Student",
    company: "IIT Delhi",
    metric: "Landed internship in 30 days",
  },
  {
    quote: "The attention to detail was incredible. My portfolio finally represents the quality of work I do.",
    author: "Alex Chen",
    role: "UX Designer",
    company: "Freelance",
    metric: "3x more client inquiries",
  },
  {
    quote: "Fast, professional, and the support after delivery was exceptional. Highly recommend for any professional.",
    author: "Marcus Webb",
    role: "Software Engineer",
    company: "Tech Startup",
    metric: "Portfolio built in 5 days",
  },
  {
    quote: "They understood exactly what I needed for my personal brand. The result exceeded all expectations.",
    author: "Riya Patel",
    role: "MBA Student",
    company: "ISB Hyderabad",
    metric: "100% satisfaction",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="work" className="relative py-32 lg:py-40 border-t border-border lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            What clients say
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div
              className={`mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-primary">
                  {activeTestimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-lg font-medium">{activeTestimonial.author}</p>
                <p className="text-muted-foreground">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 border border-border rounded-xl bg-card transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-primary uppercase block mb-4">
                Key Result
              </span>
              <p className="font-display font-bold text-3xl md:text-4xl text-gradient">
                {activeTestimonial.metric}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Types Label */}
        <div className="mt-24 pt-12 border-t border-border">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Trusted by students and professionals
          </p>
        </div>
      </div>
      
      {/* Full-width marquee outside container */}
      <div className="w-full">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {["IIT Students", "MBA Graduates", "Tech Professionals", "Designers", "Entrepreneurs", "Freelancers", "Consultants", "Engineers"].map(
                (type) => (
                  <span
                    key={`${setIdx}-${type}`}
                    className="font-display font-medium text-xl md:text-2xl text-muted-foreground/40 whitespace-nowrap hover:text-primary transition-colors duration-300"
                  >
                    {type}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
