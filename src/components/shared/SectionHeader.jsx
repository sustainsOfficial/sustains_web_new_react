import React from "react";
import "./SectionHeader.css";

const SectionHeader = ({ title, titleGradient, subtitle, badge, className = "" }) => {
  return (
    <div className={`shared-section-header ${className}`}>
      {badge && (
        <div className="shared-section-badge">
          {badge.icon}
          <span>{badge.text}</span>
        </div>
      )}
      <h2 className="shared-section-title">
        {title}{" "}
        {titleGradient && (
          <span className="shared-title-gradient">{titleGradient}</span>
        )}
      </h2>
      {subtitle && <p className="shared-section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
