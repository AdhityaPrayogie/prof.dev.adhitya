import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HIMAKOM Website",
    desc: "Official website for the Computer Science Student Association of UNIBA. Features news, member profiles, and event management dashboard.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    link: "https://himakomuniba.wuaze.com/",
  },
  {
    title: "Coffee Shop Clone",
    desc: "A modern coffee shop website clone built with React and Tailwind CSS, designed with minimalist and cozy vibes.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
    link: "https://adhityaprayogie.github.io/Kopi-senja/",
  },
  {
    title: "Perfume Store",
    desc: "Elegant e-commerce concept for a perfume store with focus on smooth transitions, dark theme, and refined UI details.",
    img: "https://images.unsplash.com/photo-1756569631439-ba94c840478c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcmZ1bWUlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://perfume-store.example.com",
  },
  {
    title: "Company Profile",
    desc: "Corporate profile website template built for startups and businesses, showcasing services, team, and portfolios.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    link: "https://company-profile.example.com",
  },
  {
    title: "Wedding Organizer",
    desc: "Full wedding website with client dashboard, package management, and elegant dark interface — designed for Takari Wedding Organizer.",
    img: "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "https://takariwobest.wuaze.com/client/login.php",
  },
  {
    title: "Digital Archive Website",
    desc: "A digital archive platform for storing, managing, and searching documents efficiently with a user-friendly interface and secure access.",
    img: "https://plus.unsplash.com/premium_photo-1707155465554-1fe9c1638214?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRva3VtZW58ZW58MHx8MHx8fDA%3D", // contoh pakai gambar dari public folder
    link: "https://kelolaarsipksd.wuaze.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#0b0b12] text-center relative overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-purple-900/10 via-transparent to-cyan-900/10 blur-3xl opacity-50"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
      >
        My Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="group relative overflow-hidden rounded-2xl bg-[#141422]/70 border border-purple-400/10 hover:border-purple-400/30 shadow-lg shadow-purple-900/10 backdrop-blur-sm transition-all duration-500 cursor-pointer"
          >
            {/* Gambar Project */}
            <div className="overflow-hidden rounded-t-2xl">
              <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay gradient lembut */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12]/90 via-[#0b0b12]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Deskripsi */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-md">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>

            {/* Border neon halus */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-400/40 transition-all duration-500 pointer-events-none"></div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
