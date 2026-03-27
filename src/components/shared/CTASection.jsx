import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "./AnimationHelpers";
import "./CTASection.css";

const CTASection = ({
  title,
  titleGradient,
  description,
  primaryButton,
  secondaryButton,
  animated = true,
  className = "",
}) => {
  const Wrap = animated ? FadeIn : React.Fragment;

  return (
    <section className={`shared-cta-section ${className}`}>
      <div className="shared-cta-bg">
        <div className="shared-cta-bg-circle-1"></div>
        <div className="shared-cta-bg-circle-2"></div>
      </div>

      <Wrap>
        <div className="shared-cta-wrapper">
          <h2 className="shared-cta-title">
            {title}
            {titleGradient && (
              <span className="shared-cta-title-gradient">
                {" "}{titleGradient}
              </span>
            )}
          </h2>
          <p className="shared-cta-description">{description}</p>

          <div className="shared-cta-buttons">
            {primaryButton && (
              <Link to={primaryButton.to} className="shared-cta-btn-primary">
                {primaryButton.label}
                {primaryButton.icon}
              </Link>
            )}
            {secondaryButton && (
              <Link to={secondaryButton.to} className="shared-cta-btn-secondary">
                {secondaryButton.label}
              </Link>
            )}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

export default CTASection;
