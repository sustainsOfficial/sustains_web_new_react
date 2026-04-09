import React from "react";
import {
  Wallet,
  Zap,
  MessageSquare,
  Plane,
  Handshake,
  Lightbulb,
} from "lucide-react";
import "./HeroCubeVariant.css";

/**
 * HeroCubeVariant — a CSS 3D Rubik's cube.
 *
 * Each face is a 3x3 grid of colored plastic tiles (nine per face)
 * with a dark cube body showing through the seams. A product name +
 * icon is overlaid on the center of each face.
 *
 * Face assignments:
 *   Front   → Nidhi      (Wealth)
 *   Right   → Nudge      (Energy)
 *   Back    → Sailbot    (CRM)
 *   Left    → Azyro      (Travel)
 *   Top     → Partnership (Digital)
 *   Bottom  → Consultancy (Advisory)
 */

const FACES = [
  { key: "nidhi",       face: "front",  name: "Nidhi",       sublabel: "Wealth",   Icon: Wallet },
  { key: "nudge",       face: "right",  name: "Nudge",       sublabel: "Energy",   Icon: Zap },
  { key: "sailbot",     face: "back",   name: "Sailbot",     sublabel: "CRM",      Icon: MessageSquare },
  { key: "azyro",       face: "left",   name: "Azyro",       sublabel: "Travel",   Icon: Plane },
  { key: "partnership", face: "top",    name: "Partnership", sublabel: "Digital",  Icon: Handshake },
  { key: "consultancy", face: "bottom", name: "Consultancy", sublabel: "Advisory", Icon: Lightbulb },
];

/* 9 tiles = a 3x3 face. Rendered once and reused per face. */
const TILE_INDICES = Array.from({ length: 9 }, (_, i) => i);

const HeroCubeVariant = () => {
  return (
    <div className="hero-cube-scene" aria-label="Sustains offerings">
      <div className="hero-cube">
        {FACES.map(({ key, face, name, sublabel, Icon }) => (
          <div
            key={key}
            className={`hero-cube-face hero-cube-face-${face} hero-cube-face-${key}`}
          >
            {/* 9 plastic tiles forming the 3x3 face */}
            {TILE_INDICES.map((i) => (
              <div key={i} className="hero-cube-tile" />
            ))}

            {/* Overlay: product icon + name, centered on the face */}
            <div className="hero-cube-face-overlay">
              <Icon size={28} strokeWidth={2.2} className="hero-cube-face-icon" />
              <span className="hero-cube-face-name">{name}</span>
              <span className="hero-cube-face-sublabel">{sublabel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCubeVariant;
