// src/components/FloatingSocial.jsx
import React, { useState } from "react";
import { Github, Linkedin, Instagram, Plus, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/AdhityaPrayogie",
      color: "hover:bg-zinc-800 text-zinc-100 border-zinc-700/60",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/adhitya-prayogie-98b253386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:bg-blue-600/30 text-blue-400 border-blue-500/30",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://instagram.com/adhitya_p19",
      color: "hover:bg-pink-600/30 text-pink-400 border-pink-500/30",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Social Items Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 450, damping: 28 }}
            className="flex flex-col items-end gap-3 mb-3"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08, x: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl 
                  bg-[#0a0e18]/95 backdrop-blur-xl border shadow-xl shadow-black/60 
                  transition-colors group cursor-pointer
                  ${social.color}
                `}
              >
                <span className="text-xs font-semibold text-zinc-300 group-hover:text-white">
                  {social.name}
                </span>
                <div className="w-8 h-8 rounded-xl bg-[#0e1424] flex items-center justify-center border border-zinc-800">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button with #034694 */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="w-13 h-13 p-3.5 rounded-2xl bg-gradient-to-tr from-[#034694] to-[#1d70e2] text-white shadow-xl shadow-[#034694]/40 border border-blue-400/40 flex items-center justify-center cursor-pointer focus:outline-none"
        aria-label="Toggle Social Links"
      >
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {isOpen ? <Plus size={24} /> : <MessageCircle size={24} />}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingSocial;