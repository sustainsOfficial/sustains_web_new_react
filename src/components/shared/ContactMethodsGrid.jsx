import React from "react";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";
import SectionHeader from "./SectionHeader";
import "./ContactMethodsGrid.css";

const ContactMethodsGrid = ({
  title = "Reach Out",
  titleGradient = "Your Way",
  subtitle = "Pick the communication method that works best for you.",
  methods,
  onMethodClick,
  className = "",
}) => {
  return (
    <section className={`shared-contact-methods-section ${className}`}>
      <div className="shared-contact-methods-wrapper">
        <FadeIn>
          <SectionHeader
            title={title}
            titleGradient={titleGradient}
            subtitle={subtitle}
          />
        </FadeIn>

        <StaggerContainer
          className="shared-contact-methods-grid"
          style={{ display: "grid" }}
          stagger={0.1}
        >
          {methods.map((method, index) => (
            <StaggerItem key={index}>
              <div
                className={`shared-contact-method-card shared-contact-method-${index + 1}`}
                onClick={() => onMethodClick && onMethodClick(method.method)}
              >
                <div className={`shared-contact-method-icon shared-contact-method-icon-${index + 1}`}>
                  {method.icon}
                </div>
                <h3 className="shared-contact-method-title">{method.title}</h3>
                <p className="shared-contact-method-subtitle">{method.subtitle}</p>
                <div className="shared-contact-method-details">
                  {method.details.map((detail, idx) => (
                    <span key={idx} className="shared-contact-method-detail">
                      {detail}
                    </span>
                  ))}
                </div>
                <div className="shared-contact-method-action">
                  {method.action}
                  <ArrowRight size={14} />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ContactMethodsGrid;
