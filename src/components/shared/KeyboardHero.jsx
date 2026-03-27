import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./KeyboardHero.css";

const words = [
  {
    text: "SUSTAINS",
    tagline: "Press enter to sustain your growth",
  },
  {
    text: "NIDHI",
    tagline: "Wealth management, powered by AI",
  },
  {
    text: "NUDGE",
    tagline: "Energy BD platform for MW-scale deals",
  },
  {
    text: "SAILBOT",
    tagline: "CRM built for focused teams",
  },
  {
    text: "AZYRO",
    tagline: "Tour management, made simple",
  },
];

// Keyboard rows
const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const KeyboardHero = () => {
  const [litKeys, setLitKeys] = useState(new Set());
  const [enterPressed, setEnterPressed] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [phase, setPhase] = useState("idle");
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const addTimer = (fn, delay) => {
    timers.current.push(setTimeout(fn, delay));
  };

  const runCycle = useCallback(() => {
    clearTimers();
    const word = words[wordIndex];
    const letters = word.text.split("");

    setPhase("typing");
    setLitKeys(new Set());
    setTypedCount(0);
    setEnterPressed(false);

    // Type each letter
    letters.forEach((letter, i) => {
      addTimer(() => {
        setLitKeys((prev) => {
          const next = new Set(prev);
          next.add(letter);
          return next;
        });
        setTypedCount(i + 1);
      }, 180 + i * 220);
    });

    // Press Enter
    const enterDelay = 180 + letters.length * 220 + 350;
    addTimer(() => {
      setPhase("enter");
      setEnterPressed(true);
    }, enterDelay);

    // Show tagline
    addTimer(() => {
      setPhase("display");
      setEnterPressed(false);
    }, enterDelay + 500);

    // Reset
    addTimer(() => {
      setPhase("idle");
      setWordIndex((prev) => (prev + 1) % words.length);
    }, enterDelay + 3000);
  }, [wordIndex]);

  useEffect(() => {
    const t = setTimeout(runCycle, phase === "idle" ? 500 : 700);
    return () => clearTimeout(t);
  }, [runCycle]);

  useEffect(() => {
    if (phase === "idle" && wordIndex > 0) {
      const t = setTimeout(runCycle, 500);
      return () => clearTimeout(t);
    }
  }, [phase, wordIndex, runCycle]);

  useEffect(() => () => clearTimers(), []);

  const word = words[wordIndex];
  const typedString = word.text.slice(0, typedCount);

  return (
    <div className="kb-hero">
      {/* Screen */}
      <div className="kb-screen">
        <div className="kb-screen-inner">
          <div className="kb-typed-row">
            <span className="kb-prompt">&gt;</span>
            <span className="kb-typed-text">{typedString}</span>
            <span className="kb-cursor" />
          </div>

          <AnimatePresence mode="wait">
            {phase === "display" && (
              <motion.div
                key={wordIndex}
                className="kb-tagline"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {word.tagline}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Keyboard */}
      <div className="kb-keyboard">
        {rows.map((row, ri) => (
          <div key={ri} className="kb-row">
            {row.map((key) => {
              const isLit = litKeys.has(key);
              return (
                <motion.div
                  key={key}
                  className={`kb-key ${isLit ? "kb-key-lit" : ""}`}
                  animate={
                    isLit
                      ? { scale: [1, 0.85, 1], transition: { duration: 0.12 } }
                      : {}
                  }
                >
                  {key}
                </motion.div>
              );
            })}

            {/* Enter key on middle row */}
            {ri === 1 && (
              <motion.div
                className={`kb-key kb-key-enter ${enterPressed ? "kb-key-enter-pressed" : ""}`}
                animate={
                  enterPressed
                    ? { scale: [1, 0.88, 1], transition: { duration: 0.25 } }
                    : {}
                }
              >
                <span className="kb-enter-label">sustains</span>
                <span className="kb-enter-icon">↵</span>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardHero;
