import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedSection({
  children,
  delay = 0,
  variant = 'fadeInUp',
  className = ''
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } }
    },
    slideFromLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay } }
    },
    popIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay, type: "spring" } }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[variant] || variants.fadeInUp}
    >
      <div className="absolute -left-8 -top-8 w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg opacity-5 -rotate-12 pointer-events-none" />
      {children}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg opacity-5 rotate-12 pointer-events-none" />
    </motion.div>
  );
}
