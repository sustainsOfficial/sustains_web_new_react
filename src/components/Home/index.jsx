import React from "react";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  BarChart3,
  Wallet,
  BatteryCharging,
  Plane,
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
  Wrench,
} from "lucide-react";

import Hero from "../shared/Hero";
import CTASection from "../shared/CTASection";
import ClientStrip from "../shared/ClientStrip";
import TestimonialGrid from "../shared/TestimonialGrid";
import FeatureGrid from "../shared/FeatureGrid";
import BenefitsGrid from "../shared/BenefitsGrid";
import RotatingCard from "../shared/RotatingCard";
import "./index.css";

const Home = () => {
  const rotatingItems = [
    {
      name: "Nidhi",
      badge: "Wealth Management",
      icon: <Wallet size={14} />,
      tagline: "API Platform for Wealth Management",
      snippet:
        "AI-powered portfolio analytics, risk profiling, and rebalancing — built for financial advisors and fintech platforms.",
      url: "https://www.sustains.in",
      linkText: "Visit Nidhi",
      color: "primary",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      name: "Nudge",
      badge: "Energy Management",
      icon: <BatteryCharging size={14} />,
      tagline: "End-to-End Energy BD Platform",
      snippet:
        "An operating system built for MW, stages, and bankability. Smart pipeline management with solar analysis.",
      url: "https://www.ishalab.io",
      linkText: "Visit Nudge",
      color: "secondary",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    },
    {
      name: "Sailbot",
      badge: "CRM Platform",
      icon: <Users size={14} />,
      tagline: "CRM for Focused Teams",
      snippet:
        "A calm, distraction-free workspace with AI-powered insights, pipeline management, and revenue tracking.",
      url: "https://www.sailbot.ai",
      linkText: "Visit Sailbot",
      color: "accent",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      name: "Azyro",
      badge: "Travel Tech",
      icon: <Plane size={14} />,
      tagline: "Tour Management, Made Simple",
      snippet:
        "Purpose-built for tour operators — bookings, itineraries, customers, and finances in one platform.",
      url: "https://www.azyro.co",
      linkText: "Visit Azyro",
      color: "purple",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    },
    {
      name: "Energy Consulting",
      badge: "Services",
      icon: <Zap size={14} />,
      tagline: "Grid Studies, Forecasting & More",
      snippet:
        "Deep domain expertise in solar, wind, grid operations, and energy markets — backed by research and real-world execution.",
      url: "/services",
      linkText: "Our Services",
      color: "energy",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    },
    {
      name: "Tech Partnerships",
      badge: "Services",
      icon: <Wrench size={14} />,
      tagline: "Your Dedicated Tech Partner",
      snippet:
        "SEO, WordPress, Shopify, AI automations — we work as your extended technology team so you can focus on growth.",
      url: "/services",
      linkText: "Our Services",
      color: "tech",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="homepage-container">
      {/* Hero with rotating card */}
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
        rightContent={<RotatingCard items={rotatingItems} interval={5000} />}
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
