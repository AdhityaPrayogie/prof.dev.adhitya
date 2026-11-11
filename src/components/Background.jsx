// src/components/Background.jsx
import React from "react";
import { motion } from "framer-motion";

// Objek latar belakang yang bergerak terus, fixed di belakang semua section.
const orbs = [
  { className: "top-[10%] left-[5%] w-72 h-72 bg-[#034694]/30", x: [0, 60, 0], y: [0, 40, 0], duration: 18 },
  { className: "top-[55%] right-[5%] w-96 h-96 bg-[#38bdf8]/10", x: [0, -70, 0], y: [0, -50, 0], duration: 22 },
  { className: "bottom-[5%] left-[35%] w-80 h-80 bg-[#034694]/25", x: [0, 50, 0], y: [0, -30, 0], duration: 20 },
];

const shapes = [
  { className: "top-[18%] right-[12%] w-16 h-16 border-2 border-[#38bdf8]/40 rounded-lg", duration: 12 },
  { className: "top-[70%] left-[8%] w-10 h-10 border-2 border-[#38bdf8]/40 rounded-full", duration: 9 },
  { className: "top-[40%] left-[45%] w-6 h-6 bg-[#38bdf8]/30 rotate-45", duration: 7 },
  { className: "bottom-[15%] right-[30%] w-12 h-12 border-2 border-[#034694] rounded-lg", duration: 14 },
  { className: "top-[8%] left-[40%] w-3 h-3 bg-[#38bdf8]/60 rounded-full", duration: 6 },
];

const glyphs = [
  { text: "</>", className: "top-[30%] left-[15%]", duration: 10 },
  { text: "{ }", className: "top-[60%] right-[18%]", duration: 12 },
  { text: "( )", className: "bottom-[25%] left-[60%]", duration: 9 },
];

const Background = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
    {orbs.map((o, i) => (
      <motion.div
        key={i}
        animate={{ x: o.x, y: o.y }}
        transition={{ duration: o.duration, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute rounded-full blur-3xl ${o.className}`}
      />
    ))}
    {shapes.map((s, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
        transition={{ duration: s.duration, repeat: Infinity, ease: "linear" }}
        className={`absolute ${s.className}`}
      />
    ))}
    {glyphs.map((g, i) => (
      <motion.span
        key={i}
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: g.duration, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute font-mono text-2xl text-[#38bdf8] ${g.className}`}
      >
        {g.text}
      </motion.span>
    ))}
  </div>
);

export default Background;
