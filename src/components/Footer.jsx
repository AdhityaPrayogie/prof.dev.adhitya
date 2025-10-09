import React from "react";

const Footer = () => (
  <footer className="py-6 text-center text-gray-500 text-sm border-t border-neon.purple">
    © {new Date().getFullYear()} <span className="text-neon.pink">Adhitya</span>{" "}
    Portfolio — Built with 💜 React + Tailwind
  </footer>
);

export default Footer;
