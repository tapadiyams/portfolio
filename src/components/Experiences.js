import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { motion } from 'framer-motion';
import { experiences } from "../data";
import AnimatedSection from './AnimatedSection';
import { useInView } from 'react-intersection-observer';

export default function Experiences() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, type: "spring" }
    }
  };

  return (
    <section id="experiences" className="relative bg-gray-900 body-font py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl"
        animate={{ x: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <AnimatedSection className="container px-5 mx-auto text-center lg:px-40">
        {/* Title Section */}
        <motion.div
          className="flex flex-col w-full mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FontAwesomeIcon icon={faLaptopCode} className="text-yellow-400" size="2xl" />
          </motion.div>
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-white">
            🏢 Industry Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            My professional journey working with industry leaders to deliver transformative solutions
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="grid gap-8 w-full"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <motion.div
                className="relative z-10 p-8 md:p-10 rounded-xl border-2 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 hover:border-green-400 transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{
                  y: -5,
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)"
                }}
              >
                {/* Badge */}
                <motion.div
                  className="absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full text-gray-900 font-bold text-sm shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  Experience {index + 1}
                </motion.div>

                {/* Company Name */}
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-2 mt-4">
                  {experience.subtitle}
                </h2>

                {/* Job Title */}
                <h1 className="title-font text-2xl font-bold text-white mb-4">
                  {experience.title}
                </h1>

                {/* Description */}
                <p className="leading-relaxed text-left text-gray-300 mb-6">
                  {experience.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {experience.tags && experience.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-green-300 rounded-full text-xs font-semibold"
                      whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative corner */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-green-400 rounded-br-lg opacity-30" />
              </motion.div>

              {/* Hover glow background */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500 to-yellow-500 opacity-0 -z-10 blur-xl group-hover:opacity-20 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>
    </section>
  );
}