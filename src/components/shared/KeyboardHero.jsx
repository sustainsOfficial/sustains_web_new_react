import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./KeyboardHero.css";

const words = [
  { text: "SUSTAINS", tagline: "Press enter to sustain your growth" },
  { text: "NIDHI", tagline: "Wealth management, powered by AI" },
  { text: "NUDGE", tagline: "Energy BD platform for MW-scale deals" },
  { text: "SAILBOT", tagline: "CRM built for focused teams" },
  { text: "AZYRO", tagline: "Tour management, made simple" },
];

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const KeyboardHero = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [litKeys, setLitKeys] = useState(new Set());
  const [enterPressed, setEnterPressed] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [tagline, setTagline] = useState(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    const runLoop = async () => {
      while (!cancelled && mounted.current) {
        for (let wi = 0; wi < words.length; wi++) {
          if (cancelled) return;
          const word = words[wi];
          const letters = word.text.split("");

          // Reset
          setLitKeys(new Set());
          setTypedText("");
          setTagline(null);
          setEnterPressed(false);
          setActiveKey(null);
          setWordIndex(wi);

          await sleep(400);

          // Type each letter
          for (let li = 0; li < letters.length; li++) {
            if (cancelled) return;
            const letter = letters[li];
            setActiveKey(letter);
            setLitKeys((prev) => new Set([...prev, letter]));
            setTypedText(word.text.slice(0, li + 1));
            await sleep(200);
            setActiveKey(null);
            await sleep(60);
          }

          await sleep(300);

          // Press enter
          if (cancelled) return;
          setEnterPressed(true);
          await sleep(400);
          setEnterPressed(false);

          // Show tagline
          if (cancelled) return;
          setTagline(word.tagline);
          await sleep(2500);

          // Clear for next word
          setTagline(null);
          await sleep(300);
        }
      }
    };

    runLoop();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="kb-hero">
      {/* Screen */}
      <div className="kb-screen">
        <div className="kb-screen-inner">
          <div className="kb-typed-row">
            <span className="kb-prompt">&gt;</span>
            <span className="kb-typed-text">{typedText}</span>
            <span className="kb-cursor" />
          </div>

          <AnimatePresence mode="wait">
            {tagline && (
              <motion.div
                key={wordIndex}
                className="kb-tagline"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {tagline}
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
              const isActive = activeKey === key;
              return (
                <motion.div
                  key={key}
                  className={`kb-key ${isLit ? "kb-key-lit" : ""}`}
                  animate={isActive ? { scale: 0.85 } : { scale: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  {key}
                </motion.div>
              );
            })}

            {ri === 1 && (
              <motion.div
                className={`kb-key kb-key-enter ${enterPressed ? "kb-key-enter-pressed" : ""}`}
                animate={enterPressed ? { scale: 0.88 } : { scale: 1 }}
                transition={{ duration: 0.15 }}
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
