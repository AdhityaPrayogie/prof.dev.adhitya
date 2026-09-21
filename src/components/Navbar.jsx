import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Send } from "lucide-react";
import Button from "./ui/button";
import Badge from "./ui/badge";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "History", href: "#history" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.substring(1));
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07070b]/80 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 max-w-6xl">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#034694] to-[#1d70e2] flex items-center justify-center font-bold text-white shadow-md shadow-[#034694]/30 group-hover:shadow-[#034694]/50 transition-shadow">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
              Adhitya<span className="text-[#3b82f6] font-black">.P</span>
            </span>
          </div>
          <Badge className="hidden sm:inline-flex text-[10px] py-0 px-2 ml-1 bg-[#034694]/20 border border-[#034694]/50 text-[#93c5fd]">
            Dev
          </Badge>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0a0e18]/80 border border-zinc-800/80 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner shadow-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-[#034694]/30 border border-[#034694]/70 rounded-full shadow-[0_0_12px_rgba(3,70,148,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="rounded-full border-[#034694]/50 bg-[#034694]/10 hover:bg-[#034694] hover:text-white text-zinc-200 transition-all"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-[#3b82f6]" />
              <span>Hire Me</span>
            </motion.a>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="text-foreground hover:bg-secondary rounded-xl"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#060911]/95 backdrop-blur-2xl border-b border-zinc-800/80 px-6 py-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.href.substring(1)
                      ? "bg-[#034694]/20 text-white border border-[#034694]/40"
                      : "text-zinc-400 hover:bg-[#0e1424] hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  <Sparkles className="w-4 h-4 text-[#3b82f6] opacity-80" />
                </motion.a>
              ))}
              <div className="pt-3">
                <Button
                  className="w-full rounded-xl bg-[#034694] hover:bg-[#02336e] text-white font-semibold shadow-lg shadow-[#034694]/40 border border-[#1d70e2]/50"
                  asChild
                >
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#93c5fd]" />
                    <span>Get In Touch</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;