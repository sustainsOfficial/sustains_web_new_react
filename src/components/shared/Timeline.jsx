import React from "react";
import SectionHeader from "./SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";
import "./Timeline.css";

const Timeline = ({
  badge,
  title,
  titleGradient,
  subtitle,
  milestones,
  className = "",
}) => {
  return (
    <section className={`shared-timeline-section ${className}`}>
      <div className="shared-timeline-wrapper">
        <FadeIn>
          <SectionHeader
            badge={badge}
            title={title}
            titleGradient={titleGradient}
            subtitle={subtitle}
          />
        </FadeIn>

        <div className="shared-timeline-track">
          <div className="shared-timeline-line" />

          <StaggerContainer className="shared-timeline-grid" stagger={0.12}>
            {milestones.map((milestone, index) => (
              <StaggerItem key={index}>
                <div className="shared-timeline-card">
                  <div className="shared-timeline-dot" />
                  <div className={`shared-timeline-icon shared-timeline-icon-${(index % 4) + 1}`}>
                    {milestone.icon}
                  </div>
                  <div className="shared-timeline-year">
                    <span>{milestone.year}</span>
                  </div>
                  <h3 className="shared-timeline-card-title">
                    {milestone.title}
                  </h3>
                  <p className="shared-timeline-card-description">
                    {milestone.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
