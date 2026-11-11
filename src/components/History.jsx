// src/components/History.jsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import { Terminal, Calendar, ChevronDown, School, GraduationCap, Stethoscope, Briefcase } from "lucide-react";

// Urut kronologis: atas = paling awal, bawah = sekarang.
const journey = [
  {
    period: "2015 – 2018",
    tag: "SMP",
    title: "SMPN 17 Kota Serang",
    logo: process.env.PUBLIC_URL + "/SMP17-nobg.png",
    icon: School,
  },
  {
    period: "2018 – 2021",
    tag: "SMA",
    title: "SMAN 5 Kota Serang",
    logo: process.env.PUBLIC_URL + "/sman 5.png",
    desc: "Jurusan IPA.",
    icon: School,
  },
  {
    period: "2021 – 2025",
    tag: "Kuliah",
    title: "Universitas Bina Bangsa (S.Kom)",
    logo: process.env.PUBLIC_URL + "/Uniba.png",
    desc: "Lulus Sarjana Ilmu Komputer. Aktif di HIMAKOM UNIBA, mengelola website himpunan dan workshop teknologi.",
    icon: GraduationCap,
  },
  {
    period: "November 2025 – Juni 2026",
    tag: "Magang",
    title: "RS Mata Achmad Wardi BWI-DD",
    logo: process.env.PUBLIC_URL + "/rsaw.webp",
    desc: "Magang di bidang IT rumah sakit.",
    icon: Stethoscope,
  },
  {
    period: "Juli 2026 – Sekarang",
    tag: "Karyawan",
    title: "RS Mata Achmad Wardi BWI-DD",
    logo: process.env.PUBLIC_URL + "/rsaw.webp",
    desc: "Lanjut sebagai karyawan tetap setelah masa magang.",
    icon: Briefcase,
    current: true,
  },
];

// Ikon abu-abu sampai ujung garis progress melewati tengahnya.
const Dot = ({ item, progress, container }) => {
  const ref = useRef(null);
  const [lit, setLit] = useState(false);
  useMotionValueEvent(progress, "change", (v) => {
    const el = ref.current;
    if (!el || !container.current) return;
    const center = el.offsetParent.offsetTop + el.offsetTop + el.offsetHeight / 2;
    setLit(v * container.current.offsetHeight >= center);
  });
  const Icon = item.icon;
  const on = item.current
    ? "border-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.6)] text-emerald-400"
    : "border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.5)] text-[#38bdf8]";
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      whileInView={{ scale: lit ? 1.1 : 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`absolute left-5 md:left-1/2 top-4 -ml-5 z-10 w-10 h-10 rounded-full bg-[#02050c] border-2 flex items-center justify-center transition-[border-color,color,box-shadow] duration-500 ${lit ? on : "border-zinc-700 text-zinc-600"}`}
    >
      <Icon className="w-4 h-4" />
    </motion.div>
  );
};

const History = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.6, restDelta: 0.001 });
  const tipTop = useTransform(lineScale, (v) => `${v * 100}%`);

  return (
    <section id="history" className="py-24 px-6 lg:px-12 xl:px-20 text-zinc-200 font-mono">
      <div className="w-full max-w-screen-2xl mx-auto space-y-14">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-2 text-xs text-[#38bdf8] mb-1">
            <Terminal className="w-4 h-4" />
            <span>JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Perjalanan Saya</h2>
        </motion.div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Garis dasar + garis progress yang turun mengikuti scroll */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 -ml-px bg-[#034694]/40" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 -ml-px origin-top bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]"
          />
          {/* Ujung panah yang ikut turun */}
          <motion.div style={{ top: tipTop }} className="absolute left-5 md:left-1/2 -ml-3 -mt-3 z-[5] w-6 h-6 pointer-events-none">
            <motion.div
              animate={{ y: [0, 4, 0], rotate: [-8, 8, -8] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full rounded-full bg-[#02050c] border border-[#38bdf8] flex items-center justify-center shadow-[0_0_16px_#38bdf8]"
            >
              <ChevronDown className="w-4 h-4 text-[#38bdf8]" />
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            {journey.map((item, i) => {
              const right = i % 2 === 1;
              return (
                <div key={item.tag} className="relative md:grid md:grid-cols-2 md:gap-16">
                  {/* Titik / ikon di garis */}
                  <Dot item={item} progress={lineScale} container={ref} />

                  {/* Kartu: turun dari atas saat masuk layar */}
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className={`ml-14 md:ml-0 ${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}
                  >
                    <div className="border border-[#034694]/80 hover:border-[#38bdf8] bg-[#040916]/90 backdrop-blur-xl rounded-xl p-5 space-y-2 shadow-[0_0_25px_rgba(3,70,148,0.25)] transition-colors">
                      <div className={`flex flex-wrap items-center gap-2 text-xs ${right ? "" : "md:justify-end"}`}>
                        <span className={`px-2 py-0.5 rounded font-bold border ${item.current ? "text-emerald-400 border-emerald-400/50 bg-emerald-400/10" : "text-[#38bdf8] border-[#034694] bg-[#034694]/20"}`}>
                          {item.tag}
                        </span>
                        <span className="flex items-center gap-1 text-zinc-400">
                          <Calendar className="w-3 h-3 text-[#38bdf8]" />
                          {item.period}
                        </span>
                      </div>
                      <div className={`flex items-center gap-3 pt-1 ${right ? "" : "md:flex-row-reverse"}`}>
                        <div className="shrink-0 h-12 min-w-[3rem] max-w-[11rem] px-2 rounded-lg bg-white flex items-center justify-center">
                          <img src={item.logo} alt={`Logo ${item.title}`} loading="lazy" className="max-h-10 w-auto object-contain" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      </div>
                      {item.desc && <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">{item.desc}</p>}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
