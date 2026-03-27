import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./RotatingCard.css";

const RotatingCard = ({ items, interval = 4000, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  const item = items[activeIndex];

  return (
    <div className={`rotating-card-container ${className}`}>
      <div className="rotating-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className={`rotating-card-content rotating-card-color-${item.color || "primary"}`}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Background image */}
            {item.image && (
              <div
                className="rotating-card-bg-image"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            )}

            {/* Decorative elements */}
            <div className="rotating-card-decor-circle-1" />
            <div className="rotating-card-decor-circle-2" />
            <div className="rotating-card-decor-line" />

            <div className="rotating-card-inner">
              <div>
                <div className="rotating-card-badge">
                  {item.icon}
                  <span>{item.badge}</span>
                </div>
                <h3 className="rotating-card-title">{item.name}</h3>
                <p className="rotating-card-tagline">{item.tagline}</p>
              </div>

              <p className="rotating-card-snippet">{item.snippet}</p>

              {item.url && (
                <a
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="rotating-card-link"
                >
                  {item.linkText || "Learn More"}
                  <span className="rotating-card-link-arrow">→</span>
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="rotating-card-dots">
        {items.map((itm, i) => (
          <button
            key={i}
            className={`rotating-card-dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
            aria-label={itm.name}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCard;
