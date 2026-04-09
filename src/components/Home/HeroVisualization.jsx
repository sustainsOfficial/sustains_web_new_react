import React, { useState, useEffect } from "react";
import "./HeroVisualization.css";

/**
 * Circle positions in a 500×500 SVG viewBox.
 * labelX/labelY are percentages of the container — they position the
 * HTML text overlays on top of the SVG circles.
 */
const HERO_CIRCLES = [
  { key: "wealth", label: "Wealth", product: "NIDHI", cx: 160, cy: 170, r: 135, labelX: "32%", labelY: "34%" },
  { key: "energy", label: "Energy", product: "NUDGE", cx: 355, cy: 200, r: 128, labelX: "71%", labelY: "40%" },
  { key: "crm", label: "CRM", product: "SAILBOT", cx: 175, cy: 360, r: 108, labelX: "35%", labelY: "72%" },
  { key: "travel", label: "Travel", product: "AZYRO", cx: 360, cy: 378, r: 102, labelX: "72%", labelY: "76%" },
];

const CYCLE_INTERVAL_MS = 3500;

const HeroVisualization = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_CIRCLES.length);
    }, CYCLE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-viz" aria-hidden="true">
      <svg
        className="hero-viz-svg"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
      >
        <defs>
          <radialGradient id="heroGradWealth" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.92" />
          </radialGradient>
          <radialGradient id="heroGradEnergy" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#34d399" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.9" />
          </radialGradient>
          <radialGradient id="heroGradCrm" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.92" />
          </radialGradient>
          <radialGradient id="heroGradTravel" cx="40%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#fb923c" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.88" />
          </radialGradient>
        </defs>

        {/* Layer 1: gradient fills — multiply-blended per circle so each gets
            its own layer at device pixel resolution. Each circle drifts on its
            own keyframe loop for an organic, fluid feel. */}
        <circle
          className="hero-viz-drift-wealth"
          cx={320}
          cy={340}
          r={270}
          fill="url(#heroGradWealth)"
          style={{ mixBlendMode: "multiply" }}
        />
        <circle
          className="hero-viz-drift-energy"
          cx={710}
          cy={400}
          r={256}
          fill="url(#heroGradEnergy)"
          style={{ mixBlendMode: "multiply" }}
        />
        <circle
          className="hero-viz-drift-crm"
          cx={350}
          cy={720}
          r={216}
          fill="url(#heroGradCrm)"
          style={{ mixBlendMode: "multiply" }}
        />
        <circle
          className="hero-viz-drift-travel"
          cx={720}
          cy={756}
          r={204}
          fill="url(#heroGradTravel)"
          style={{ mixBlendMode: "multiply" }}
        />

        {/* Layer 2: dashed strokes — NOT blended, pure crisp vectors.
            Same drift animations so strokes stay locked to their fills. */}
        <g fill="none" strokeLinecap="round">
          {HERO_CIRCLES.map((c, i) => (
            <circle
              key={c.key}
              className={`hero-viz-drift-${c.key}`}
              cx={c.cx * 2}
              cy={c.cy * 2}
              r={c.r * 2}
              stroke="#ffffff"
              strokeOpacity={i === activeIdx ? 0.95 : 0.55}
              strokeWidth={i === activeIdx ? 5 : 3.5}
              strokeDasharray="16 10"
              style={{ transition: "stroke-opacity 0.6s ease, stroke-width 0.6s ease" }}
            />
          ))}
        </g>
      </svg>

      {/* HTML labels positioned over the SVG — native subpixel text rendering */}
      {HERO_CIRCLES.map((c, i) => (
        <div
          key={c.key}
          className={`hero-viz-label ${i === activeIdx ? "is-active" : ""}`}
          style={{ left: c.labelX, top: c.labelY }}
        >
          <span className="hero-viz-label-sector">{c.label}</span>
          <span className="hero-viz-label-product">{c.product}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroVisualization;
