import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Globe,
  Search,
  ShoppingBag,
  Cpu,
  Activity,
  BarChart3,
  Sun,
  Wind,
  BatteryCharging,
  FileText,
  Handshake,
  Award,
  Heart,
  Flame,
  GraduationCap,
} from "lucide-react";

import Hero from "../shared/Hero";
import SectionHeader from "../shared/SectionHeader";
import CTASection from "../shared/CTASection";
import FeatureGrid from "../shared/FeatureGrid";
import { FadeIn, StaggerContainer, StaggerItem } from "../shared/AnimationHelpers";
import "./index.css";

const Services = () => {
  const energyServices = [
    {
      icon: <Activity size={24} />,
      title: "Grid Studies",
      description:
        "Power flow analysis, stability assessment, fault current analysis, and grid impact evaluation for renewable energy projects.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Electricity Forecasting",
      description:
        "AI-driven demand and generation forecasting using weather data, historical patterns, and machine learning models.",
    },
    {
      icon: <Sun size={24} />,
      title: "Solar Resource Assessment",
      description:
        "Solar irradiance analysis, site suitability studies, energy yield estimation, and bankability reports.",
    },
    {
      icon: <Wind size={24} />,
      title: "Wind Energy Analysis",
      description:
        "Wind resource assessment, turbine selection optimization, wake effect modeling, and energy production estimation.",
    },
    {
      icon: <BatteryCharging size={24} />,
      title: "Energy Audits & Efficiency",
      description:
        "Comprehensive energy audits for commercial and industrial facilities with cost reduction strategies.",
    },
    {
      icon: <FileText size={24} />,
      title: "Regulatory & Compliance",
      description:
        "Guidance on energy market regulations, grid code compliance, environmental clearances, and policy frameworks.",
    },
  ];

  const techServices = [
    {
      icon: <Cpu size={24} />,
      title: "AI Automations",
      description:
        "Custom chatbots, workflow automation, content generation, and intelligent business process automation.",
    },
    {
      icon: <Globe size={24} />,
      title: "WordPress Management",
      description:
        "Theme customization, plugin management, performance optimization, security hardening, and maintenance.",
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Shopify Management",
      description:
        "Store setup, theme development, product catalog management, payment integration, and conversion optimization.",
    },
    {
      icon: <Search size={24} />,
      title: "SEO & Digital Marketing",
      description:
        "Keyword strategy, on-page and off-page SEO, and analytics-driven digital marketing.",
    },
  ];

  const energyCredentials = [
    {
      icon: <Flame size={24} />,
      label: "Energy-First Since Day One",
      detail:
        "Sustains.ai was born from the energy sector — every other vertical grew from this core",
    },
    {
      icon: <Award size={24} />,
      label: "Domain Expertise That Runs Deep",
      detail:
        "Our team carries certifications and hands-on experience across solar, wind, grid operations, and energy markets",
    },
    {
      icon: <Heart size={24} />,
      label: "Built by Energy Enthusiasts",
      detail:
        "We don't just work in energy — we're passionate about it. It's what gets us out of bed every morning",
    },
    {
      icon: <GraduationCap size={24} />,
      label: "Research-Backed Approach",
      detail:
        "Our methodologies are grounded in published research, academic collaboration, and real-world project execution",
    },
  ];

  return (
    <div className="servicepage-container">
      {/* Hero */}
      <Hero
        animated
        titleMain="What We Do"
        titleGradient="Two things. Really well."
        description="Energy consultancy rooted in deep domain expertise, and technology partnerships that help businesses grow digitally."
      />

      {/* ═══ SECTOR 1: ENERGY ORIGIN STORY + SERVICES ═══ */}
      <section className="servicepage-energy-story-section">
        <div className="servicepage-energy-story-wrapper">
          <div className="servicepage-energy-story-bg">
            <div className="servicepage-energy-story-bg-circle-1"></div>
            <div className="servicepage-energy-story-bg-circle-2"></div>
          </div>

          <div className="servicepage-energy-story-content">
            <FadeIn direction="right" className="servicepage-energy-story-left">
              <div className="servicepage-energy-story-badge">
                <Zap size={16} />
                <span>Our Roots</span>
              </div>

              <h2 className="servicepage-energy-story-title">
                Energy isn't just what we do.
                <br />
                <span className="servicepage-title-gradient">
                  It's where we come from.
                </span>
              </h2>

              <div className="servicepage-energy-story-narrative">
                <p>
                  When Sustains.ai was founded, it wasn't as a generic tech
                  company looking for a market.{" "}
                  <strong>We started in energy</strong> — because that's what
                  we're passionate about. Our team are energy enthusiasts at
                  heart, with deep certifications and hands-on experience across
                  solar, wind, grid operations, and energy markets.
                </p>
                <p>
                  Every product we've built since — from wealth management to
                  CRM — grew outward from this foundation. But energy remains
                  our heartbeat. When you work with us on an energy project,
                  you're working with people who genuinely live and breathe
                  energy.
                </p>
                <p className="servicepage-energy-story-highlight">
                  That's why companies trust us with their most complex energy
                  challenges.
                </p>
              </div>
            </FadeIn>

            <div className="servicepage-energy-story-right">
              <StaggerContainer
                className="servicepage-energy-credentials"
                stagger={0.15}
              >
                {energyCredentials.map((cred, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="servicepage-energy-credential-card"
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    >
                      <div className="servicepage-energy-credential-icon">
                        {cred.icon}
                      </div>
                      <div className="servicepage-energy-credential-text">
                        <h4>{cred.label}</h4>
                        <p>{cred.detail}</p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Energy services grid */}
      <section className="servicepage-energy-section">
        <div className="servicepage-energy-wrapper">
          <FadeIn>
            <SectionHeader title="Energy" titleGradient="Consultancy Services" />
          </FadeIn>

          <StaggerContainer className="servicepage-energy-grid" stagger={0.1}>
            {energyServices.map((project) => (
              <StaggerItem key={project.id || project.title}>
                <motion.div
                  className="servicepage-energy-card"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="servicepage-energy-card-icon">
                    {project.icon}
                  </div>
                  <div className="servicepage-energy-card-content">
                    <h3 className="servicepage-energy-card-title">
                      {project.title}
                    </h3>
                    <p className="servicepage-energy-card-description">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ SECTOR 2: TECH PARTNERSHIPS ═══ */}
      <FeatureGrid
        badge={{ icon: <Handshake size={16} />, text: "Tech Partnerships" }}
        title="Your Dedicated"
        titleGradient="Tech Partner"
        subtitle="We work as your extended technology team — handling AI automations, website management, SEO, and everything digital so you can focus on your business."
        features={techServices}
      />

      {/* CTA */}
      <CTASection
        title="Let's Work"
        titleGradient="Together"
        description="Whether it's an energy project or a digital growth challenge — we'd love to hear from you."
        primaryButton={{
          to: "/contact",
          label: "Get In Touch",
          icon: <ArrowRight size={20} />,
        }}
        secondaryButton={{
          to: "/products",
          label: "Explore Products",
        }}
      />
    </div>
  );
};

export default Services;
