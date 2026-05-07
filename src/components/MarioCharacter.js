import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MarioCharacter({ currentSection = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 600);
    }, 3000);
    return () => clearInterval(jumpInterval);
  }, []);

  const marioVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    jump: {
      y: [0, -60, 0],
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <div ref={ref} className="fixed left-4 bottom-20 z-40 md:left-8 md:bottom-32 pointer-events-none">
      <motion.div
        className="relative w-16 h-20 md:w-20 md:h-28"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={marioVariants}
      >
        {/* Mario SVG Character */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-lg"
        >
          {/* Head */}
          <rect x="8" y="6" width="16" height="8" fill="#DD4D47" />
          <rect x="6" y="8" width="2" height="2" fill="#DD4D47" />
          <rect x="24" y="8" width="2" height="2" fill="#DD4D47" />

          {/* Eyes */}
          <rect x="10" y="8" width="2" height="2" fill="#000" />
          <rect x="20" y="8" width="2" height="2" fill="#000" />

          {/* Mouth */}
          <rect x="12" y="12" width="8" height="2" fill="#8B4513" />

          {/* Body */}
          <rect x="8" y="14" width="16" height="6" fill="#DD4D47" />
          <rect x="10" y="14" width="4" height="6" fill="#2196F3" />
          <rect x="18" y="14" width="4" height="6" fill="#2196F3" />

          {/* Arms */}
          <rect x="4" y="16" width="4" height="4" fill="#F4A460" />
          <rect x="24" y="16" width="4" height="4" fill="#F4A460" />

          {/* Legs */}
          <rect x="10" y="20" width="4" height="6" fill="#000" />
          <rect x="18" y="20" width="4" height="6" fill="#000" />

          {/* Shoes */}
          <rect x="10" y="26" width="4" height="2" fill="#FDD835" />
          <rect x="18" y="26" width="4" height="2" fill="#FDD835" />
        </svg>

        {/* Jumping animation indicator */}
        {isJumping && (
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 bg-yellow-300 rounded-full opacity-40 blur-md" />
          </motion.div>
        )}
      </motion.div>

      {/* Section progress indicator */}
      <motion.div
        className="mt-8 text-center text-xs md:text-sm font-bold text-green-400 font-pixels"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {'▶'.repeat(currentSection)}
      </motion.div>
    </div>
  );
}

