// src/components/Hero.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle, Download } from "lucide-react";

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-6 bg-[#0b0b12]"
    >
      {/* Background Glow lembut */}
      <div className="absolute -z-10 w-[900px] h-[900px] bg-gradient-to-r from-purple-600/30 via-pink-400/25 to-cyan-400/25 blur-[160px] opacity-15 rounded-full top-1/3 left-1/2 -translate-x-1/2"></div>

      {/* Konten Tengah */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-2xl flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I'm{" "}
          <motion.span
            initial={{ filter: "blur(12px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-extrabold inline-block"
          >
            Adhitya Prayogie
          </motion.span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
          Professional Front-End Developer building modern & interactive web
          experiences for businesses and personal projects.
        </p>

        {/* Tombol aksi */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Explore Projects */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-lg font-semibold border border-purple-400/30 rounded-full px-6 py-3 hover:bg-purple-500/10 backdrop-blur-md transition-all duration-300"
          >
            Explore My Work{" "}
            <ArrowDownCircle className="w-5 h-5 text-cyan-300/80" />
          </motion.a>

          {/* Download CV */}
          <motion.a
            href="https://drive.google.com/drive/folders/1NNkktzceniY4MpdxoPePuBD-ttTUkWVj?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 text-lg font-semibold border border-purple-400/30 rounded-full px-6 py-3 hover:bg-purple-500/10 backdrop-blur-md transition-all duration-300"
          >
            <Download className="w-5 h-5 text-cyan-300/80" />
            Download CV
          </motion.a>
        </div>
      </motion.div>

      {/* Marquee Outline di Bawah */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 overflow-hidden select-none cursor-pointer"
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -200, right: 200 }}
          animate={isPaused ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={{
            repeat: isPaused ? 0 : Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex whitespace-nowrap text-5xl md:text-6xl font-extrabold uppercase tracking-widest"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.3)",
            color: "transparent",
          }}
        >
          <span className="mx-10 opacity-70">
            Adhitya — Front-End Developer —
          </span>
          <span className="mx-10 opacity-70">
            Adhitya — Front-End Developer —
          </span>
          <span className="mx-10 opacity-70">
            Adhitya — Front-End Developer —
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
