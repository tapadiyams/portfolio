// src/App.js

import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import MarioCharacter from "./components/MarioCharacter";
import VisualEffects from "./components/VisualEffects";

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="text-gray-400 bg-gray-900 body-font relative overflow-hidden">
      <VisualEffects />
      <Navbar />
      <MarioCharacter currentSection={currentSection} />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}