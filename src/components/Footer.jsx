import React from "react";
import Separator from "./ui/separator";
import { Heart, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#060911] text-zinc-400 text-xs py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
      <Separator className="border-zinc-800/80" />

      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#034694] to-[#1d70e2] flex items-center justify-center font-bold text-[11px] text-white shadow-sm shadow-[#034694]/40">
            A
          </div>
          <span className="font-semibold text-sm text-white">Adhitya Prayogie</span>
        </div>

        <p className="flex items-center gap-1.5 text-center text-xs">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          <span>using React 19, Shadcn Primitives & Framer Motion</span>
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a
            href="https://github.com/AdhityaPrayogie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/adhitya-prayogie-98b253386"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/adhitya_p19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>

      <p className="text-[11px] text-zinc-500">
        © {new Date().getFullYear()} Adhitya Prayogie. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;