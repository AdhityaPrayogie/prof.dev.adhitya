// src/components/About.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Badge from "./ui/badge";
import {
  GraduationCap,
  Briefcase,
  Code2,
  User,
  MapPin,
  Award,
  FolderGit2,
  Layers,
  Server,
  Wrench
} from "lucide-react";

const skillList = [
  {
    category: "Frontend Engineering",
    icon: <Layers className="w-4 h-4 text-[#1d70e2]" />,
    items: [
      { name: "React.js", desc: "Component architecture, Hooks, State management" },
      { name: "JavaScript (ES6+)", desc: "Async/await, DOM APIs, modern syntax" },
      { name: "Tailwind CSS", desc: "Utility-first design, custom design tokens, responsive" },
      { name: "Framer Motion", desc: "Interactive gestures, physics-based springs, layout animations" },
    ],
  },
  {
    category: "Backend & Database",
    icon: <Server className="w-4 h-4 text-[#1d70e2]" />,
    items: [
      { name: "PHP & Laravel", desc: "MVC pattern, Blade templating, REST endpoints" },
      { name: "MySQL", desc: "Relational database design, queries, normalization" },
    ],
  },
  {
    category: "Tools & Professional Support",
    icon: <Wrench className="w-4 h-4 text-[#1d70e2]" />,
    items: [
      { name: "Git & GitHub", desc: "Version control, branching workflows, deployments" },
      { name: "IT Support & Admin", desc: "Hardware troubleshooting, digital systems, documentation" },
    ],
  },
];

const About = () => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const translateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateAmount = 8;

    rotateY.set(((x - midX) / midX) * rotateAmount);
    rotateX.set(-((y - midY) / midY) * rotateAmount);
    translateY.set(((y - midY) / midY) * 5);
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, { type: "spring", stiffness: 120, damping: 14 });
    animate(rotateY, 0, { type: "spring", stiffness: 120, damping: 14 });
    animate(translateY, 0, { type: "spring", stiffness: 120, damping: 14 });
  };

  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#060911] text-foreground flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background #034694 Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 -z-10 w-[650px] h-[450px] bg-[#034694]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-[550px] h-[400px] bg-[#034694]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <Badge className="mb-3 px-3.5 py-1 text-xs border-[#034694]/50 bg-[#034694]/15 text-[#93c5fd]">
            <User className="w-3.5 h-3.5 mr-1.5 text-[#3b82f6]" />
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#1d70e2]">Profile</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Background, technical expertise, and development capabilities.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Left Column: Bio & Detailed Tech List */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Bio Card */}
            <Card className="border border-zinc-800/80 bg-[#0a0e18]/80 backdrop-blur-xl">
              <CardHeader className="p-7 pb-4">
                <CardTitle className="text-xl font-bold text-white tracking-tight">
                  Software Engineering & Background
                </CardTitle>
                <CardDescription className="text-zinc-400 text-sm mt-1 leading-relaxed">
                  Building responsive web applications with clean architecture and modern motion.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-7 pt-0 flex flex-col gap-5">
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                  I am a <span className="text-white font-semibold">Computer Science Graduate</span> from <span className="text-blue-300 font-medium">Universitas Bina Bangsa</span>. Experienced in IT support, digital administration, and modern web application development. I prioritize clean code readability, modular components, and fast load times.
                </p>

                {/* Education & Role Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0e1424] border border-[#034694]/30">
                    <div className="w-9 h-9 rounded-lg bg-[#034694]/20 border border-[#034694]/40 flex items-center justify-center text-[#93c5fd] flex-shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#93c5fd] uppercase tracking-wider font-semibold">Degree</p>
                      <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">S.Kom - Computer Science</p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Universitas Bina Bangsa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0e1424] border border-[#034694]/30">
                    <div className="w-9 h-9 rounded-lg bg-[#034694]/20 border border-[#034694]/40 flex items-center justify-center text-[#93c5fd] flex-shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#93c5fd] uppercase tracking-wider font-semibold">Specialization</p>
                      <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">Front-End Development</p>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Web Apps & IT Support</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Structured Skill Cards with #034694 Theme */}
            <Card className="border border-zinc-800/80 bg-[#0a0e18]/80 backdrop-blur-xl">
              <CardHeader className="p-6 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#3b82f6]" />
                    <CardTitle className="text-base font-semibold text-white">
                      Technical Competencies & Skills
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="text-[10px] border-[#034694]/40 bg-[#034694]/10 text-[#93c5fd]">
                    Adhitya
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-1 flex flex-col gap-4">
                {skillList.map((group) => (
                  <div key={group.category} className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                      {group.icon}
                      <span>{group.category}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {group.items.map((item) => (
                        <motion.div
                          key={item.name}
                          whileHover={{ y: -2 }}
                          className="flex flex-col p-3 rounded-xl bg-[#0e1424]/70 border border-zinc-800/80 hover:border-[#034694]/70 hover:bg-[#0e1424] hover:shadow-md hover:shadow-[#034694]/20 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-[#034694] group-hover:bg-[#3b82f6] transition-colors" />
                            <span className="text-xs font-semibold text-white tracking-tight group-hover:text-[#93c5fd] transition-colors">
                              {item.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: 3D Interactive Profile & Quick Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full h-full flex flex-col justify-between cursor-pointer select-none"
              style={{ perspective: 1200 }}
            >
              <motion.div
                style={{
                  rotateX: useTransform(rotateX, (v) => `${v}deg`),
                  rotateY: useTransform(rotateY, (v) => `${v}deg`),
                  y: translateY,
                  transformStyle: "preserve-3d",
                }}
                className="w-full h-full"
              >
                <Card className="h-full flex flex-col justify-between border border-[#034694]/40 bg-[#0a0e18]/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl shadow-black/80 hover:border-[#034694]/80 transition-all duration-300">
                  {/* Card Header Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1d70e2]"></span>
                      </span>
                      <span className="text-xs font-semibold text-zinc-200">Open for Opportunities</span>
                    </div>
                    <Badge variant="outline" className="text-[10px] bg-[#034694]/20 border-[#034694]/50 text-[#93c5fd] font-mono">
                      DEV #019
                    </Badge>
                  </div>

                  {/* Profile Photo */}
                  <div className="overflow-hidden rounded-xl mb-5 bg-zinc-900 border border-[#034694]/30 relative group aspect-[4/4.5]">
                    <img
                      src={process.env.PUBLIC_URL + "/profile1.jpg"}
                      alt="Adhitya Prayogie"
                      className="w-full h-full object-cover object-top grayscale-[10%] group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80";
                      }}
                    />
                    <div className="absolute bottom-3 left-3">
                      <Badge className="text-[11px] bg-[#034694]/85 backdrop-blur-md border border-[#3b82f6]/40 text-white font-medium shadow-md shadow-[#034694]/40">
                        Front-End Developer
                      </Badge>
                    </div>
                  </div>

                  {/* Profile Meta Details */}
                  <div className="text-left">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        Adhitya Prayogie
                      </h3>
                      <span className="text-xs font-mono text-[#93c5fd]">CS Graduate</span>
                    </div>

                    <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#3b82f6]" />
                      <span>Serang, Banten, Indonesia</span>
                    </p>

                    {/* Quick Metrics Bar with #034694 accents */}
                    <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-zinc-800/80">
                      <div className="p-2.5 rounded-lg bg-[#0e1424] border border-[#034694]/30">
                        <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium flex items-center gap-1">
                          <FolderGit2 className="w-3 h-3 text-[#3b82f6]" />
                          <span>Projects</span>
                        </p>
                        <p className="text-base font-bold text-white mt-0.5">6+ Built</p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-[#0e1424] border border-[#034694]/30">
                        <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium flex items-center gap-1">
                          <Award className="w-3 h-3 text-[#3b82f6]" />
                          <span>Status</span>
                        </p>
                        <p className="text-base font-bold text-white mt-0.5">Fresh Grad</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



