import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "History", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b0b12]/80 border-b border-purple-400/10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 cursor-pointer"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px rgba(163, 94, 255, 0.8)",
          }}
        >
          Adhitya<span className="text-gray-400">.P</span>
        </motion.h1>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
            className="text-2xl font-bold transition-transform duration-300"
          >
            ☰
          </motion.div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center gap-8 text-gray-300 text-sm">
          {menuItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {item}
              </a>
              {/* Underline glow */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full rounded-full opacity-70"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-6 py-4 text-gray-300 bg-[#0b0b12]/95 backdrop-blur-md border-t border-purple-400/10"
          >
            {menuItems.map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 text-lg font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full rounded-full opacity-70"></span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
