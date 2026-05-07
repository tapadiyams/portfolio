import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import AnimatedSection from './AnimatedSection';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [titleHovered, setTitleHovered] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      <AnimatedSection variant="slideFromLeft" className="container mx-auto flex px-10 py-20 md:py-32 md:flex-row flex-col items-center gap-12">
        {/* Content Container */}
        <motion.div
          ref={ref}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-green-400 font-mono mb-4 flex items-center justify-center md:justify-start gap-2">
            <span className="animate-pulse">▶</span> Welcome to My Game
          </motion.p>

          {/* Name with hover effect */}
          <motion.div
            variants={itemVariants}
            onHoverStart={() => setTitleHovered(true)}
            onHoverEnd={() => setTitleHovered(false)}
            className="cursor-pointer"
          >
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white relative inline-block">
              Shubham Tapadiya
              {titleHovered && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400"
                  layoutId="underline"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </h1>
          </motion.div>

          {/* Title/Role */}
          <motion.p variants={itemVariants} className="text-lg text-yellow-400 font-bold mb-8">
            Senior Software Engineer 🚀
          </motion.p>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-xl">
            <p className="leading-relaxed text-base text-gray-300 mb-4">
              I'm a full-stack software engineer with a proven track record at top companies like NASA Jet Propulsion Laboratory, AWS (FSx team), and AJ Investment. I specialize in designing and developing high-performance systems, cloud infrastructure, and scalable solutions.
            </p>
            <p className="leading-relaxed text-base text-gray-300 mb-6">
              My expertise spans backend systems, cloud architecture, API design, containerization (Kubernetes), and database optimization. I'm passionate about building powerful, elegant solutions that solve real-world problems.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8 w-full md:w-auto">
            <div className="bg-gradient-to-br from-green-900 to-green-800 p-4 rounded-lg border border-green-500 border-opacity-50">
              <div className="text-2xl font-bold text-green-400">5+</div>
              <div className="text-xs text-green-300">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 p-4 rounded-lg border border-yellow-500 border-opacity-50">
              <div className="text-2xl font-bold text-yellow-400">30+</div>
              <div className="text-xs text-yellow-300">Projects Built</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 rounded-lg border border-blue-500 border-opacity-50">
              <div className="text-2xl font-bold text-blue-400">4</div>
              <div className="text-xs text-blue-300">Top Companies</div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-6">
            <motion.a
              href="https://github.com/TapadiyaMS"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faGithub} style={{ color: '#68D391', fontSize: '24px' }}/>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/TShubham8/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#68D391', fontSize: '24px' }}/>
            </motion.a>
            <motion.a
              href="https://twitter.com/the_thrones_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#68D391', fontSize: '24px' }}/>
            </motion.a>
          </motion.div>

           {/* CTA Button */}
           <motion.div variants={itemVariants} className="mt-8">
             <a href="./assets/docs/Shubham Tapadiya Resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="px-8 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 hover:from-yellow-600 hover:to-yellow-600 shadow-lg transformation"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(253, 224, 71, 0.6)" }}
                whileTap={{ scale: 0.98 }}
              >
                📥 View Resume
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Image Container */}
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            <img
              className="object-cover object-center rounded-lg shadow-2xl"
              alt="hero"
              src="./assets/images/coding.svg"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-green-400 to-transparent opacity-10" />
          </motion.div>
        </motion.div>
      </AnimatedSection>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-green-400 rounded-full opacity-5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
}