// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Journey", href: "#history" },
  { label: "Project", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "history", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 font-mono tracking-wider transition-all duration-300 ${scrolled
          ? "bg-[#030712]/80 backdrop-blur-2xl border-b border-[#034694]/80 shadow-[0_4px_30px_rgba(3,70,148,0.45)] py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-6 lg:px-12 xl:px-20">
        {/* Core System Identity */}
        <motion.a href="#home" whileHover={{ scale: 1.04 }} className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded bg-[#034694]/30 border border-[#38bdf8]/60 shadow-[0_0_15px_rgba(3,70,148,0.8)]">
            <Terminal className="w-4 h-4 text-[#38bdf8]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
          </div>
          <span className="text-xs text-white font-bold">ADHITYA</span>
        </motion.a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#050d1a]/60 border border-[#034694]/60 backdrop-blur-xl p-1 rounded-lg">
          {navItems.map((item) => {
            const rawTarget = item.href.substring(1);
            const isActive = activeSection === rawTarget;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-1 text-[11px] font-bold rounded transition-colors duration-200 ${isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-[#034694]/20"
                  }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded bg-[#034694] border border-[#38bdf8]/70 shadow-[0_0_18px_rgba(56,189,248,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded border border-[#034694] bg-[#071120] text-zinc-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Terminal className="w-5 h-5 text-[#38bdf8]" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-[#034694] px-6 py-4 space-y-2"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="block px-3 py-2 text-xs rounded border border-transparent hover:border-[#034694] hover:bg-[#071120] text-zinc-300 hover:text-[#38bdf8]"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;