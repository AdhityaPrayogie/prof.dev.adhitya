// src/components/Hero.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle, Download, Sparkles, Terminal, Code2, Layers } from "lucide-react";
import Button from "./ui/button";
import Badge from "./ui/badge";

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-6 pt-24 pb-16 bg-[#060911]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-tr from-[#034694]/25 via-blue-900/15 to-[#022b5b]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-2/3 right-10 -z-10 w-72 h-72 bg-[#034694]/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0c_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl flex flex-col items-center z-10"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <Badge className="px-4 py-1.5 text-xs sm:text-sm gap-2 rounded-full border-[#034694]/50 bg-[#034694]/15 text-zinc-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1d70e2]"></span>
            </span>
            <span>Available for Opportunities</span>
            <Sparkles className="w-3.5 h-3.5 text-[#93c5fd] ml-1" />
          </Badge>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white"
        >
          Building Modern &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#1d70e2] drop-shadow-[0_0_30px_rgba(3,70,148,0.5)]">
            Impactful Web
          </span>{" "}
          Experiences.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-400 text-base sm:text-lg md:text-xl mb-10 leading-relaxed max-w-2xl font-normal"
        >
          Hi, I'm <span className="text-white font-semibold">Adhitya Prayogie</span>. A Front-End Developer crafting intuitive, high-performance web applications with clean architecture and modern motion aesthetics.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Explore Projects Button */}
          <Button
            size="lg"
            asChild
            className="rounded-xl shadow-lg shadow-[#034694]/30 bg-[#034694] hover:bg-[#023877] text-white group"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2.5 font-semibold text-base"
            >
              <span>Explore My Work</span>
              <ArrowDownCircle className="w-5 h-5 text-[#93c5fd] group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
          </Button>

          {/* Download CV Button */}
          <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-xl border-zinc-800 bg-[#0a0e18]/60 hover:border-[#034694]/60 hover:bg-[#034694]/10 group"
          >
            <motion.a
              href="https://drive.google.com/drive/folders/1NNkktzceniY4MpdxoPePuBD-ttTUkWVj?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2.5 font-semibold text-base"
            >
              <Download className="w-5 h-5 text-zinc-400 group-hover:text-[#3b82f6] transition-colors" />
              <span>Download CV</span>
            </motion.a>
          </Button>
        </motion.div>

        {/* Highlight Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0a0e18] border border-zinc-800/80">
            <Code2 className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span>React 19 & TailwindCSS</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0a0e18] border border-zinc-800/80">
            <Layers className="w-3.5 h-3.5 text-[#93c5fd]" />
            <span>Shadcn UI Primitives</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0a0e18] border border-zinc-800/80">
            <Terminal className="w-3.5 h-3.5 text-[#1d70e2]" />
            <span>Framer Motion Physics</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee Ticker */}
      <div
        className="w-full mt-16 pt-6 border-t border-border/40 overflow-hidden select-none cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div
          animate={isPaused ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={{
            repeat: isPaused ? 0 : Infinity,
            duration: 25,
            ease: "linear",
          }}
          className="flex whitespace-nowrap text-3xl md:text-5xl font-extrabold uppercase tracking-widest text-muted/20"
        >
          <span className="mx-8 hover:text-primary/30 transition-colors">
            Adhitya Prayogie • Front-End Developer • Web Enthusiast • UI Designer •
          </span>
          <span className="mx-8 hover:text-primary/30 transition-colors">
            Adhitya Prayogie • Front-End Developer • Web Enthusiast • UI Designer •
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;