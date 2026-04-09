import React from "react";
import "./HeroNotesVariant.css";

/**
 * HeroNotesVariant — experimental alternative to HeroVisualization.
 * Four sticky notes, one per product, scattered on a cork panel.
 *
 * Designed to be a drop-in replacement for <HeroVisualization /> on the
 * right side of the home hero. Swap it in:
 *
 *   import HeroNotesVariant from "./HeroNotesVariant";
 *   ...
 *   rightContent={<HeroNotesVariant />}
 *
 * This component intentionally does NOT replace HeroVisualization —
 * both coexist so you can A/B them.
 */

const PRODUCT_NOTES = [
  {
    quote: "Risk profiled. Portfolio rebalanced. Report auto-drafted.",
    product: "Nidhi",
    sector: "Wealth",
    /* scatter transform: top, left, rotation */
    top: "2%",
    left: "4%",
    rotate: "-4deg",
  },
  {
    quote: "MW pipeline → stages → bankability. All in one view.",
    product: "Nudge",
    sector: "Energy",
    top: "4%",
    left: "52%",
    rotate: "3deg",
  },
  {
    quote: "The one deal you forgot to follow up on? Already in your inbox.",
    product: "Sailbot",
    sector: "CRM",
    top: "48%",
    left: "2%",
    rotate: "2deg",
  },
  {
    quote: "Bookings, itineraries, margins. All on one screen.",
    product: "Azyro",
    sector: "Travel",
    top: "50%",
    left: "50%",
    rotate: "-3deg",
  },
];

const HeroNotesVariant = () => {
  return (
    <div className="hero-notes" aria-label="Sustains product notes">
      {PRODUCT_NOTES.map((n, i) => (
        <article
          key={n.product}
          className={`hero-note hero-note-${n.product.toLowerCase()}`}
          style={{
            top: n.top,
            left: n.left,
            "--note-rotation": n.rotate,
            "--note-delay": `${i * 80}ms`,
          }}
        >
          <blockquote className="hero-note-quote">{n.quote}</blockquote>
          <cite className="hero-note-cite">
            — {n.product} · {n.sector}
          </cite>
        </article>
      ))}
    </div>
  );
};

export default HeroNotesVariant;
