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
import "./index.css";

const Home = () => {

  return (
    <div className="homepage-container">
      {/* Hero */}
      <Hero
        animated
        className="has-bg-image home-hero-bg"
        badge={{ icon: <Sparkles size={16} />, text: "Portfolio Intelligence" }}
        titleMain="Portfolio Intelligence"
        titleGradient="For Every Sector"
        description="From wealth and energy to CRM and travel — we bring portfolio-first thinking to every sector."
        buttons={[
          {
            to: "/products",
            label: "Explore Products",
            icon: <ArrowRight size={20} />,
            variant: "primary",
          },
          {
            to: "/contact",
            label: "Request Demo",
            icon: <BarChart3 size={20} />,
            variant: "secondary",
          },
        ]}
      />

      {/* Why Choose Sustains */}
      <FeatureGrid
        badge={{ icon: <Star size={16} />, text: "Why Choose Sustains" }}
        title="Portfolio-First Thinking for"
        titleGradient="Real Industries"
        subtitle="We think in portfolios — assets, risks, and returns — across every sector we serve."
        features={[
          {
            icon: <TrendingUp size={24} />,
            title: "Portfolio-First",
            description:
              "We think in portfolios — assets, risks, and returns",
          },
          {
            icon: <Zap size={24} />,
            title: "Domain Expertise",
            description:
              "Built by practitioners from energy, finance, and consulting",
          },
          {
            icon: <Users size={24} />,
            title: "Cross-Sector",
            description:
              "Insights that compound across wealth, energy, and beyond",
          },
          {
            icon: <Target size={24} />,
            title: "Quantitative DNA",
            description:
              "Grounded in data, risk models, and analytics",
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
          { icon: <RefreshCw size={18} />, title: "Portfolio-first approach" },
          { icon: <Bot size={18} />, title: "AI-driven analytics" },
          { icon: <Zap size={18} />, title: "Wealth + Energy expertise" },
          { icon: <Puzzle size={18} />, title: "Modular & scalable" },
        ]}
      />

      {/* Clients */}
      <ClientStrip />

      {/* Testimonials */}
      <TestimonialGrid />

      {/* CTA */}
      <CTASection
        title="Let's Manage Your Portfolio"
        titleGradient="Smarter"
        description="Wealth, energy, or client portfolio — let's talk."
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
