import React from "react";
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

const About = () => {
  const values = [
    {
      icon: <Brain size={32} />,
      title: "Domain-First Thinking",
      description:
        "We understand the industry before we write a single line of code — that's why our products actually work",
    },
    {
      icon: <Shield size={32} />,
      title: "Trust & Transparency",
      description:
        "Building secure, reliable solutions our clients can depend on for their most critical operations",
    },
    {
      icon: <Globe size={32} />,
      title: "Real-World Impact",
      description:
        "We measure success by the problems we solve, not the features we ship",
    },
    {
      icon: <Users size={32} />,
      title: "Collaboration",
      description:
        "Working alongside partners, academics, and industry teams to build solutions that truly fit",
    },
  ];

  const milestones = [
    {
      year: "Late 2024",
      title: "The Idea",
      description:
        "Energy analysts and technologists start exploring how AI can solve domain-specific problems across industries",
      icon: <Lightbulb size={24} />,
    },
    {
      year: "Jan 2025",
      title: "Sustains.ai is Born",
      description:
        "The team officially comes together — energy consulting begins as the first service offering",
      icon: <Zap size={24} />,
    },
    {
      year: "Mid 2025",
      title: "Nidhi Launches",
      description:
        "Our first product goes live — AI-powered wealth management APIs for financial advisors and fintech platforms",
      icon: <TrendingUp size={24} />,
    },
    {
      year: "Mid 2025",
      title: "Nudge Launches",
      description:
        "Energy BD platform enters pilot with energy teams — built for MW, stages, and bankability",
      icon: <Zap size={24} />,
    },
    {
      year: "2025",
      title: "Sailbot & Azyro",
      description:
        "CRM and travel tech platforms ship, proving the multi-industry model works",
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
        "Deepening energy consulting, expanding into new verticals, and scaling our product suite globally",
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
        description="We're a team of energy enthusiasts, finance experts, and technologists building purpose-built software for industries that deserve better than generic tools."
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
                    To build purpose-built, AI-powered platforms for industries
                    that have been underserved by generic software.
                  </p>
                  <p className="aboutpage-mission-description">
                    We believe every industry — from energy to wealth management
                    to travel — deserves software built specifically for how it
                    works. Not adapted from something else. Built from scratch,
                    by people who understand the domain.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="aboutpage-vision-card">
                <div className="aboutpage-vision-content">
                  <h3 className="aboutpage-vision-title">Our Vision</h3>
                  <p className="aboutpage-vision-statement">
                    To become the company industries turn to when they need
                    software that truly fits.
                  </p>
                  <p className="aboutpage-vision-description">
                    We see a future where every specialised industry has access
                    to intelligent, AI-powered tools built with the same care
                    and domain expertise as enterprise products — but designed
                    for how real practitioners actually work.
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
                    Before dashboards and data, there were discussions.
                    Passionate energy analysts, portfolio strategists, coders,
                    and venture thinkers gathering after work — not for
                    networking, but for pure intellectual curiosity.
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
                          In January 2025, a team of energy enthusiasts and
                          technologists came together to build what they
                          couldn't find — intelligent, domain-specific software.
                          Energy was the starting point because that's where our
                          deepest expertise lived. Everything else grew from
                          there.
                        </p>
                      </div>
                    </div>

                    <div className="aboutpage-story-journey-item">
                      <div className="aboutpage-story-journey-content">
                        <h4 className="aboutpage-story-journey-title">
                          Where We Are Today
                        </h4>
                        <p className="aboutpage-story-journey-text">
                          Today we're a growing team of 10+ professionals —
                          including VP-level leaders from major banks, asset
                          management firms, energy project developers, and
                          global consultancies. We've shipped four products,
                          serve as tech partners to multiple companies, and
                          continue to deepen our energy consulting practice.
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
            <div className="aboutpage-team-clean-grid">
              {/* Left — Founder Photo */}
              <div className="aboutpage-founder-clean-section">
                <div className="aboutpage-founder-image-container">
                  <img
                    src="https://res.cloudinary.com/dffu1ungl/image/upload/v1756464566/Arjun_ofkmcg.jpg"
                    alt="Founding team"
                    className="aboutpage-founder-image"
                  />
                </div>
                <div className="aboutpage-founder-info">
                  <h3 className="aboutpage-founder-name">Our Founding Team</h3>
                  <p className="aboutpage-founder-role">
                    Energy Enthusiasts & Technologists
                  </p>
                </div>
              </div>

              {/* Right — Story */}
              <div className="aboutpage-story-clean-section">
                <div className="aboutpage-story-content">
                  <p className="aboutpage-story-paragraph">
                    <strong>Sustains.ai</strong> was founded in{" "}
                    <strong>January 2025</strong> by a team that believed
                    analytics wasn't just about numbers — it was about building
                    tools that truly understand the industries they serve. We
                    started in <strong>energy</strong> because that's where our
                    deepest domain expertise lived, and expanded into{" "}
                    <strong>
                      wealth management, CRM, and travel tech
                    </strong>{" "}
                    as we proved the model.
                  </p>

                  <p className="aboutpage-story-paragraph">
                    Today, we're a{" "}
                    <strong>growing team of 10+ professionals</strong> —
                    including VP-level leaders from major banks, asset management
                    firms, energy project developers, and global consultancies.
                    Together, we're driving{" "}
                    <strong>
                      product development, energy consulting, tech partnerships,
                      and client delivery
                    </strong>{" "}
                    across multiple industries.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to Work With Us?"
        description="Whether you're looking for a product, a tech partner, or energy consulting — let's talk."
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
