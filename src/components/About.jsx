import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const skills = [
  "React",
  "Laravel",
  "PHP",
  "JavaScript",
  "TailwindCSS",
  "MySQL",
];

const About = () => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const translateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateAmount = 12;
    rotateY.set(((x - midX) / midX) * rotateAmount);
    rotateX.set(-((y - midY) / midY) * rotateAmount);
    translateY.set(((y - midY) / midY) * 10);
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, { type: "spring", stiffness: 100, damping: 12 });
    animate(rotateY, 0, { type: "spring", stiffness: 100, damping: 12 });
    animate(translateY, 0, { type: "spring", stiffness: 100, damping: 12 });
  };

  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0b0b12] text-gray-300 flex flex-col md:flex-row items-center justify-center gap-12 relative overflow-hidden"
    >
      {/* Background aura lembut */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10 blur-3xl opacity-40"></div>

      {/* Kiri - Deskripsi & Skill Box */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          I'm a{" "}
          <span className="text-purple-400 font-medium">
            Computer Science Fresh Graduate
          </span>{" "}
          from Universitas Bina Bangsa, with strong attention to detail,
          organizational skills, and a passion for learning. I have experience
          as an IT Support Intern and active involvement in student
          organizations, handling digital administration, data management, and
          technical support.
        </p>

        {/* Skill Boxes - Glassmorphism Style */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.05)",
                boxShadow: "0 0 25px rgba(160, 100, 255, 0.25)",
                borderColor: "rgba(168, 85, 247, 0.6)",
              }}
              className="text-sm font-medium px-4 py-2 rounded-xl text-white bg-white/5 backdrop-blur-md border border-white/10 text-center transition-all duration-300 select-none"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Kanan - Lanyard Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-72 h-[380px] flex flex-col items-center justify-start cursor-pointer"
        style={{
          perspective: 1000,
        }}
      >
        {/* Tali lanyard */}
        <motion.div
          style={{
            y: useTransform(translateY, (v) => v * 0.4),
            rotateY: useTransform(rotateY, (v) => v * 0.2),
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-[2px] bg-gradient-to-b from-cyan-400/70 to-purple-500/40 rounded-full origin-top"
        ></motion.div>

        {/* Card menggantung */}
        <motion.div
          style={{
            rotateX: useTransform(rotateX, (v) => `${v}deg`),
            rotateY: useTransform(rotateY, (v) => `${v}deg`),
            y: translateY,
            transformStyle: "preserve-3d",
          }}
          className="relative bg-[#141422] rounded-2xl p-6 w-72 shadow-lg shadow-purple-900/20 border border-purple-400/10 hover:border-purple-400/30 transition-all duration-500"
        >
          {/* Clip pengait di atas card */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-gray-400/80 to-gray-600/40 rounded-t-md"></div>

          <div className="overflow-hidden rounded-xl mb-4">
            <motion.img
              src={process.env.PUBLIC_URL + "/profile1.jpg"}
              alt="Adhitya"
              className="w-full h-72 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
              style={{ transform: "translateZ(40px)" }}
            />
          </div>

          <h3 className="text-xl font-semibold text-white">Adhitya Prayogie</h3>
          <p className="text-purple-400 font-medium">Front-End Developer</p>
        </motion.div>

        {/* Glow belakang */}
        <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
      </motion.div>
    </section>
  );
};

export default About;
