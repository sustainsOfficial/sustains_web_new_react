import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";
import "./BenefitsGrid.css";

const BenefitsGrid = ({
  badge,
  title,
  titleGradient,
  subtitle,
  benefits,
  whyItems,
  ctaLink = "/services",
  ctaLabel = "Learn More About Our Services",
  className = "",
}) => {
  return (
    <section className={`shared-benefits-section ${className}`}>
      <div className="shared-benefits-wrapper">
        <FadeIn>
          <SectionHeader
            badge={badge}
            title={title}
            titleGradient={titleGradient}
            subtitle={subtitle}
          />
        </FadeIn>

        <div className="shared-benefits-main-grid">
          {/* Left: benefit cards + CTA */}
          <div className="shared-benefits-left">
            <StaggerContainer className="shared-benefits-cards-grid" stagger={0.1}>
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <div className="shared-benefit-card">
                    <div className="shared-benefit-card-header">
                      <div className="shared-benefit-icon-wrapper">
                        {benefit.icon}
                      </div>
                      <div className="shared-benefit-content">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="shared-benefits-cta">
                <Link to={ctaLink} className="shared-benefits-button">
                  {ctaLabel}
                  <ArrowRight size={20} />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right: Why Sustains sidebar */}
          {whyItems && whyItems.length > 0 && (
            <FadeIn direction="left" delay={0.2}>
              <div className="shared-why-container">
                <h3 className="shared-why-title">Why Sustains?</h3>
                <div className="shared-why-list">
                  {whyItems.map((item, index) => (
                    <div key={index} className="shared-why-item">
                      <div className={`shared-why-icon shared-why-icon-${index + 1}`}>
                        {item.icon}
                      </div>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
