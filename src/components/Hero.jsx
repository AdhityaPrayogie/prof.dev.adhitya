// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowUpRight, Cpu, Activity, ShieldCheck } from "lucide-react";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const skills = [
  { icon: <Cpu className="w-3.5 h-3.5 text-[#38bdf8]" />, label: "Frontend", value: "React / JavaScript" },
  { icon: <Activity className="w-3.5 h-3.5 text-[#38bdf8]" />, label: "Backend", value: "PHP / Laravel / SQL" },
  { icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />, label: "Pendidikan", value: "S.Kom, Ilmu Komputer" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center font-mono relative overflow-hidden px-6 pt-28 pb-16 lg:px-12 xl:px-20 text-zinc-200"
    >
      {/* Glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[500px] bg-gradient-to-b from-[#034694]/40 via-[#022855]/20 to-transparent blur-[180px] pointer-events-none rounded-full"
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#03469418_1px,transparent_1px),linear-gradient(to_bottom,#03469418_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl w-full border border-[#034694]/80 bg-[#040916]/85 backdrop-blur-2xl rounded-xl shadow-[0_0_50px_rgba(3,70,148,0.35)] overflow-hidden relative"
      >
        <div className="p-6 sm:p-10 lg:p-14 space-y-6 text-left relative">
          <div className="space-y-3">
            <motion.div
              {...fadeUp(0.2)}
              className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#034694]/20 border border-[#034694] text-[#38bdf8] text-[10px] font-semibold tracking-widest uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38bdf8]" />
              </span>
              Front-End Developer
            </motion.div>
            <motion.h1 {...fadeUp(0.35)} className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
              ADHITYA <span className="text-[#38bdf8]">PRAYOGIE</span>
            </motion.h1>
            <motion.p {...fadeUp(0.5)} className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed max-w-xl">
              Lulusan S.Kom yang membangun website cepat, rapi, dan responsif dengan React dan Laravel.
            </motion.p>
          </div>

          {/* Skill summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {skills.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(0.65 + i * 0.1)}
                whileHover={{ y: -4 }}
                className="p-3 bg-[#061022]/80 border border-[#034694] rounded-lg hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-colors"
              >
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                  {s.icon}
                  <span>{s.label}</span>
                </div>
                <p className="text-xs font-bold text-white mt-1">{s.value}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div {...fadeUp(1)} className="pt-3 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold rounded bg-[#034694] hover:bg-[#045ac0] text-white border border-[#38bdf8]/60 shadow-[0_0_20px_rgba(3,70,148,0.8)] transition-colors"
            >
              <span>Lihat Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#38bdf8]" />
            </motion.a>

            <motion.a
              href="https://drive.google.com/drive/folders/1NNkktzceniY4MpdxoPePuBD-ttTUkWVj?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs rounded border border-[#034694] bg-[#050d1a] hover:border-[#38bdf8] text-zinc-300 hover:text-white transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
