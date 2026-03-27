import React from "react";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Sparkles,
  Target,
  Star,
  Shield,
  Lightbulb,
  Gauge,
  Globe,
  Bot,
  Puzzle,
  RefreshCw,
} from "lucide-react";

import Hero from "../shared/Hero";
import CTASection from "../shared/CTASection";
import ClientStrip from "../shared/ClientStrip";
import TestimonialGrid from "../shared/TestimonialGrid";
import FeatureGrid from "../shared/FeatureGrid";
import BenefitsGrid from "../shared/BenefitsGrid";
import KeyboardHero from "../shared/KeyboardHero";
import "./index.css";

const Home = () => {

  return (
    <div className="homepage-container">
      {/* Hero with vertical showcase */}
      <Hero
        animated
        badge={{ icon: <Sparkles size={16} />, text: "AI-Powered Platforms" }}
        titleMain="Sustaining Energy."
        titleGradient="Sustaining Wealth."
        description="AI-powered platforms built by domain experts who live and breathe energy and wealth management. Purpose-built software for industries that deserve better."
        buttons={[
          {
            to: "/products",
            label: "Explore Products",
            icon: <ArrowRight size={20} />,
            variant: "primary",
          },
          {
            to: "/contact",
            label: "Book a Demo",
            icon: <BarChart3 size={20} />,
            variant: "secondary",
          },
        ]}
        rightContent={<KeyboardHero />}
      />

      {/* Why Choose Sustains */}
      <FeatureGrid
        badge={{ icon: <Star size={16} />, text: "Why Choose Sustains.ai" }}
        title="Purpose-Built Software for"
        titleGradient="Real Industries"
        subtitle="We don't build one tool for everyone. We build dedicated platforms for specific industries — each one informed by real domain expertise, not just code."
        features={[
          {
            icon: <TrendingUp size={24} />,
            title: "Domain-First Approach",
            description:
              "Every product starts with deep understanding of the industry it serves — energy, wealth, travel, or CRM",
          },
          {
            icon: <Zap size={24} />,
            title: "AI That Actually Helps",
            description:
              "Not AI for the sake of it — practical intelligence that solves real workflows and saves real time",
          },
          {
            icon: <Users size={24} />,
            title: "Multi-Industry Expertise",
            description:
              "From grid studies to portfolio analytics, we bring cross-sector knowledge to every product we build",
          },
          {
            icon: <Target size={24} />,
            title: "Energy at Our Core",
            description:
              "Founded by energy enthusiasts, our DNA ensures every product carries the rigour of our founding domain",
          },
        ]}
      />

      {/* Enterprise Benefits */}
      <BenefitsGrid
        badge={{ icon: <Shield size={16} />, text: "Enterprise Ready" }}
        title="Built for Enterprise"
        titleGradient="Scale & Security"
        subtitle="Enterprise-grade infrastructure with the flexibility to scale from startup to global corporation."
        benefits={[
          {
            icon: <Shield size={24} />,
            title: "Enterprise Security",
            description: "Bank-level encryption and compliance standards",
          },
          {
            icon: <Lightbulb size={24} />,
            title: "Smart Insights",
            description:
              "AI-driven recommendations across every platform we build",
          },
          {
            icon: <Gauge size={24} />,
            title: "Performance Tracking",
            description:
              "Real-time monitoring of metrics and lifecycle analysis",
          },
          {
            icon: <Globe size={24} />,
            title: "Global Reach",
            description:
              "Multi-regional deployment with localized compliance",
          },
        ]}
        whyItems={[
          { icon: <RefreshCw size={18} />, title: "Sustainability-first design" },
          { icon: <Bot size={18} />, title: "AI-driven analytics" },
          {
            icon: <Zap size={18} />,
            title: "Energy & Finance expertise combined",
          },
          { icon: <Puzzle size={18} />, title: "Modular & scalable solutions" },
        ]}
      />

      {/* Clients */}
      <ClientStrip />

      {/* Testimonials */}
      <TestimonialGrid />

      {/* CTA */}
      <CTASection
        title="Let's Build Something"
        titleGradient="Together"
        description="Whether you need an energy platform, a wealth management API, or a dedicated tech partner — we'd love to talk."
        primaryButton={{
          to: "/contact",
          label: "Get In Touch",
          icon: <ArrowRight size={20} />,
        }}
        secondaryButton={{
          to: "/services",
          label: "Our Services",
        }}
      />
    </div>
  );
};

export default Home;
