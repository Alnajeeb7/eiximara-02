"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Check, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const projectTypes = [
  { id: "portfolio", label: "Portfolio Website", description: "Showcase your work and skills" },
  { id: "software", label: "Custom Software", description: "Web apps, tools, and platforms" },
  { id: "branding", label: "Personal Branding", description: "Complete digital identity" },
  { id: "other", label: "Something Else", description: "Tell us what you need" },
];

const budgetRanges = [
  { id: "starter", label: "$500 - $1,000", description: "Basic portfolio or landing page" },
  { id: "standard", label: "$1,000 - $2,500", description: "Full portfolio with custom features" },
  { id: "premium", label: "$2,500 - $5,000", description: "Complex software or full branding" },
  { id: "enterprise", label: "$5,000+", description: "Large-scale projects" },
];

const timelines = [
  { id: "express", label: "Express (1-3 days)", description: "+50% rush fee" },
  { id: "priority", label: "Priority (1 week)", description: "+25% priority fee" },
  { id: "standard", label: "Standard (2 weeks)", description: "Regular pricing" },
  { id: "flexible", label: "Flexible (3+ weeks)", description: "10% discount" },
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.projectType !== "";
      case 2:
        return formData.budget !== "";
      case 3:
        return formData.timeline !== "";
      case 4:
        return formData.name !== "" && formData.email !== "";
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    setStep(5);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl tracking-tight text-gradient">
              EIXIMARA
            </span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Button>
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto">
          {/* Progress indicator */}
          {step < 5 && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-muted-foreground">Step {step} of 4</span>
                <span className="text-sm font-mono text-muted-foreground">{Math.round((step / 4) * 100)}%</span>
              </div>
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 rounded-full"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
                What would you like to build?
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Select the type of project that best describes what you need.
              </p>

              <div className="grid gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleSelect("projectType", type.id)}
                    className={`flex items-center justify-between p-6 rounded-xl border transition-all duration-300 text-left ${
                      formData.projectType === type.id
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                    }`}
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{type.label}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      formData.projectType === type.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/30"
                    }`}>
                      {formData.projectType === type.id && (
                        <Check className="w-4 h-4 text-primary-foreground" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Budget */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
                What&apos;s your budget range?
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                This helps us understand the scope and recommend the best approach.
              </p>

              <div className="grid gap-4">
                {budgetRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => handleSelect("budget", range.id)}
                    className={`flex items-center justify-between p-6 rounded-xl border transition-all duration-300 text-left ${
                      formData.budget === range.id
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                    }`}
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{range.label}</h3>
                      <p className="text-sm text-muted-foreground">{range.description}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      formData.budget === range.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/30"
                    }`}>
                      {formData.budget === range.id && (
                        <Check className="w-4 h-4 text-primary-foreground" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Timeline */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
                When do you need it?
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Choose a timeline that works for you. Faster delivery is available with a premium.
              </p>

              <div className="grid gap-4">
                {timelines.map((timeline) => (
                  <button
                    key={timeline.id}
                    onClick={() => handleSelect("timeline", timeline.id)}
                    className={`flex items-center justify-between p-6 rounded-xl border transition-all duration-300 text-left ${
                      formData.timeline === timeline.id
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                    }`}
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{timeline.label}</h3>
                      <p className="text-sm text-muted-foreground">{timeline.description}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      formData.timeline === timeline.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/30"
                    }`}>
                      {formData.timeline === timeline.id && (
                        <Check className="w-4 h-4 text-primary-foreground" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
                Tell us about yourself
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Share your details so we can get in touch and discuss your project.
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email address <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Project description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your project, goals, and any specific requirements..."
                    className="min-h-[150px] rounded-xl resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Success */}
          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-12">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
                Request submitted!
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-md mx-auto">
                Thank you for your interest. We&apos;ll review your project details and get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-full group hover-glow"
                  >
                    Back to home
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Contact info */}
              <div className="border-t border-border pt-12">
                <p className="text-sm text-muted-foreground mb-6">Or reach out directly:</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
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
            </div>
          )}

          {/* Navigation buttons */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
              <Button
                variant="ghost"
                onClick={() => setStep((prev) => Math.max(1, prev - 1))}
                disabled={step === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              {step < 4 ? (
                <Button
                  onClick={() => setStep((prev) => prev + 1)}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full gap-2 hover-glow"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full gap-2 hover-glow"
                >
                  Submit request
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
