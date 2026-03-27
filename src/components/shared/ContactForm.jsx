import React, { useState } from "react";
import {
  Send,
  Check,
  CheckCircle,
  Shield,
  Star,
  Globe,
} from "lucide-react";
import { FadeIn } from "./AnimationHelpers";
import "./ContactForm.css";

const defaultInfoItems = [
  { icon: <CheckCircle size={18} />, text: "Response within 24 hours" },
  { icon: <Shield size={18} />, text: "Enterprise-grade security" },
  { icon: <Star size={18} />, text: "Free consultation included" },
  { icon: <Globe size={18} />, text: "Global support" },
];

const defaultOptions = [
  { value: "nidhi", label: "Nidhi — Wealth Management APIs" },
  { value: "nudge", label: "Nudge — Energy BD Platform" },
  { value: "sailbot", label: "Sailbot — CRM" },
  { value: "azyro", label: "Azyro — Tour Management" },
  { value: "energy-consulting", label: "Energy Consulting" },
  { value: "tech-partnership", label: "Tech Partnership" },
  { value: "other", label: "Something else" },
];

const ContactForm = ({
  title = "Send Us a Message",
  subtitle = "Fill out the form and our team will get back to you within 24 hours.",
  infoItems = defaultInfoItems,
  serviceOptions = defaultOptions,
  accessKey = "27bc9179-f941-446d-8260-5b7b736744da",
  className = "",
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    setSubmitMessage("");

    try {
      const fd = new FormData(e.target);
      fd.append("access_key", accessKey);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setSubmitMessage("We received your response!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          service: "",
          message: "",
          phone: "",
        });
        setTimeout(() => {
          setSubmitMessage("");
          setSubmitStatus("");
        }, 5000);
      } else {
        setIsSubmitting(false);
        setSubmitStatus("error");
        setSubmitMessage(data.message || "Something went wrong.");
        setTimeout(() => {
          setSubmitStatus("");
          setSubmitMessage("");
        }, 5000);
      }
    } catch {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setSubmitMessage("Network error. Please try again.");
      setTimeout(() => {
        setSubmitStatus("");
        setSubmitMessage("");
      }, 5000);
    }
  };

  return (
    <section className={`shared-contactform-section ${className}`}>
      <div className="shared-contactform-wrapper">
        <div className="shared-contactform-grid">
          {/* Left — Info */}
          <FadeIn direction="right">
            <div className="shared-contactform-info">
              <h2 className="shared-contactform-info-title">{title}</h2>
              <p className="shared-contactform-info-subtitle">{subtitle}</p>
              <div className="shared-contactform-info-items">
                {infoItems.map((item, i) => (
                  <div key={i} className={`shared-contactform-info-item shared-contactform-info-item-${i + 1}`}>
                    <span className="shared-contactform-info-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn direction="left">
            <div className="shared-contactform-card">
              <form onSubmit={handleSubmit}>
                <div className="shared-contactform-row">
                  <div className="shared-contactform-group">
                    <label className="shared-contactform-label">First Name *</label>
                    <input
                      type="text" name="firstName"
                      className="shared-contactform-input"
                      value={formData.firstName} onChange={handleChange}
                      placeholder="Your first name" required
                    />
                  </div>
                  <div className="shared-contactform-group">
                    <label className="shared-contactform-label">Last Name *</label>
                    <input
                      type="text" name="lastName"
                      className="shared-contactform-input"
                      value={formData.lastName} onChange={handleChange}
                      placeholder="Your last name" required
                    />
                  </div>
                </div>

                <div className="shared-contactform-group">
                  <label className="shared-contactform-label">Email Address *</label>
                  <input
                    type="email" name="email"
                    className="shared-contactform-input"
                    value={formData.email} onChange={handleChange}
                    placeholder="you@company.com" required
                  />
                </div>

                <div className="shared-contactform-row">
                  <div className="shared-contactform-group">
                    <label className="shared-contactform-label">Phone Number</label>
                    <input
                      type="tel" name="phone"
                      className="shared-contactform-input"
                      value={formData.phone} onChange={handleChange}
                      placeholder="+91 xxx xxx xxxx"
                    />
                  </div>
                  <div className="shared-contactform-group">
                    <label className="shared-contactform-label">Company</label>
                    <input
                      type="text" name="company"
                      className="shared-contactform-input"
                      value={formData.company} onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="shared-contactform-group">
                  <label className="shared-contactform-label">What interests you?</label>
                  <select
                    name="service"
                    className="shared-contactform-input"
                    value={formData.service} onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="shared-contactform-group">
                  <label className="shared-contactform-label">Tell us about your project *</label>
                  <textarea
                    name="message" rows={4}
                    className="shared-contactform-input shared-contactform-textarea"
                    placeholder="What are you working on? How can we help?"
                    value={formData.message} onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`shared-contactform-submit ${submitStatus === "success" ? "shared-contactform-submit-success" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : submitStatus === "success" ? (
                    <><Check size={18} /> Sent!</>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>

                {submitMessage && (
                  <p className={`shared-contactform-message shared-contactform-message-${submitStatus}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
