/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mario: {
          red: '#E60012',
          dark: '#1F2937',
          accent: '#FCD34D',
          green: '#10B981',
          platform: '#92400E',
        }
      },
      fontFamily: {
        mario: ['Press Start 2P', 'system-ui'],
        pixel: ['Courier New', 'monospace'],
      },
      animation: {
        'mario-jump': 'marioJump 0.6s ease-out',
        'mario-walk': 'marioWalk 0.8s steps(2) infinite',
        'mario-idle': 'marioIdle 1s ease-in-out infinite',
        'coin-spin': 'coinSpin 0.6s ease-in-out',
        'platform-bounce': 'platformBounce 0.4s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-from-left': 'slideFromLeft 0.8s ease-out',
        'block-pop': 'blockPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'sparkle': 'sparkle 1s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        marioJump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-60px)' },
          '100%': { transform: 'translateY(0)' }
        },
        marioWalk: {
          '0%, 100%': { transform: 'translateX(0) scaleX(1)' },
          '50%': { transform: 'translateX(10px) scaleX(1)' }
        },
        marioIdle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        coinSpin: {
          '0%': { transform: 'rotateY(0) scale(1)' },
          '50%': { transform: 'rotateY(90deg) scale(1.1)' },
          '100%': { transform: 'rotateY(180deg) scale(1)' }
        },
        platformBounce: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        blockPop: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' }
        },
        pulseGlow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(16, 185, 129, 0.4)' },
          '50%': { 'box-shadow': '0 0 40px rgba(16, 185, 129, 0.8)' }
        }
      },
    },
  },
  plugins: [],
}