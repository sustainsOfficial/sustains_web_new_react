import React from "react";
import { Star } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";
import SectionHeader from "./SectionHeader";
import "./TestimonialGrid.css";

const defaultTestimonials = [
  {
    name: "Sooraj E",
    role: "Co-Founder and CTO",
    company: "Marketfeed",
    quote:
      "Working with Sustains for Market risk consultancy has been a transformative experience. Their expert insights and innovative solutions have significantly enhanced our risk management strategies.",
    avatar:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1756464565/Picture1_icrnld.jpg",
  },
  {
    name: "Bipin Kumar",
    role: "AVP Strategy & Finance",
    company: "Mantra",
    quote:
      "Partnering with Sustains.ai for AI and ML-driven solutions has been invaluable. Their expertise and innovative approach have greatly enhanced our decision-making and efficiency.",
    avatar:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1756464566/Picture2_nr9612.jpg",
  },
  {
    name: "Vivek Mohan",
    role: "Assistant Professor",
    company: "NIT Calicut",
    quote:
      "Collaborating with Sustains.ai on portfolio intelligence solutions has been highly rewarding. Their innovative approach and commitment to practical problem-solving bring real value to academic-industry partnerships.",
    avatar:
      "https://res.cloudinary.com/dffu1ungl/image/upload/v1756464565/Picture3_poymkw.jpg",
  },
];

const TestimonialGrid = ({ testimonials = defaultTestimonials, className = "" }) => {
  return (
    <section className={`shared-testimonials-section ${className}`}>
      <div className="shared-testimonials-wrapper">
        <FadeIn>
          <SectionHeader
            title="What People"
            titleGradient="Say About Us"
          />
        </FadeIn>

        <StaggerContainer className="shared-testimonials-grid" stagger={0.12}>
          {testimonials.map((t, index) => (
            <StaggerItem key={index}>
              <div className="shared-testimonial-card">
                <div className="shared-testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                </div>
                <blockquote>"{t.quote}"</blockquote>
                <div className="shared-testimonial-author">
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <h4>{t.name}</h4>
                    <p>{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialGrid;
