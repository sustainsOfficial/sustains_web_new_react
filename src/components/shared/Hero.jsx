import React from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "./AnimationHelpers";
import "./Hero.css";

const Hero = ({
  badge,
  titleMain,
  titleGradient,
  description,
  buttons,
  children,
  rightContent,
  animated = false,
  className = "",
}) => {
  const Wrap = animated ? FadeIn : React.Fragment;
  const wrapProps = (delay) => (animated ? { delay } : {});

  const hasRight = !!rightContent;

  return (
    <section className={`shared-hero-section ${className}`}>
      <div className="shared-hero-wrapper">
        <div className={hasRight ? "shared-hero-grid" : ""}>
          <div className={`shared-hero-content ${hasRight ? "shared-hero-content-left" : ""}`}>
            {badge && (
              <Wrap {...wrapProps(0)}>
                <div className="shared-hero-badge">
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              </Wrap>
            )}

            <Wrap {...wrapProps(0.1)}>
              <h1 className="shared-hero-title">
                <span className="shared-hero-title-main">{titleMain}</span>
                <span className="shared-hero-title-gradient">
                  {titleGradient}
                </span>
              </h1>
            </Wrap>

            <Wrap {...wrapProps(0.2)}>
              <p className="shared-hero-description">{description}</p>
            </Wrap>

            {buttons && buttons.length > 0 && (
              <Wrap {...wrapProps(0.3)}>
                <div className="shared-hero-buttons">
                  {buttons.map((btn, i) => (
                    <Link
                      key={i}
                      to={btn.to}
                      className={`shared-hero-btn shared-hero-btn-${btn.variant || "primary"}`}
                    >
                      <span>
                        {btn.label}
                        {btn.icon}
                      </span>
                    </Link>
                  ))}
                </div>
              </Wrap>
            )}

            {children}
          </div>

          {hasRight && (
            <Wrap {...wrapProps(0.3)}>
              <div className="shared-hero-right">{rightContent}</div>
            </Wrap>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
