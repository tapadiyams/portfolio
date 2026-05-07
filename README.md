# MARIO ANIMATED PORTFOLIO - Shubham Tapadiya

An interactive, animated portfolio website with Mario-style animations and gamified experience. 
Built with React, Framer Motion, and Tailwind CSS.

Status: Production Ready | License: MIT | Last Updated: 2024

## 🚀 Live Demo

Visit the portfolio to experience the Mario adventure!

## ✨ Features

### 🎮 Mario-Themed Animations
- **Animated Mario Character**: A pixel-art styled Mario that walks through your portfolio
- **Jump Animations**: Mario jumps as you scroll through sections
- **Floating Coins**: Virtual coins appear during interaction
- **Particle Effects**: Dynamic visual effects throughout

### 🎯 Interactive Sections

#### 👋 About Me
- Slide-in animations with engaging intro
- Quick stats cards (5+ years, 30+ projects, 4 top companies)
- Social media links with hover animations
- Direct resume download button
- Parallax effects

#### 💼 Industry Experience
- 3D flip card animations
- Experience badges with staggered animations
- Tech stack tags for each role
- AWS & AJ Investment professional experience

#### 🎮 Projects
- Responsive grid showcase
- Image zoom on hover
- Project numbering badges
- GitHub repository links
- 4 featured projects including Road Symbol Recognition, LinkedIn Clone, Sentiment Analysis

#### 📞 Contact
- Three-column contact card grid
- Email, phone, location display
- Call-to-action section
- Social media integration

## Quick Start

### Installation
```bash
git clone https://github.com/TapadiyaMS/portfolio.git
cd portfolio
npm install --legacy-peer-deps
npm start
```

Visit http://localhost:3000

### Build for Production
```bash
npm run build
```

## Project Structure

```
src/
|-- components/
|   |-- About.js              (About section with animations)
|   |-- Contact.js            (Contact section)
|   |-- Experiences.js        (Experience cards)
|   |-- Projects.js           (Project showcase)
|   |-- Navbar.js             (Navigation)
|   |-- MarioCharacter.js     (Animated Mario)
|   |-- AnimatedSection.js    (Animation wrapper)
|   '-- VisualEffects.js      (Particle effects)
|-- App.js                    (Main app)
|-- data.js                   (Content data)
'-- index.js                  (Entry point)
```

## Tech Stack

- React 18.2 - UI Framework
- Framer Motion 10.16 - Advanced animations
- Tailwind CSS 3.2 - Styling
- React Intersection Observer - Scroll triggers
- FontAwesome 6.3 - Icons

## Custom Animations

Tailwind config includes Mario-themed animations:
- mario-jump - Jumping arc
- mario-walk - Walking motion
- coin-spin - Coin collection
- fade-in-up - Scroll reveal
- platform-bounce - Platform impact
- And more!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Netlify
```bash
npm run build
# Connect repo to Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

## About

SHUBHAM TAPADIYA - Senior Software Engineer

- LinkedIn: https://linkedin.com/in/TShubham8/
- GitHub: https://github.com/TapadiyaMS
- Twitter: https://twitter.com/the_thrones_
- Email: tapadiyams@gmail.com

### Experience
- AWS (FSx Team) - OpenZFS File Server development
- AJ Investment - Investment system architecture
- JPL/NASA - Specialized projects

### Skills
Python, JavaScript, C++, React, Node.js, AWS, Kubernetes, PostgreSQL, MongoDB

## Learn More

- Framer Motion Docs: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/
- React Docs: https://react.dev/

## License

MIT License - See LICENSE file for details

Copyright (c) 2024 Shubham Tapadiya

## Acknowledgments

- Mario sprite inspiration
- Framer Motion for smooth animations
- Community support and feedback

---

Made with passion and Mario animations

For detailed information, see MIGRATION_GUIDE.md or TRANSFORMATION_SUMMARY.md
