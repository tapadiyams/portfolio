// src/App.js

import React from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="text-gray-800 bg-white body-font">
      <Navbar />

      {/* Header Section with Name */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 md:pt-24 pb-12 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Shubham Tapadiya
          </h1>
          <p className="text-gray-600 text-base mb-8">
            Senior Software Engineer | Cloud & Distributed Systems
          </p>

          {/* Navigation Links under subtitle - centered */}
          <nav className="flex justify-center gap-8 md:gap-12">
            <a href="#about" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              about
            </a>
            <a href="#experiences" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              experience
            </a>
            <a href="./assets/docs/Shubham Tapadiya Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              resume
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">
              contact
            </a>
          </nav>
        </div>
      </motion.header>

      <About />
      <Experiences />
      <Contact />
    </main>
  );
}