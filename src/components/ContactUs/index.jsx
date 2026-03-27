import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Users,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Star,
  Check,
} from "lucide-react";
import Hero from "../shared/Hero";
import CTASection from "../shared/CTASection";
import "./index.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
        phone: "",
      },
      isSubmitting: false,
      submitStatus: "",
      submitMessage: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true, submitStatus: "", submitMessage: "" });

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "27bc9179-f941-446d-8260-5b7b736744da");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        this.setState({
          isSubmitting: false,
          submitStatus: "success",
          submitMessage: "We received your response!",
          formData: {
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            service: "",
            message: "",
            phone: "",
          },
        });

        // Show success message for 5 seconds
        setTimeout(() => {
          this.setState({ submitMessage: "" });
        }, 5000);

        // Change button text to "Message Submitted Successfully" for 3 seconds
        setTimeout(() => {
          this.setState({ submitStatus: "" });
        }, 5000);
      } else {
        console.log("Error", data);
        this.setState({
          isSubmitting: false,
          submitStatus: "error",
          submitMessage:
            data.message || "Something went wrong. Please try again.",
        });

        // Clear error message after 5 seconds
        setTimeout(() => {
          this.setState({ submitStatus: "", submitMessage: "" });
        }, 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      this.setState({
        isSubmitting: false,
        submitStatus: "error",
        submitMessage:
          "Network error. Please check your connection and try again.",
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        this.setState({ submitStatus: "", submitMessage: "" });
      }, 5000);
    }
  };

  handleMethodClick = (method) => {
    switch (method) {
      case "email":
        (window.location.href = "mailto:support@sustains.ai"), "_blank";
        break;
      case "whatsapp":
        window.open("https://wa.me/918921413436", "_blank");
        break;
      case "calendar":
        // You can integrate with your booking system here
        alert("Calendar booking system would be integrated here");
        break;
      case "phone":
        window.location.href = "tel:+918921413436";
        break;
      default:
        break;
    }
  };

  render() {
    const contactMethods = [
      {
        icon: <Mail size={28} />,
        title: "Email Us",
        subtitle: "Get a response within 24 hours",
        details: ["contact@sustains.ai", "support@sustains.ai"],
        action: "Send Email",
        color: "blue",
        bgIcon: "📧",
        method: "email",
      },
      {
        icon: <MessageCircle size={28} />,
        title: "WhatsApp",
        subtitle: "Instant messaging support",
        details: ["Chat with our team", "Quick responses available"],
        action: "Start Chat",
        color: "green",
        bgIcon: "💬",
        method: "whatsapp",
      },
      {
        icon: <Calendar size={28} />,
        title: "Schedule Meeting",
        subtitle: "Book a personalized consultation",
        details: ["30-min strategy session", "Custom demo available"],
        action: "Book Now",
        color: "purple",
        bgIcon: "📅",
        method: "calendar",
      },
      {
        icon: <Phone size={28} />,
        title: "Call Us",
        subtitle: "Direct phone support",
        details: ["+91 89214 13436", "Work hours: 9 AM - 6 PM IST"],
        action: "Call Now",
        color: "orange",
        bgIcon: "📞",
        method: "phone",
      },
    ];

    const features = [
      {
        icon: <CheckCircle size={20} />,
        text: "Response within 24 hours",
        color: "text-blue-500",
      },
      {
        icon: <Shield size={20} />,
        text: "Enterprise-grade security",
        color: "text-blue-600",
      },
      {
        icon: <Star size={20} />,
        text: "Free consultation included",
        color: "text-yellow-500",
      },
      {
        icon: <Globe size={20} />,
        text: "Global 24/7 support",
        color: "text-purple-500",
      },
    ];

    const whyChooseUs = [
      {
        icon: <Zap size={32} />,
        title: "Lightning Fast Response",
        description:
          "Get answers to your portfolio intelligence queries in under 24 hours",
      },
      {
        icon: <Shield size={32} />,
        title: "Secure & Confidential",
        description:
          "Your portfolio data is protected with enterprise-grade security",
      },
      {
        icon: <Globe size={32} />,
        title: "Global Expertise",
        description:
          "Local support with global portfolio intelligence knowledge",
      },
    ];

    return (
      <div className="contactpage-container">
        {/* Hero Section */}
        <Hero
          badge={{ icon: <MessageCircle size={16} />, text: "Get In Touch" }}
          titleMain="Let's Build a"
          titleGradient="Smarter Portfolio Future Together"
          description="Ready to transform your organization with AI-powered portfolio intelligence solutions? Our team of experts is here to help you achieve your investment goals through cutting-edge technology across wealth, energy, and infrastructure sectors."
        />

        {/* Contact Methods Section */}
        <section className="contactpage-methods-section">
          <div className="contactpage-methods-wrapper">
            <div className="contactpage-methods-header">
              <h2 className="contactpage-methods-title">
                Choose Your Preferred Way to Connect
              </h2>
              <p className="contactpage-methods-subtitle">
                We're here to help you succeed with portfolio intelligence. Pick
                the communication method that works best for you.
              </p>
            </div>

            <div className="contactpage-methods-grid">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`contactpage-method-card contactpage-method-${method.color}`}
                >
                  <div className="contactpage-method-bg-icon">
                    {method.bgIcon}
                  </div>
                  <div className="contactpage-method-icon-wrapper">
                    <div className="contactpage-method-icon">{method.icon}</div>
                  </div>
                  <div className="contactpage-method-content">
                    <h3 className="contactpage-method-title">{method.title}</h3>
                    <p className="contactpage-method-subtitle">
                      {method.subtitle}
                    </p>
                    <div className="contactpage-method-details">
                      {method.details.map((detail, idx) => (
                        <span key={idx} className="contactpage-method-detail">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="contactpage-method-action"
                    onClick={() => this.handleMethodClick(method.method)}
                  >
                    {method.action}
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contactpage-form-section">
          <div className="contactpage-form-wrapper">
            <div className="contactpage-form-container">
              {/* Left Side - Info */}
              <div className="contactpage-form-left">
                <div className="contactpage-form-header">
                  <h2 className="contactpage-form-title">Contact Us</h2>
                  <p className="contactpage-form-subtitle">
                    Get in touch with us below
                  </p>
                </div>

                <div className="contactpage-form-features">
                  {features.map((feature, index) => (
                    <div key={index} className="contactpage-form-feature">
                      <div
                        className={`contactpage-feature-icon ${feature.color}`}
                      >
                        {feature.icon}
                      </div>
                      <span className="contactpage-feature-text">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="contactpage-why-choose">
                  <h3 className="contactpage-why-choose-title">
                    Why Choose Us?
                  </h3>
                  <div className="contactpage-why-choose-list">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="contactpage-why-choose-item">
                        <div className="contactpage-why-choose-icon">
                          {item.icon}
                        </div>
                        <div className="contactpage-why-choose-content">
                          <h4 className="contactpage-why-choose-item-title">
                            {item.title}
                          </h4>
                          <p className="contactpage-why-choose-description">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="contactpage-form-right">
                <form
                  className="contactpage-modern-form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="contactpage-form-group-row">
                    <div className="contactpage-form-group">
                      <label className="contactpage-form-label">
                        <Users size={16} />
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="contactpage-form-input"
                        value={this.state.formData.firstName}
                        onChange={this.handleInputChange}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="contactpage-form-group">
                      <label className="contactpage-form-label">
                        <Users size={16} />
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="contactpage-form-input"
                        value={this.state.formData.lastName}
                        onChange={this.handleInputChange}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="contactpage-form-group">
                    <label className="contactpage-form-label">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="contactpage-form-input"
                      value={this.state.formData.email}
                      onChange={this.handleInputChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div className="contactpage-form-group-row">
                    <div className="contactpage-form-group">
                      <label className="contactpage-form-label">
                        <Phone size={16} />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="contactpage-form-input"
                        value={this.state.formData.phone}
                        onChange={this.handleInputChange}
                        placeholder="+91 (xxx) xxx-xxxx"
                      />
                    </div>
                    <div className="contactpage-form-group">
                      <label className="contactpage-form-label">
                        <MapPin size={16} />
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        className="contactpage-form-input"
                        value={this.state.formData.company}
                        onChange={this.handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="contactpage-form-group">
                    <label className="contactpage-form-label">
                      <Star size={16} />
                      What interests you most?
                    </label>
                    <select
                      name="service"
                      className="contactpage-form-select"
                      value={this.state.formData.service}
                      onChange={this.handleInputChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="sandbox">
                        Sandbox - Wealth Management Analytics
                      </option>
                      <option value="vector">
                        Vector - Energy Asset Portfolios
                      </option>
                      <option value="emerging-solutions">
                        Emerging Sector Solutions
                      </option>
                      <option value="ai-automation">
                        AI Automation Services
                      </option>
                      <option value="collaborative-innovations">
                        Collaborative Innovations
                      </option>
                      <option value="consultation">
                        Consultation & Strategy
                      </option>
                    </select>
                  </div>

                  <div className="contactpage-form-group">
                    <label className="contactpage-form-label">
                      <MessageCircle size={16} />
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="contactpage-form-textarea"
                      placeholder="Share your portfolio intelligence goals, challenges, or questions. The more details you provide, the better we can help you..."
                      value={this.state.formData.message}
                      onChange={this.handleInputChange}
                      required
                    />
                    <div className="contactpage-form-hint">
                      <span className="contactpage-char-count">
                        {this.state.formData.message.length}/500
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`contactpage-form-submit ${
                      this.state.isSubmitting
                        ? "contactpage-form-submitting"
                        : ""
                    } ${
                      this.state.submitStatus === "success"
                        ? "contactpage-form-success"
                        : ""
                    } ${
                      this.state.submitStatus === "error"
                        ? "contactpage-form-error"
                        : ""
                    }`}
                    disabled={this.state.isSubmitting}
                  >
                    <span className="contactpage-submit-content">
                      {this.state.isSubmitting ? (
                        <>
                          <div className="contactpage-spinner"></div>
                          Submitting...
                        </>
                      ) : this.state.submitStatus === "success" ? (
                        <>
                          <Check size={20} />
                          Message Submitted Successfully
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </span>
                    <div className="contactpage-submit-shine"></div>
                  </button>

                  {/* Success/Error Message */}
                  {this.state.submitMessage && (
                    <div
                      className={`contactpage-submit-message ${
                        this.state.submitStatus === "success"
                          ? "contactpage-submit-success"
                          : this.state.submitStatus === "error"
                          ? "contactpage-submit-error"
                          : ""
                      }`}
                    >
                      {this.state.submitStatus === "success" && (
                        <CheckCircle size={16} />
                      )}
                      {this.state.submitStatus === "error" && (
                        <MessageCircle size={16} />
                      )}
                      {this.state.submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          description="Join hundreds of companies already transforming their portfolio intelligence journey with our AI-powered solutions."
          primaryButton={{ to: "/products", label: "Explore Products", icon: <ArrowRight size={18} /> }}
          secondaryButton={{ to: "/services", label: "View Services" }}
        />
      </div>
    );
  }
}

export default Contact;
