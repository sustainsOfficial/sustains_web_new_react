import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  X,
  ExternalLink,
  Wallet,
  BatteryCharging,
  Users,
  Plane,
} from "lucide-react";
import Hero from "../shared/Hero";
import SectionHeader from "../shared/SectionHeader";
import CTASection from "../shared/CTASection";
import "./index.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      isModalOpen: false,
    };
  }

  openModal = (product) => {
    this.setState({
      selectedProduct: product,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedProduct: null,
      isModalOpen: false,
    });
  };

  getColorClasses = (color) => {
    switch (color) {
      case "primary":
        return {
          gradient: "productpage-from-primary-80",
          text: "productpage-text-primary",
          bg: "productpage-bg-primary-10",
        };
      case "secondary":
        return {
          gradient: "productpage-from-secondary-80",
          text: "productpage-text-secondary",
          bg: "productpage-bg-secondary-10",
        };
      case "accent":
        return {
          gradient: "productpage-from-accent-80",
          text: "productpage-text-accent",
          bg: "productpage-bg-accent-10",
        };
      case "purple":
        return {
          gradient: "productpage-from-purple-80",
          text: "productpage-text-purple",
          bg: "productpage-bg-purple-10",
        };
      default:
        return {
          gradient: "productpage-from-primary-80",
          text: "productpage-text-primary",
          bg: "productpage-bg-primary-10",
        };
    }
  };

  render() {
    const products = [
      {
        id: "nidhi",
        name: "Nidhi",
        icon: <Wallet size={32} />,
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        description: "API Platform for Wealth Management",
        tagline: "AI-Powered Portfolio Intelligence for a Sustainable Future",
        details: {
          subtitle: "Wealth Management API Platform",
          content:
            "AI-powered API platform for wealth management — portfolio analytics, risk profiling, rebalancing, and reporting. Built for financial advisors and fintech platforms.",
          features: [
            "Risk profiling with VaR, CVaR & Monte Carlo simulations",
            "AI-powered portfolio analytics and rebalancing",
            "Goal-based SIP planning with multiple scenarios",
            "Automated PDF report generation",
            "Revenue tracking for mutual fund distributors",
            "40+ API endpoints with 300 req/min rate limit",
          ],
        },
        url: "https://www.sustains.in",
        docsUrl: "https://www.sustains.co/docs",
        color: "primary",
      },
      {
        id: "nudge",
        name: "Nudge",
        icon: <BatteryCharging size={32} />,
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        description: "End-to-End Energy Management",
        tagline: "Accelerate Your Energy Deals",
        details: {
          subtitle: "Energy BD CRM Platform",
          content:
            "Energy BD operating system built for MW, stages, and bankability — not tickets. Global project tracking, pipeline management, and NREL-integrated solar analysis.",
          features: [
            "Global project tracking across multiple countries",
            "AI-powered pipeline management and forecasting",
            "Solar site analysis via NREL PVWatts API",
            "IRR, NPV, ROI & payback period calculations",
            "Deal risk identification and BD strategy recommendations",
            "Enterprise-grade security with role-based access",
          ],
        },
        url: "https://www.ishalab.io",
        color: "secondary",
      },
      {
        id: "sailbot",
        name: "Sailbot",
        icon: <Users size={32} />,
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        description: "CRM for Focused Teams",
        tagline: "A Calm CRM Workspace for Focused Teams",
        details: {
          subtitle: "Your CRM, Simplified",
          content:
            "Calm, distraction-free CRM with AI insights, pipeline management, and revenue tracking — without the bloat of enterprise CRMs.",
          features: [
            "AI-powered email templates with tone selection",
            "Visual sales pipeline with drag-to-reorder stages",
            "Client lifecycle management (Prospect → Active → Inactive)",
            "Marketing ROI dashboard by lead source",
            "Webhook-based enquiry intake from website forms",
            "Bulk CSV import/export with template support",
          ],
        },
        url: "https://www.sailbot.ai",
        color: "accent",
      },
      {
        id: "azyro",
        name: "Azyro",
        icon: <Plane size={32} />,
        image:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        description: "Tour Management Platform",
        tagline: "Tour Management, Made Simple",
        details: {
          subtitle: "Purpose-Built for Tour Operators",
          content:
            "End-to-end platform for tour operators — bookings, itineraries, customers, and finances. Simple and affordable, not another generic CRM.",
          features: [
            "Smart booking management with real-time tracking",
            "Departure management with capacity & profitability monitoring",
            "Professional itinerary builder",
            "Financial analytics with revenue & expense dashboards",
            "Customer CRM with detailed profiles and history",
            "Secure document management for contracts & vouchers",
          ],
        },
        url: "https://www.azyro.co",
        color: "purple",
      },
    ];

    const features = [
      {
        icon: <Shield size={24} />,
        title: "Enterprise Security",
        description: "Bank-level encryption and SOC 2 compliance",
      },
      {
        icon: <Globe size={24} />,
        title: "Global Deployment",
        description: "Multi-region support with 99.9% uptime SLA",
      },
      {
        icon: <Zap size={24} />,
        title: "Real-time Processing",
        description: "Live data integration and instant insights",
      },
      {
        icon: <TrendingUp size={24} />,
        title: "AI-Powered Analytics",
        description: "ML-powered insights and predictive modeling",
      },
    ];

    return (
      <div className="productpage-container">
        {/* Hero */}
        <Hero
          badge={{ icon: <BarChart3 size={16} />, text: "Our Product Suite" }}
          titleMain="Purpose-Built Products"
          titleGradient="Across Multiple Verticals"
          description="Focused, AI-powered products — each purpose-built for its industry."
        />

        {/* Main Products Section */}
        <section className="productpage-simple-section">
          <div className="productpage-simple-wrapper">
            <div className="productpage-simple-header">
              <h2 className="productpage-simple-title">
                Our{" "}
                <span className="productpage-title-gradient">Products</span>
              </h2>
              <p className="productpage-simple-subtitle">
                Four specialized platforms, each purpose-built for its industry
              </p>
            </div>

            <div className="productpage-simple-grid productpage-grid-4">
              {products.map((product) => {
                const colors = this.getColorClasses(product.color);

                return (
                  <div key={product.id} className="productpage-simple-card">
                    <div className="productpage-card-image-container">
                      <img
                        src={product.image}
                        alt={`${product.name} platform interface`}
                        className="productpage-card-image"
                      />
                      <div
                        className={`productpage-card-overlay ${colors.gradient}`}
                      >
                        <h3 className="productpage-card-name">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="productpage-card-content">
                      <div className="productpage-card-main">
                        <h4 className="productpage-card-title">
                          {product.description}
                        </h4>
                        <p className="productpage-card-tagline">
                          {product.tagline}
                        </p>
                        <div className="productpage-card-actions">
                          <button
                            className={`productpage-learn-more-btn ${colors.text}`}
                            onClick={() => this.openModal(product)}
                          >
                            Learn More
                            <ArrowRight size={16} />
                          </button>
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`productpage-visit-btn ${colors.text}`}
                          >
                            Visit
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Modal Overlay */}
        {this.state.isModalOpen && this.state.selectedProduct && (
          <div className="productpage-modal-overlay" onClick={this.closeModal}>
            <div
              className="productpage-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="productpage-modal-close"
                onClick={this.closeModal}
              >
                <X size={24} />
              </button>

              <div className="productpage-modal-header">
                <h3 className="productpage-modal-title">
                  {this.state.selectedProduct.name}
                </h3>
                <p className="productpage-modal-subtitle">
                  {this.state.selectedProduct.details.subtitle}
                </p>
              </div>

              <div className="productpage-modal-body">
                <img
                  src={this.state.selectedProduct.image}
                  alt={`${this.state.selectedProduct.name} platform`}
                  className="productpage-modal-image"
                />
                <p className="productpage-modal-description">
                  {this.state.selectedProduct.details.content}
                </p>

                {this.state.selectedProduct.details.features && (
                  <div className="productpage-modal-features">
                    <h4 className="productpage-modal-features-title">
                      Key Features
                    </h4>
                    <ul className="productpage-modal-features-list">
                      {this.state.selectedProduct.details.features.map(
                        (feature, index) => (
                          <li
                            key={index}
                            className="productpage-modal-feature-item"
                          >
                            <CheckCircle size={16} />
                            <span>{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>

              <div className="productpage-modal-actions">
                <a
                  href={this.state.selectedProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="productpage-modal-btn-primary"
                  onClick={this.closeModal}
                >
                  Visit {this.state.selectedProduct.name}
                  <ExternalLink size={16} />
                </a>
                {this.state.selectedProduct.docsUrl && (
                  <a
                    href={this.state.selectedProduct.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="productpage-modal-btn-secondary"
                  >
                    API Documentation
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <section className="productpage-features-section">
          <div className="productpage-features-wrapper">
            <div className="productpage-features-header">
              <h2 className="productpage-features-title">
                Built for Enterprise Scale
              </h2>
              <p className="productpage-features-subtitle">
                Enterprise-grade security, scalability, and reliability across every product
              </p>
            </div>

            <div className="productpage-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="productpage-feature-card">
                  <div
                    className={`productpage-feature-card-icon productpage-feature-icon-${
                      index + 1
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="productpage-feature-card-title">
                    {feature.title}
                  </h3>
                  <p className="productpage-feature-card-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Ready to Get Started?"
          description="See how we can help your business grow."
          primaryButton={{
            to: "/contact",
            label: "Book a Demo",
            icon: <ArrowRight size={20} />,
          }}
          secondaryButton={{
            to: "/services",
            label: "View Services",
          }}
        />
      </div>
    );
  }
}

export default Products;
