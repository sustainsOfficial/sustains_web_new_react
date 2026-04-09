import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  MessageCircle,
  MapPin,
  Globe,
  Heart,
} from "lucide-react";
import "./index.css";

const Footer = () => {
  const location = useLocation();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "24/7", label: "Support" },
    { value: "50+", label: "Countries" },
  ];

  const isActiveRoute = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <footer className="clean-professional-footer">
      {/* Background */}
      <div className="footer-background">
        <div className="footer-gradient-overlay"></div>
      </div>

      {/* Stats Section */}
      {/* <div className="footer-stats">
        <div className="footer-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-content-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="brand-logo">
                <img
                  src="/logo/sustain_white_tm_transparent_bg.png"
                  alt="Sustains"
                  className="logo-image"
                />
              </div>

              <h3 className="brand-title">
                Portfolio Intelligence{" "}
                <span className="gradient-text">Across Industries</span>
              </h3>

              <p className="brand-description">
                Smart portfolio management for wealth, energy, CRM, and travel
                — built by domain experts who think in portfolios.
              </p>
            </div>

            {/* Navigation */}
            <div className="footer-section">
              <h4 className="section-title">Navigation</h4>
              <ul className="nav-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className={`nav-link ${
                        isActiveRoute(link.path) ? "active" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="section-title">Contact Us</h4>
              <div className="contact-list">
                <div className="contact-item">
                  <Mail size={18} className="contact-icon" />
                  <Link
                    to="mailto:contact@sustains.ai"
                    target="_blank"
                    className="contact-link"
                  >
                    contact@sustains.ai
                  </Link>
                </div>

                <div className="contact-item">
                  <Mail size={18} className="contact-icon" />
                  <Link
                    to="mailto:careers@sustains.ai"
                    target="_blank"
                    className="contact-link"
                  >
                    careers@sustains.ai
                  </Link>
                </div>

                <div className="contact-item">
                  <Phone size={18} className="contact-icon" />
                  <Link to="tel:+918921413436" className="contact-link">
                    +91 89214 13436
                  </Link>
                </div>

                <div className="contact-item">
                  <MapPin size={18} className="contact-icon" />
                  <span className="contact-text">Global Presence</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="footer-section">
              <h4 className="section-title">Follow Us</h4>
              <div className="social-links">
                <Link
                  to="https://www.linkedin.com/company/sustains-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </Link>
                <Link to="#" className="social-link">
                  <Facebook size={20} />
                  <span>Facebook</span>
                </Link>
                {/* <Link
                  to="https://wa.me/918921413436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </Link> */}
                <Link
                  to="https://www.sustains.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Globe size={20} />
                  <span>Nidhi</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="copyright">
              © 2025 Sustains.ai. All rights reserved.
            </div>
            <div className="made-with">
              Made with <Heart size={16} className="heart" /> for a sustainable
              future
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
