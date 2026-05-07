import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function VisualEffects() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const spawnCoin = () => {
      const id = Date.now();
      const newCoin = {
        id,
        left: Math.random() * 80 + 10,
        top: Math.random() * 60 + 20
      };
      setCoins(prev => [...prev, newCoin]);

      setTimeout(() => {
        setCoins(prev => prev.filter(c => c.id !== id));
      }, 2000);
    };

    const interval = setInterval(spawnCoin, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background parallax layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-30"
            style={{
              left: `${(i * 20 + 10) % 100}%`,
              top: `${(i * 15) % 100}%`
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity
            }}
          />
        ))}
      </div>

      {/* Floating coins */}
      {coins.map((coin) => (
        <motion.div
          key={coin.id}
          className="fixed pointer-events-none z-30"
          style={{
            left: `${coin.left}%`,
            top: `${coin.top}%`
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 1.5,
            y: -30
          }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg animate-spin flex items-center justify-center text-yellow-900 font-bold text-sm">
            $
          </div>
        </motion.div>
      ))}

      {/* Particle bursts on scroll */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="fixed pointer-events-none"
          style={{
            left: `${50 + (i - 1) * 20}%`,
            top: `50%`
          }}
          animate={{
            x: [(i - 1) * 40, (i - 1) * 80],
            y: [0, -80],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg" />
        </motion.div>
      ))}
    </>
  );
}

