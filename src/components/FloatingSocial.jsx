// src/components/FloatingSocial.jsx
import React, { useState } from "react";
import { Github, Linkedin, Instagram, Radio, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const relays = [
  { label: "GitHub", icon: <Github size={15} />, url: "https://github.com/AdhityaPrayogie" },
  { label: "LinkedIn", icon: <Linkedin size={15} />, url: "https://www.linkedin.com/in/adhitya-prayogie-98b253386" },
  { label: "Instagram", icon: <Instagram size={15} />, url: "https://instagram.com/adhitya_p19" },
];

const FloatingSocial = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="flex flex-col items-end gap-2 mb-3"
          >
            {relays.map((r) => (
              <a
                key={r.label}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#040916]/95 border border-[#034694] hover:border-[#38bdf8] text-xs text-zinc-200 hover:text-white shadow-[0_0_15px_rgba(3,70,148,0.5)]"
              >
                <span>{r.label}</span>
                <span className="text-[#38bdf8]">{r.icon}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#034694] to-[#022b5e] border-2 border-[#38bdf8] text-white flex items-center justify-center shadow-[0_0_25px_rgba(3,70,148,0.8)] cursor-pointer"
        aria-label="Social links"
      >
        {open ? <X size={20} /> : <Radio size={20} className="text-[#38bdf8] animate-pulse" />}
      </button>
    </div>
  );
};

export default FloatingSocial;