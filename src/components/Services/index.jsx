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
        "Power flow, stability, fault current, and grid impact evaluation for renewables.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Electricity Forecasting",
      description:
        "AI-driven demand and generation forecasting using weather data and ML models.",
    },
    {
      icon: <Sun size={24} />,
      title: "Solar Resource Assessment",
      description:
        "Irradiance analysis, site suitability, yield estimation, and bankability reports.",
    },
    {
      icon: <Wind size={24} />,
      title: "Wind Energy Analysis",
      description:
        "Resource assessment, turbine selection, wake modeling, and production estimation.",
    },
    {
      icon: <BatteryCharging size={24} />,
      title: "Energy Audits & Efficiency",
      description:
        "Energy audits for commercial and industrial facilities with cost reduction strategies.",
    },
    {
      icon: <FileText size={24} />,
      title: "Regulatory & Compliance",
      description:
        "Market regulations, grid code compliance, and environmental clearances.",
    },
  ];

  const techServices = [
    {
      icon: <Cpu size={24} />,
      title: "AI Automations",
      description:
        "Chatbots, workflow automation, and intelligent business process automation.",
    },
    {
      icon: <Globe size={24} />,
      title: "WordPress Management",
      description:
        "Customization, performance optimization, security hardening, and maintenance.",
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Shopify Management",
      description:
        "Store setup, catalog management, payments, and conversion optimization.",
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
        "Every other vertical grew from this core",
    },
    {
      icon: <Award size={24} />,
      label: "Domain Expertise That Runs Deep",
      detail:
        "Certifications and hands-on experience across solar, wind, and grid operations",
    },
    {
      icon: <Heart size={24} />,
      label: "Built by Energy Enthusiasts",
      detail:
        "We don't just work in energy — we live it",
    },
    {
      icon: <GraduationCap size={24} />,
      label: "Research-Backed Approach",
      detail:
        "Grounded in published research and real-world execution",
    },
  ];

  return (
    <div className="servicepage-container">
      {/* Hero */}
      <Hero
        animated
        titleMain="What We Do"
        titleGradient="Two things. Really well."
        description="Energy consultancy and technology partnerships — rooted in deep domain expertise."
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
                  <strong>We started in energy</strong> — because that's what
                  we're passionate about. Deep certifications, hands-on
                  experience across solar, wind, and grid operations.
                </p>
                <p>
                  Every product since grew from this foundation. Energy remains our heartbeat.
                </p>
                <p className="servicepage-energy-story-highlight">
                  That's why companies trust us with their most complex energy challenges.
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
        subtitle="Your extended tech team — AI, websites, SEO, and everything digital."
        features={techServices}
      />

      {/* CTA */}
      <CTASection
        title="Let's Work"
        titleGradient="Together"
        description="Energy project or digital growth challenge — let's talk."
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
