import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import Badge from "./ui/badge";
import { Milestone, Calendar, GraduationCap, School } from "lucide-react";

const historyData = [
  {
    year: "2021 - 2025",
    place: "Universitas Bina Bangsa",
    role: "Computer Science Student & Active Member",
    description:
      "Studi di jurusan Ilmu Komputer. Aktif di Himpunan Mahasiswa Ilmu Komputer (HIMAKOM) UNIBA dalam pengelolaan platform digital, kegiatan akademik, dan seminar teknologi.",
    logo: "/Uniba.png",
    type: "University",
    icon: <GraduationCap className="w-4 h-4 text-blue-400" />,
  },
  {
    year: "2018 - 2021",
    place: "SMAN 5 Kota Serang",
    role: "High School Diploma",
    description:
      "Menempuh pendidikan menengah atas jurusan Ilmu Pengetahuan Alam dengan fokus pada pengembangan logika analitis dan teknologi informasi.",
    logo: "/sman 5.png",
    type: "High School",
    icon: <School className="w-4 h-4 text-[#93c5fd]" />,
  },
];

const History = () => {
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress, { stiffness: 400, damping: 40 });
  const progressHeight = useTransform(y, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="history"
      className="min-h-screen bg-[#060911] text-white px-6 py-28 relative overflow-hidden"
    >
      {/* Ambient background glow with #034694 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[500px] bg-[#034694]/15 blur-[160px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center mb-20">
        <Badge className="mb-3 px-3.5 py-1 text-xs border-[#034694]/50 bg-[#034694]/15 text-[#93c5fd]">
          <Milestone className="w-3.5 h-3.5 mr-1 text-[#3b82f6]" />
          Journey
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#1d70e2]">Milestones</span>
        </h2>
        <p className="text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Academic foundation and organizational experiences that shaped my career.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Center Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-zinc-800/80 rounded-full" />

        {/* Animated Progress Line with #034694 */}
        <motion.div
          style={{ height: progressHeight }}
          className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#034694] via-[#1d70e2] to-blue-400 rounded-full z-10"
        />

        <div className="space-y-14 sm:space-y-20">
          {historyData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Card */}
                <div className={`w-full md:w-[45%] ${isEven ? "md:pr-6" : "md:pl-6"}`}>
                  <Card className="border border-zinc-800/80 bg-[#0a0e18]/80 backdrop-blur-xl hover:border-[#034694]/70 transition-all duration-300 hover:shadow-xl hover:shadow-[#034694]/20 group">
                    <CardHeader className="p-6 pb-2">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <Badge variant="outline" className="text-xs gap-1.5 py-1 px-3 border-[#034694]/30 bg-[#0e1424] text-[#93c5fd]">
                          {item.icon}
                          <span>{item.type}</span>
                        </Badge>
                        <div className="flex items-center gap-1.5 text-xs text-blue-300 font-mono font-medium">
                          <Calendar className="w-3.5 h-3.5 text-[#3b82f6]" />
                          <span>{item.year}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-[#93c5fd] transition-colors">
                        {item.place}
                      </CardTitle>
                      <CardDescription className="text-xs font-semibold text-zinc-400 mt-1">
                        {item.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-2">
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Center Node Logo Indicator with #034694 border */}
                <div className="relative my-4 md:my-0 flex items-center justify-center z-20">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-14 h-14 rounded-2xl bg-[#0e1424] border-2 border-[#034694] flex items-center justify-center shadow-lg shadow-[#034694]/30 overflow-hidden p-2 group"
                  >
                    <img
                      src={process.env.PUBLIC_URL + item.logo}
                      alt={item.place}
                      className="w-full h-full object-contain filter drop-shadow group-hover:brightness-110 transition-all"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </motion.div>
                </div>

                {/* Empty spacer for opposite column */}
                <div className="hidden md:block w-full md:w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default History;