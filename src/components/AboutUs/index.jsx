import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  Sparkles,
  Globe,
  Shield,
  Heart,
  Lightbulb,
  Zap,
  Code,
  Calendar,
  Building,
  Eye,
  Compass,
} from "lucide-react";
import Hero from "../shared/Hero";
import SectionHeader from "../shared/SectionHeader";
import CTASection from "../shared/CTASection";
import Timeline from "../shared/Timeline";
import FeatureGrid from "../shared/FeatureGrid";
import { FadeIn, StaggerContainer, StaggerItem } from "../shared/AnimationHelpers";
import "./index.css";

const teamMembers = [
  { name: "Arjun", image: "https://res.cloudinary.com/dffu1ungl/image/upload/v1756464566/Arjun_ofkmcg.jpg" },
  { name: "Rohith", image: "/Rohith.JPG" },
  { name: "Sreenidhi", image: "/Sreenidhi.JPG" },
  { name: "Kiran", image: "/Kiran.PNG" },
  { name: "Reshma", image: "/Reshma.JPG" },
];

const TeamSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % teamMembers.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const member = teamMembers[current];

  return (
    <div className="aboutpage-team-clean-grid">
      {/* Left — Rotating Team Photo */}
      <div className="aboutpage-founder-clean-section">
        <div className="aboutpage-founder-image-container">
          <img
            src={member.image}
            alt={member.name}
            className={`aboutpage-founder-image aboutpage-founder-image-bw ${fading ? "aboutpage-founder-image-fade" : ""}`}
          />
        </div>
        <div className="aboutpage-founder-info">
          <h3 className={`aboutpage-founder-name ${fading ? "aboutpage-founder-name-fade" : ""}`}>
            {member.name}
          </h3>
          <p className="aboutpage-founder-role">Our Squad</p>
        </div>
        <div className="aboutpage-team-dots">
          {teamMembers.map((_, i) => (
            <button
              key={i}
              className={`aboutpage-team-dot ${i === current ? "aboutpage-team-dot-active" : ""}`}
              onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
            />
          ))}
        </div>
      </div>

      {/* Right — Story */}
      <div className="aboutpage-story-clean-section">
        <div className="aboutpage-story-content">
          <p className="aboutpage-story-paragraph">
            Founded <strong>January 2025</strong>. Started in{" "}
            <strong>energy</strong>, expanded into{" "}
            <strong>wealth management, CRM, and travel tech</strong>{" "}
            as we proved the model.
          </p>
          <p className="aboutpage-story-paragraph">
            Today — <strong>10+ professionals</strong> from
            banks, energy developers, and global consultancies.
            Driving <strong>products, consulting, and tech partnerships</strong>{" "}
            across industries.
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const values = [
    {
      icon: <Brain size={32} />,
      title: "Domain-First Thinking",
      description:
        "Understand the industry first, then write the code",
    },
    {
      icon: <Shield size={32} />,
      title: "Trust & Transparency",
      description:
        "Secure, reliable solutions for critical operations",
    },
    {
      icon: <Globe size={32} />,
      title: "Real-World Impact",
      description:
        "Success = problems solved, not features shipped",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description:
        "Partners, academics, and industry teams — building together",
    },
  ];

  const milestones = [
    {
      year: "Late 2024",
      title: "The Idea",
      description:
        "Energy analysts and technologists explore AI for domain-specific problems",
      icon: <Lightbulb size={24} />,
    },
    {
      year: "Jan 2025",
      title: "Sustains.ai is Born",
      description:
        "Team comes together — energy consulting begins as first offering",
      icon: <Zap size={24} />,
    },
    {
      year: "Mid 2025",
      title: "Nidhi Launches",
      description:
        "AI-powered wealth management APIs go live",
      icon: <TrendingUp size={24} />,
    },
    {
      year: "Mid 2025",
      title: "Nudge Launches",
      description:
        "Energy BD platform enters pilot — built for MW, stages, and bankability",
      icon: <Zap size={24} />,
    },
    {
      year: "2025",
      title: "Sailbot & Azyro",
      description:
        "CRM and travel tech ship — multi-industry model proven",
      icon: <Code size={24} />,
    },
    {
      year: "2025",
      title: "Tech Partnerships",
      description:
        "QuRapid, Loomet Fashions, VJ Solutions, and HippieGoTrails come on board as tech partners",
      icon: <Users size={24} />,
    },
    {
      year: "2026",
      title: "What's Next",
      description:
        "Deeper consulting, new verticals, global scale",
      icon: <Building size={24} />,
    },
  ];

  const stats = [
    { number: "2025", label: "Founded" },
    { number: "4", label: "Products Live" },
    { number: "10+", label: "Team Members" },
  ];

  return (
    <div className="aboutpage-container">
      {/* Hero */}
      <Hero
        badge={{ icon: <Sparkles size={16} />, text: "About Sustains.ai" }}
        titleMain="Built by People Who"
        titleGradient="Understand Your Industry"
        description="Energy enthusiasts, finance experts, and technologists — building software industries actually deserve."
      >
        <div className="aboutpage-hero-stats">
          {stats.map((stat, index) => (
            <div key={index} className="aboutpage-hero-stat">
              <div
                className={`aboutpage-hero-stat-number aboutpage-hero-stat-${
                  index % 3 === 0
                    ? "primary"
                    : index % 3 === 1
                    ? "secondary"
                    : "accent"
                }`}
              >
                {stat.number}
              </div>
              <div className="aboutpage-hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </Hero>

      {/* Mission, Vision, Story */}
      <section className="aboutpage-content-section">
        <div className="aboutpage-content-wrapper">
          <FadeIn>
            <div className="aboutpage-content-header">
              <span className="aboutpage-content-badge">Our Foundation</span>
              <h2 className="aboutpage-content-title">
                Why We Exist &{" "}
                <span className="aboutpage-content-title-gradient">
                  Where We're Going
                </span>
              </h2>
            </div>
          </FadeIn>

          {/* Mission and Vision Row */}
          <div className="aboutpage-mission-vision-row">
            <FadeIn direction="right">
              <div className="aboutpage-mission-card">
                <div className="aboutpage-mission-header">
                  <h3 className="aboutpage-mission-title">Our Mission</h3>
                </div>
                <div className="aboutpage-mission-content">
                  <p className="aboutpage-mission-statement">
                    Build AI-powered platforms for industries underserved by generic software.
                  </p>
                  <p className="aboutpage-mission-description">
                    Every industry deserves software built for how it actually works — not adapted from something else.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="aboutpage-vision-card">
                <div className="aboutpage-vision-content">
                  <h3 className="aboutpage-vision-title">Our Vision</h3>
                  <p className="aboutpage-vision-statement">
                    The company industries turn to when they need software that truly fits.
                  </p>
                  <p className="aboutpage-vision-description">
                    Intelligent tools with enterprise-grade care — designed for how real practitioners work.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Story Section */}
          <FadeIn>
            <div className="aboutpage-story-section">
              <div className="aboutpage-story-container">
                <div className="aboutpage-story-header">
                  <h3 className="aboutpage-story-title">Our Story</h3>
                </div>

                <div className="aboutpage-story-content">
                  <p className="aboutpage-story-text">
                    Before dashboards and data, there were late-night discussions — energy analysts, coders, and strategists driven by pure curiosity.
                  </p>

                  <div className="aboutpage-story-quote-section">
                    <blockquote className="aboutpage-story-quote">
                      "What if every industry had software built by people who
                      actually understand it?"
                    </blockquote>
                    <p className="aboutpage-story-quote-attribution">
                      That spark became Sustains.ai.
                    </p>
                  </div>

                  <div className="aboutpage-story-journey">
                    <div className="aboutpage-story-journey-item">
                      <div className="aboutpage-story-journey-content">
                        <h4 className="aboutpage-story-journey-title">
                          The Beginning
                        </h4>
                        <p className="aboutpage-story-journey-text">
                          January 2025 — energy enthusiasts and technologists came together to build what they couldn't find. Energy was the starting point. Everything else grew from there.
                        </p>
                      </div>
                    </div>

                    <div className="aboutpage-story-journey-item">
                      <div className="aboutpage-story-journey-content">
                        <h4 className="aboutpage-story-journey-title">
                          Where We Are Today
                        </h4>
                        <p className="aboutpage-story-journey-text">
                          10+ professionals — VP-level leaders from banks, energy developers, and consultancies. Four products shipped, multiple tech partnerships active.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <Timeline
        badge={{ icon: <Calendar size={16} />, text: "Our Journey" }}
        title="From Curiosity to"
        titleGradient="Products"
        subtitle="The milestones that shaped our company"
        milestones={milestones}
      />

      {/* Values */}
      <FeatureGrid
        badge={{ icon: <Heart size={16} />, text: "Our Values" }}
        title="What Drives"
        titleGradient="Everything We Build"
        features={values}
      />

      {/* Team */}
      <section className="aboutpage-team-section">
        <div className="aboutpage-team-wrapper">
          <FadeIn>
            <div className="aboutpage-team-header">
              <div className="aboutpage-team-badge">
                <Users className="aboutpage-team-badge-icon" size={16} />
                <span className="aboutpage-team-badge-text">Our Team</span>
              </div>
              <h2 className="aboutpage-team-title">
                The People Behind{" "}
                <span className="aboutpage-team-title-gradient">
                  Sustains.ai
                </span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn>
            <TeamSlideshow />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to Work With Us?"
        description="Product, tech partner, or energy consulting — let's talk."
        primaryButton={{
          to: "/products",
          label: "Explore Our Products",
          icon: <ArrowRight size={20} />,
        }}
        secondaryButton={{
          to: "/contact",
          label: "Get In Touch",
        }}
      />
    </div>
  );
};

export default About;
