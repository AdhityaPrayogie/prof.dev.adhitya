// src/components/FloatingSocial.jsx
import React, { useState } from "react";
import { Github, Linkedin, Instagram, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/AdhityaPrayogie",
      color: "bg-gray-900 hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/adhitya-prayogie-98b253386?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "bg-blue-700 hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://instagram.com/adhitya_p19",
      color: "bg-pink-500 hover:bg-pink-400",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Container sosial + blur di belakang */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-col items-center mb-4"
          >
            {/* Blur di belakang tombol sosial */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-full rounded-2xl bg-white/20 backdrop-blur-md z-0"
              style={{
                height: `${socials.length * 80 + (socials.length - 1) * 13}px`,
              }} // tombol + gap
            ></div>

            <div className="flex flex-col items-center gap-3">
              {" "}
              {/* gap antar tombol */}
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 10,
                    boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
                  }}
                  className={`flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg transition-all duration-300 ${social.color} relative z-10`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol utama */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full bg-black text-white shadow-xl flex items-center justify-center relative"
      >
        <Plus size={28} />
        <span className="absolute w-20 h-20 rounded-full bg-purple-400/30 animate-pulse -z-10"></span>
      </motion.button>
    </div>
  );
};

export default FloatingSocial;
