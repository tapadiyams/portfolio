// src/components/Projects.js

import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from "react";
import { projects } from "../data";
import AnimatedSection from './AnimatedSection';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, type: "spring" }
    }
  };

  return (
    <section id="projects" className="relative text-gray-400 bg-gray-900 body-font py-20 md:py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <AnimatedSection variant="popIn" className="container px-5 py-10 mx-auto text-center lg:px-40 relative z-10">
        <motion.div
          className="flex flex-col w-full mb-16"
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="inline-block mb-4" whileHover={{ scale: 1.2, rotate: 10 }}>
            <FontAwesomeIcon icon={faDiagramProject} className="text-green-400" size="2xl" />
          </motion.div>
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-white">
            🎮 Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            "A man's mind, stretched by new ideas, may never return to its original dimensions." -Oliver Wendell Holmes Jr.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.image}
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel={project.link ? "noopener noreferrer" : ""}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <motion.div className="relative overflow-hidden rounded-xl shadow-2xl h-full bg-gray-800">
                <div className="relative w-full h-96 overflow-hidden">
                  <motion.img
                    alt={project.title}
                    className="w-full h-full object-cover"
                    src={project.image}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.div
                  className="absolute inset-0 px-8 py-10 flex flex-col justify-end z-20 bg-gradient-to-t from-gray-900 from-0% via-gray-900/30 via-50% to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-2">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-sm text-gray-300 line-clamp-3">
                    {project.description}
                  </p>
                  <motion.div
                    className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-lg font-bold text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.link ? '🔗 View Project' : '📌 Coming Soon'}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 z-30 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-full text-xs font-bold shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  #{index + 1}
                </motion.div>

                <div className="absolute bottom-0 left-0 w-12 h-12 border-t-2 border-r-2 border-green-400 opacity-30" />
                <div className="absolute top-0 right-0 w-12 h-12 border-b-2 border-l-2 border-yellow-400 opacity-30" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </AnimatedSection>
    </section>
  );
}