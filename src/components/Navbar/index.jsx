import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveRoute = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-top"}`}
      >
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/" className="navbar-logo" onClick={handleNavClick}>
              <img
                src="https://res.cloudinary.com/dffu1ungl/image/upload/v1756371951/sustains_logo_gradient_transparent_highres_szhvxf.png"
                alt="Sustains.ai"
                className="navbar-logo-image"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-nav-desktop">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`navbar-nav-item ${
                    isActiveRoute(item.path) ? "navbar-nav-item-active" : ""
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA + Theme Toggle */}
            <div className="navbar-cta">
              <Link
                to="/contact"
                className="navbar-cta-button"
                onClick={handleNavClick}
              >
                Get Started
              </Link>
              <button
                className="navbar-theme-toggle"
                onClick={toggleTheme}
              >
                {theme === "light" ? "Hate colors?" : "Want colors back?"}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="navbar-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`navbar-mobile ${
              isMobileMenuOpen ? "navbar-mobile-open" : ""
            }`}
          >
            <div className="navbar-mobile-content">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`navbar-mobile-item ${
                    isActiveRoute(item.path) ? "navbar-mobile-item-active" : ""
                  }`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="navbar-mobile-cta"
                onClick={handleNavClick}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
