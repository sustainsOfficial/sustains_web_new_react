import React from "react";
import SectionHeader from "./SectionHeader";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";
import "./FeatureGrid.css";

const FeatureGrid = ({ badge, title, titleGradient, subtitle, features, className = "" }) => {
  return (
    <section className={`shared-featuregrid-section ${className}`}>
      <div className="shared-featuregrid-wrapper">
        <FadeIn>
          <SectionHeader
            badge={badge}
            title={title}
            titleGradient={titleGradient}
            subtitle={subtitle}
          />
        </FadeIn>

        <StaggerContainer className="shared-featuregrid-grid" stagger={0.1}>
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="shared-featuregrid-card">
                <div className="shared-featuregrid-card-overlay"></div>
                <div className={`shared-featuregrid-icon shared-featuregrid-icon-${index + 1}`}>
                  {feature.icon}
                </div>
                <h3 className="shared-featuregrid-card-title">{feature.title}</h3>
                <p className="shared-featuregrid-card-description">
                  {feature.description}
                </p>
                <div className="shared-featuregrid-card-bar"></div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeatureGrid;
