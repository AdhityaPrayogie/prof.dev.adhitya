import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Badge from "./ui/badge";
import Button from "./ui/button";
import { ExternalLink, Layers, Sparkles } from "lucide-react";

const projects = [
  {
    title: "HIMAKOM Website",
    category: "Web Application",
    desc: "Official portal for the Computer Science Student Association of UNIBA. Features organizational news, member profiles, and event management dashboard.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    link: "https://himakomuniba.wuaze.com/",
    tags: ["PHP", "MySQL", "Bootstrap", "Portal"],
    featured: true,
  },
  {
    title: "Coffee Shop Clone",
    category: "Landing Page",
    desc: "A modern coffee shop landing page built with React and Tailwind CSS, featuring cozy minimalist aesthetics, smooth menu browsing, and clean responsive layout.",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
    link: "https://adhityaprayogie.github.io/Kopi-senja/",
    tags: ["React", "TailwindCSS", "Responsive"],
    featured: false,
  },
  {
    title: "Perfume Store",
    category: "E-Commerce",
    desc: "Luxury e-commerce storefront concept for high-end fragrances with rich dark mode UI, smooth product transitions, and curated catalog showcases.",
    img: "https://images.unsplash.com/photo-1756569631439-ba94c840478c?w=900&auto=format&fit=crop&q=60",
    link: "https://perfume-store.example.com",
    tags: ["UI/UX", "TailwindCSS", "E-Commerce"],
    featured: false,
  },
  {
    title: "Company Profile",
    category: "Corporate",
    desc: "Corporate profile platform built for agencies and modern businesses, showcasing comprehensive service offerings, case studies, and lead capture funnels.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    link: "https://company-profile.example.com",
    tags: ["Corporate", "HTML5", "CSS3", "JavaScript"],
    featured: false,
  },
  {
    title: "Takari Wedding Organizer",
    category: "Web Application",
    desc: "Comprehensive wedding planning platform featuring client portals, package customization, schedule tracking, and elegant dark visual style.",
    img: "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=900&auto=format&fit=crop&q=60",
    link: "https://takariwobest.wuaze.com/client/login.php",
    tags: ["PHP", "MySQL", "Client Portal", "Tailwind"],
    featured: true,
  },
  {
    title: "Digital Archive Platform",
    category: "Web Application",
    desc: "Centralized digital archive system for document indexing, fast parameterized search, secure file retrieval, and role-based permissions.",
    img: "https://plus.unsplash.com/premium_photo-1707155465554-1fe9c1638214?w=900&auto=format&fit=crop&q=60",
    link: "https://kelolaarsipksd.wuaze.com/",
    tags: ["PHP", "Database", "Document Management"],
    featured: false,
  },
];

const categories = ["All", "Web Application", "E-Commerce", "Landing Page", "Corporate"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#060911] relative overflow-hidden"
    >
      {/* Background soft ambient glows with #034694 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[500px] bg-[#034694]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-3 px-3.5 py-1 text-xs border-[#034694]/50 bg-[#034694]/15 text-[#93c5fd]">
            <Layers className="w-3.5 h-3.5 mr-1 text-[#3b82f6]" />
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#1d70e2]">Projects</span>
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Curated web applications, client solutions, and experimental interfaces.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#034694] hover:bg-[#02336e] text-white shadow-md shadow-[#034694]/40 font-semibold border border-[#1d70e2]/50"
                    : "bg-[#0a0e18]/80 text-zinc-400 hover:text-white hover:bg-[#0e1424] border border-zinc-800/80"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          <AnimatePresence>
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col justify-between overflow-hidden border border-zinc-800/80 bg-[#0a0e18]/80 hover:border-[#034694]/70 hover:shadow-2xl hover:shadow-[#034694]/20 backdrop-blur-xl group transition-all duration-300">
                  <div>
                    {/* Project Image Box */}
                    <div className="relative h-52 overflow-hidden bg-zinc-900">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e18] via-[#0a0e18]/40 to-transparent opacity-90" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <Badge variant="outline" className="text-[11px] bg-black/70 backdrop-blur-md border-white/20 text-zinc-200">
                          {p.category}
                        </Badge>
                        {p.featured && (
                          <Badge className="text-[10px] gap-1 bg-[#034694]/90 text-white border border-[#1d70e2]/50 shadow-sm shadow-[#034694]/40">
                            <Sparkles className="w-3 h-3 text-[#93c5fd]" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Project Meta */}
                    <CardHeader className="p-6 pb-2">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-[#93c5fd] transition-colors">
                        {p.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                        {p.desc}
                      </CardDescription>
                    </CardHeader>

                    {/* Tech Stack Tags */}
                    <CardContent className="p-6 pt-3 pb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[10px] py-0.5 px-2.5 bg-[#0e1424] border border-[#034694]/30 text-[#93c5fd] font-medium"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  {/* Card Footer with Shadcn Button */}
                  <CardFooter className="p-6 pt-2 border-t border-zinc-800/60 flex items-center justify-between mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full rounded-xl gap-2 font-semibold bg-[#0e1424] border-[#034694]/40 hover:bg-[#034694] hover:text-white hover:border-[#034694] text-zinc-200 transition-all cursor-pointer"
                    >
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#3b82f6] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

