import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const historyData = [
  {
    year: "2018 - 2021",
    place: "SMAN 5 Kota Serang",
    description:
      "Menempuh pendidikan SMA dengan fokus pada ilmu pengetahuan umum dan pengembangan diri.",
    logo: "/sman 5.png",
  },
  {
    year: "2021 - 2025",
    place: "Universitas Bina Bangsa",
    description:
      "Studi di jurusan Ilmu Komputer, pernah aktif di organisasi Himpunan Mahasiswa Ilmu Komputer Uniba.",
    logo: "/uniba.png",
  },
];

const History = () => {
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress, { stiffness: 600, damping: 50 });

  // Transform untuk panjang progress bar
  const progressHeight = useTransform(y, [0, 1], ["-30%", "150%"]);

  return (
    <section
      id="history"
      className="min-h-screen bg-[#0b0b12] text-white px-6 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        My History
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Garis vertikal dasar */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gray-800 rounded-full" />

        {/* Garis progress scroll */}
        <motion.div
          style={{ height: progressHeight }}
          className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"
        >
          {/* Ujung bawah bersinar */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-purple-400 shadow-[0_0_15px_5px_rgba(165,108,255,0.7)]" />
        </motion.div>

        <ul className="space-y-24">
          {historyData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {isLeft && (
                  <div className="md:w-1/2 md:pr-8 flex flex-col items-end text-right">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden shadow-lg mb-4">
                      <img
                        src={process.env.PUBLIC_URL + item.logo}
                        alt={item.place}
                        className="w-full h-full object-contain bg-white p-1"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{item.place}</h3>
                    <p className="text-gray-400">{item.year}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                )}

                <div className="hidden md:block w-1/2" />

                {!isLeft && (
                  <div className="md:w-1/2 md:pl-8 flex flex-col items-start">
                    <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden shadow-lg mb-4">
                      <img
                        src={process.env.PUBLIC_URL + item.logo}
                        alt={item.place}
                        className="w-full h-full object-contain bg-white p-1"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{item.place}</h3>
                    <p className="text-gray-400">{item.year}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default History;
