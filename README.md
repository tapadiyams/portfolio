# Shubham Tapadiya - Software Developer Portfolio
A modern, interactive portfolio website showcasing software engineering expertise, work experience, and projects. Built with React, Tailwind CSS, and Framer Motion for smooth, engaging animations.
## Project Overview
This portfolio demonstrates full-stack development capabilities with an emphasis on clean design, smooth animations, and professional presentation. The site features interactive Mario-themed animations that make navigating through your experience and projects enjoyable.
### Tech Stack
- React 18.2.0
- Tailwind CSS 3.2.7
- Framer Motion (animations)
- Font Awesome Icons
- React Intersection Observer
## Features
- Animated Mario character that progresses through sections
- Smooth scroll-triggered section animations
- Responsive design for all devices (mobile, tablet, desktop)
- Interactive hover effects and transitions
- Professional experience and projects showcase
- Social media links and resume download
- Contact information display
- Particle effects and visual enhancements
## Project Structure
```
portfolio/
|-- public/
|   |-- assets/
|   |   |-- icons/           (favicon, app logos)
|   |   |-- images/          (profile pics, SVGs)
|   |   |-- images/projects/ (project thumbnails)
|   |   |-- docs/            (resume PDF)
|   |-- index.html
|   |-- manifest.json
|   |-- robots.txt
|-- src/
|   |-- components/          (React components)
|   |   |-- About.js
|   |   |-- Experiences.js
|   |   |-- Projects.js
|   |   |-- Contact.js
|   |   |-- Navbar.js
|   |   |-- MarioCharacter.js
|   |   |-- AnimatedSection.js
|   |   |-- VisualEffects.js
|   |-- hooks/
|   |   |-- useOnScreen.js   (scroll detection)
|   |-- App.js
|   |-- App.css
|   |-- index.css
|   |-- data.js              (experiences and projects data)
|   |-- index.js
|-- package.json
|-- tailwind.config.js
|-- .gitignore
|-- LICENSE
|-- README.md
|-- CODE-FLOW.md
```
## Getting Started
### Prerequisites
- Node.js 14.x or higher
- npm 6.x or higher
### Installation
1. Clone the repository:
```bash
git clone https://github.com/TapadiyaMS/portfolio.git
cd portfolio
```
2. Install dependencies:
```bash
npm install --legacy-peer-deps
```
3. Create environment file (optional):
```bash
cp .env.example .env.local
```
### Running Locally
Start the development server:
```bash
npm start
```
The app will open at http://localhost:3000
### Building for Production
Create an optimized production build:
```bash
npm run build
```
This generates a build/ folder ready for deployment.
## Customization
### Update Your Information
Edit src/data.js to add your experiences, projects, and skills:
```javascript
export const experiences = [
  {
    title: "Your Job Title",
    subtitle: "Company Name",
    description: "Your description...",
    tags: ["Skill1", "Skill2"]
  }
];
export const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    image: "./assets/images/projects/project.jpg",
    link: "https://github.com/yourrepo"
  }
];
```
### Modify Styles
- Colors and animations: Edit tailwind.config.js
- Component styles: Edit individual component files
- Global styles: Edit src/index.css and src/App.css
### Update Asset Paths
Place your assets in the public/assets/ folder:
- Profile images: public/assets/images/
- Project images: public/assets/images/projects/
- Documents: public/assets/docs/
- Icons: public/assets/icons/
## Deployment
### Option 1: Netlify
1. Connect your repository to Netlify
2. Build command: npm run build
3. Publish directory: build
4. Deploy
### Option 2: Vercel
1. Import project from GitHub
2. Vercel auto-detects React configuration
3. Click Deploy
### Option 3: GitHub Pages
1. Update package.json with your repository:
```json
"homepage": "https://yourusername.github.io/portfolio"
```
2. Deploy:
```bash
npm run build
npm install --save-dev gh-pages
npx gh-pages -d build
```
## Available Scripts
```bash
npm start      # Start development server
npm run build  # Create production build
npm test       # Run tests
npm run eject  # Eject configuration (warning: irreversible)
```
## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
## Performance Tips
1. Optimize images before uploading
2. Lazy load project images using Intersection Observer
3. Minimize CSS bundle using Tailwind purge
4. Use React.memo for expensive components
5. Monitor bundle size with: npm run build -- --analyze
## Troubleshooting
### npm install fails
```bash
# Clear npm cache
npm cache clean --force
# Remove node_modules and lock files
rm -rf node_modules package-lock.json
# Reinstall with legacy peer deps flag
npm install --legacy-peer-deps
```
### Port 3000 already in use
```bash
# Use different port
PORT=3001 npm start
```
### Images not loading
- Check file paths in src/data.js and components
- Verify asset files exist in public/assets/
- Use relative paths starting with ./
## License
MIT License - Copyright (c) 2024 Shubham Tapadiya
See LICENSE file for details.
## Contact
- GitHub: https://github.com/TapadiyaMS
- LinkedIn: https://linkedin.com/in/TShubham8/
- Email: TapadiyaMS@Gmail.com
## Resources
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Deploy: https://vercel.com or https://netlify.com
---
Built with React, creativity, and a touch of Mario magic!
