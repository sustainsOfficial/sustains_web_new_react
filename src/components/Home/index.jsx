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
      {/* Hero — centered with keyboard */}
      <Hero
        animated
        badge={{ icon: <Sparkles size={16} />, text: "AI-Powered Platforms" }}
        titleMain="Sustaining Energy."
        titleGradient="Sustaining Wealth."
        description="Purpose-built software by domain experts — for energy, wealth, CRM, and travel."
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
      >
        <div style={{ marginTop: "2rem" }}>
          <KeyboardHero />
        </div>
      </Hero>

      {/* Why Choose Sustains */}
      <FeatureGrid
        badge={{ icon: <Star size={16} />, text: "Why Choose Sustains.ai" }}
        title="Purpose-Built Software for"
        titleGradient="Real Industries"
        subtitle="Dedicated platforms for specific industries — built by people who understand the domain."
        features={[
          {
            icon: <TrendingUp size={24} />,
            title: "Domain-First",
            description:
              "We understand the industry before writing code",
          },
          {
            icon: <Zap size={24} />,
            title: "Practical AI",
            description:
              "Intelligence that solves real workflows, not buzzwords",
          },
          {
            icon: <Users size={24} />,
            title: "Cross-Sector",
            description:
              "Grid studies to portfolio analytics — knowledge that compounds",
          },
          {
            icon: <Target size={24} />,
            title: "Energy DNA",
            description:
              "Every product carries the rigour of our founding domain",
          },
        ]}
      />

      {/* Enterprise Benefits */}
      <BenefitsGrid
        badge={{ icon: <Shield size={16} />, text: "Enterprise Ready" }}
        title="Built for Enterprise"
        titleGradient="Scale & Security"
        subtitle="Enterprise-grade infrastructure that scales from startup to global."
        benefits={[
          {
            icon: <Shield size={24} />,
            title: "Enterprise Security",
            description: "Bank-level encryption and compliance",
          },
          {
            icon: <Lightbulb size={24} />,
            title: "Smart Insights",
            description: "AI-driven recommendations across every platform",
          },
          {
            icon: <Gauge size={24} />,
            title: "Real-Time Monitoring",
            description: "Live metrics and lifecycle analysis",
          },
          {
            icon: <Globe size={24} />,
            title: "Global Reach",
            description: "Multi-region deployment, localized compliance",
          },
        ]}
        whyItems={[
          { icon: <RefreshCw size={18} />, title: "Sustainability-first" },
          { icon: <Bot size={18} />, title: "AI-driven analytics" },
          { icon: <Zap size={18} />, title: "Energy + Finance expertise" },
          { icon: <Puzzle size={18} />, title: "Modular & scalable" },
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
        description="Energy platform, wealth API, or tech partner — let's talk."
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
