// src/components/About.jsx
import { motion } from "framer-motion";
import React from "react";
import { Terminal, Database, Server, Cpu, MapPin, Award, Briefcase } from "lucide-react";

const skills = [
  { layer: "Frontend", icon: Cpu, stack: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion"] },
  { layer: "Backend", icon: Server, stack: ["PHP & Laravel", "MySQL", "REST API"] },
  { layer: "Tools & IT Support", icon: Database, stack: ["Git", "SIMRS", "Troubleshooting", "Jaringan"] },
];

const info = [
  { icon: MapPin, label: "Lokasi", value: "Serang, Banten" },
  { icon: Award, label: "Pendidikan", value: "S.Kom, Ilmu Komputer" },
  { icon: Briefcase, label: "Pekerjaan", value: "RS Mata Achmad Wardi BWI-DD" },
];

const card = "border border-[#034694]/80 bg-[#040916]/90 backdrop-blur-2xl rounded-xl shadow-[0_0_35px_rgba(3,70,148,0.25)]";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 xl:px-20 text-zinc-200 font-mono">
      <div className="w-full max-w-screen-2xl mx-auto space-y-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-2 text-xs text-[#38bdf8] mb-1">
            <Terminal className="w-4 h-4" />
            <span>ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Tentang Saya</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-4 ${card} p-6 flex flex-col gap-6`}
          >
            <div className="relative aspect-square w-full max-w-[280px] mx-auto rounded-xl overflow-hidden border-2 border-[#034694] shadow-[0_0_25px_rgba(3,70,148,0.4)]">
              <img
                src={process.env.PUBLIC_URL + "/profile1.jpg"}
                alt="Adhitya Prayogie"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-black text-white">Adhitya Prayogie</h3>
              <p className="text-xs text-[#38bdf8] mt-1">Front-End Developer</p>
            </div>

            <ul className="mt-auto space-y-3 text-xs border-t border-[#034694]/50 pt-5">
              {info.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-lg bg-[#034694]/30 border border-[#034694] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#38bdf8]" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-zinc-500 text-[10px]">{label}</span>
                    <span className="text-zinc-200">{value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Intro + skills */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`${card} p-6 sm:p-8`}
            >
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Lulusan <span className="text-white font-semibold">Sarjana Ilmu Komputer (S.Kom)</span> dari{" "}
                <span className="text-[#38bdf8]">Universitas Bina Bangsa</span>. Berpengalaman membangun website dan
                menangani infrastruktur TI, kini bekerja di <span className="text-white font-semibold">RS Mata Achmad Wardi BWI-DD</span>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1">
              {skills.map(({ layer, icon: Icon, stack }, i) => (
                <motion.div
                  key={layer}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className={`${card} p-5 flex flex-col gap-4 hover:border-[#38bdf8] transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-[#034694]/30 border border-[#034694] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#38bdf8]" />
                    </span>
                    <h4 className="text-sm font-bold text-white">{layer}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((s) => (
                      <span key={s} className="text-[11px] px-2.5 py-1 rounded-md bg-[#061022] border border-[#034694]/70 text-zinc-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
