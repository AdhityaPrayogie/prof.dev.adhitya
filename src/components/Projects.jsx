// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ExternalLink, Sparkles } from "lucide-react";

// ponytail: Unsplash placeholders, swap for real screenshots in /public when available
const projects = [
  {
    title: "Website HIMAKOM UNIBA",
    category: "Web Application",
    desc: "Portal resmi Himpunan Mahasiswa Ilmu Komputer UNIBA: berita, pendaftaran acara, dan profil anggota.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    link: "https://himakomuniba.wuaze.com/",
    tags: ["PHP", "MySQL", "Bootstrap"],
    featured: true,
  },
  {
    title: "Kopi Senja",
    category: "Landing Page",
    desc: "Landing page kedai kopi dengan React, animasi halus, dan layout responsif.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
    link: "https://adhityaprayogie.github.io/Kopi-senja/",
    tags: ["React", "Tailwind CSS"],
    featured: false,
  },
  {
    title: "Takari Wedding Organizer",
    category: "Web Application",
    desc: "Platform jadwal acara dan reservasi paket pernikahan, dengan portal klien dan kalkulasi harga otomatis.",
    img: "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=900&auto=format&fit=crop&q=60",
    link: "https://takariwobest.wuaze.com/client/login.php",
    tags: ["PHP", "MySQL"],
    featured: true,
  },
  {
    title: "Arsip Digital KSD",
    category: "Web Application",
    desc: "Sistem arsip dokumen terpusat dengan pencarian multi-filter dan hak akses per role.",
    img: "https://plus.unsplash.com/premium_photo-1707155465554-1fe9c1638214?w=900&auto=format&fit=crop&q=60",
    link: "https://kelolaarsipksd.wuaze.com/",
    tags: ["PHP", "MySQL"],
    featured: false,
  },
];

const categories = ["Semua", "Web Application", "Landing Page"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filtered = activeFilter === "Semua"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 xl:px-20 text-zinc-200 font-mono">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5 }} className="w-full max-w-screen-2xl mx-auto space-y-10">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#38bdf8] mb-1">
            <Terminal className="w-4 h-4" />
            <span>PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Project Saya</h2>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded transition-all cursor-pointer ${activeFilter === cat
                  ? "bg-[#034694] text-white border border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.5)] font-bold"
                  : "bg-[#050d1a] border border-[#034694]/50 text-zinc-400 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -6 }}
              className="group border border-[#034694]/70 hover:border-[#38bdf8] bg-[#040916]/80 backdrop-blur-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(3,70,148,0.4)] flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden border-b border-[#034694]/40">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {item.featured && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-[10px] text-white bg-[#034694] border border-[#38bdf8]/60 px-2 py-0.5 rounded font-bold">
                    <Sparkles className="w-3 h-3 text-[#38bdf8]" />
                    Unggulan
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div className="space-y-3">
                  <span className="text-[11px] text-[#38bdf8]">{item.category}</span>
                  <h3 className="text-xl font-black text-white group-hover:text-[#38bdf8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#034694]/30 border border-[#034694] text-[#93c5fd]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#38bdf8] hover:text-white transition-colors"
                >
                  <span>Lihat Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
