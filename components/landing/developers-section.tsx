"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "How do I start a project?",
    answer: "Simply fill out our booking form with your project details, select your preferred delivery timeline, and we'll confirm your project within 24 hours. No commitment required until you're ready."
  },
  {
    question: "When do I pay?",
    answer: "You only pay after seeing your completed project. We believe in our work - that's why payment is collected only after you're satisfied with the final result."
  },
  {
    question: "What's included in delivery?",
    answer: "You receive the live website link, full GitHub repository access, complete source code, and documentation. You own 100% of everything we build."
  },
  {
    question: "Do you offer support after delivery?",
    answer: "Yes! We provide ongoing support via email or phone for bug fixes, minor updates, and general queries. Extended support packages are also available."
  },
];

const contactMethods = [
  { 
    icon: Mail,
    title: "Email us", 
    description: "Get in touch anytime",
    value: "hello@eiximara.com"
  },
  { 
    icon: Phone,
    title: "Call us", 
    description: "Mon-Fri, 9am-6pm IST",
    value: "+91 98765 43210"
  },
  { 
    icon: MessageCircle,
    title: "WhatsApp", 
    description: "Quick responses",
    value: "Chat now"
  },
];

export function DevelopersSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: FAQ */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-primary mb-6">
              <span className="w-8 h-px bg-primary/50" />
              Common questions
            </span>
            <h2 className="text-4xl lg:text-6xl font-display font-bold tracking-tight mb-8">
              Got questions?
              <br />
              <span className="text-muted-foreground">We&apos;ve got answers.</span>
            </h2>
            
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-border rounded-xl overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "bg-card" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className={`text-2xl transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40" : "max-h-0"}`}>
                    <p className="px-6 pb-4 text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Contact methods */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="p-8 border border-border rounded-2xl bg-card">
              <h3 className="text-2xl font-display font-bold mb-2">Need more help?</h3>
              <p className="text-muted-foreground mb-8">Reach out to us through any of these channels.</p>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href="#"
                    className={`flex items-center gap-4 p-4 border border-border rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
                      <method.icon className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium group-hover:translate-x-1 transition-transform">{method.title}</div>
                      <div className="text-sm text-muted-foreground">{method.description}</div>
                    </div>
                    <span className="text-sm font-mono text-primary">{method.value}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Business hours */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Average response time: <span className="text-primary font-mono">under 2 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
