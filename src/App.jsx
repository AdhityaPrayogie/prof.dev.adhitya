import React from "react";
import Navbar from "./components/Navbar";
import FloatingSocial from "./components/FloatingSocial";
import Hero from "./components/Hero";
import About from "./components/About";
import History from "./components/History";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { MotionConfig } from "framer-motion";

function App() {
  return (
    <div className="relative isolate bg-[#02050c] min-h-screen text-white">
      <MotionConfig reducedMotion="user">
      <Background />
      <Navbar />
      <FloatingSocial />
      <Hero />
      <About />
      <History />
      <Projects />
      <Contact />
      <Footer />
      </MotionConfig>
    </div>
  );
}

export default App;
