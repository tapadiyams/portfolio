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
        className="pt-28 md:pt-32 pb-8 bg-white border-b border-gray-100 sticky top-12 z-40"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Shubham Tapadiya
          </h1>
          <p className="text-gray-600 text-base">
            Senior Software Engineer | Cloud & Distributed Systems
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Austin, TX | H1B Visa
          </p>
        </div>
      </motion.header>

      <About />
      <Experiences />
      <Contact />
    </main>
  );
}