import React from "react";
import Navbar from "./components/Navbar";
import FloatingSocial from "./components/FloatingSocial";
import Hero from "./components/Hero";
import About from "./components/About";
import History from "./components/History";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Navbar />
      <FloatingSocial />
      <Hero />
      <About />
      <History />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
