import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedSection from './AnimatedSection';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="relative bg-gray-900 py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full opacity-5 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <AnimatedSection className="container px-5 mx-auto text-center lg:px-40 relative z-10">
        {/* Title */}
        <motion.div
          ref={ref}
          className="flex flex-col w-full mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FontAwesomeIcon icon={faContactBook} className="text-yellow-400" size="2xl" />
          </motion.div>
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-white">
            🚀 Let's Connect!
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400 mb-8">
            "There is no way to find out if someone is deserving without actually knowing them." - Me
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Email Card */}
          <motion.a
            href="mailto:tapadiyams@gmail.com"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="p-8 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 border-2 border-blue-500 border-opacity-50 hover:border-blue-300 transition-all cursor-pointer shadow-xl"
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-blue-200 break-all">tapadiyams@gmail.com</p>
          </motion.a>

          {/* Phone Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="p-8 rounded-xl bg-gradient-to-br from-green-900 to-green-800 border-2 border-green-500 border-opacity-50 hover:border-green-300 transition-all shadow-xl"
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
            <p className="text-green-200">607-338-0402</p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className="p-8 rounded-xl bg-gradient-to-br from-purple-900 to-purple-800 border-2 border-purple-500 border-opacity-50 hover:border-purple-300 transition-all shadow-xl"
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-purple-200">Massachusetts, USA</p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-yellow-900 via-green-900 to-blue-900 p-8 md:p-12 rounded-2xl border-2 border-yellow-500 border-opacity-50 shadow-2xl relative overflow-hidden"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            style={{
              backgroundImage: 'linear-gradient(45deg, #FCD34D 25%, transparent 25%, transparent 50%, #FCD34D 50%, #FCD34D 75%, transparent 75%, transparent)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Great?</h2>
            <p className="text-lg text-gray-200 mb-6">
              Whether you have a project in mind or just want to chat about tech, I'd love to hear from you!
            </p>
            <motion.a
              href="mailto:tapadiyams@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-gray-900 font-bold rounded-lg shadow-lg transition-all"
            >
              ✉️ Send Me an Email
            </motion.a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-12 flex justify-center gap-6 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.a
            href="https://github.com/TapadiyaMS"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <div className="text-2xl">🐙</div>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/TShubham8/"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <div className="text-2xl">💼</div>
          </motion.a>
          <motion.a
            href="https://twitter.com/the_thrones_"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <div className="text-2xl">🐦</div>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500"
        >
          <p>Made with ❤️ and 🎮 Mario animations • © 2024 Shubham Tapadiya</p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}