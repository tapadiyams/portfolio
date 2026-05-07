SETUP AND INSTALLATION GUIDE
===========================

SYSTEM REQUIREMENTS
===================

Required:
- Node.js 14.17.0 or higher
- npm 6.0.0 or higher
- Git (optional, for version control)

Recommended:
- Node.js 16+ or 18+ (better performance)
- Code editor: VS Code, WebStorm, or similar

Check Your Installation
-----------------------
node --version
npm --version


STEP-BY-STEP INSTALLATION
=========================

Step 1: Navigate to Project Directory
-------------------------------------
cd /Volumes/Data/Learning/Projects/portfolio


Step 2: Clear Old Installation (if needed)
------------------------------------------
If you encounter npm errors:
rm -rf node_modules package-lock.json
npm cache clean --force


Step 3: Install Dependencies
------------------------------
For Node 14.x:
npm install --legacy-peer-deps

For Node 16+ or 18+:
npm install

This may take 2-5 minutes.


Step 4: Start Development Server
---------------------------------
npm start

This will:
- Start server on http://localhost:3000
- Open browser automatically
- Enable hot reload on file changes


ENVIRONMENT SETUP
=================

Optional: Create .env.local
----------------------------
1. Copy .env.example to .env.local
2. Update values as needed
3. Restart development server


COMMON INSTALLATION ISSUES
==========================

Issue: "Cannot find module 'react'"
Solution: 
- npm install
- npm install --legacy-peer-deps (for Node 14.x)

Issue: "ENOTEMPTY: directory not empty"
Solution:
- rm -rf node_modules
- npm install --legacy-peer-deps

Issue: "Port 3000 already in use"
Solution:
- Kill process: lsof -ti:3000 | xargs kill -9
- Or use different port: PORT=3001 npm start

Issue: "npm ERR! code EACCES" (Permission denied)
Solution:
- Check file permissions
- Try: sudo npm install (last resort)
- Better: Fix npm permissions globally


DEVELOPMENT COMMANDS
====================

Start Dev Server
----------------
npm start
Runs on http://localhost:3000

Run Tests
---------
npm test
Starts test watcher

Build for Production
--------------------
npm run build
Creates optimized build in /build folder

Eject Configuration (NOT recommended, one-way operation)
---------------------------------------------------------
npm run eject
Exposes all configuration files


PROJECT STRUCTURE AFTER INSTALLATION
====================================

After npm install, you should have:

portfolio/
|-- node_modules/          (Dependencies)
|-- public/                (Static files)
|-- src/                   (Source code)
|-- package.json          (Project config)
|-- package-lock.json     (Locked versions)
|-- tailwind.config.js    (Styling config)
|-- README.md             (Documentation)
'-- LICENSE               (MIT License)


VERIFY INSTALLATION
===================

Check these files exist and have content:

1. node_modules/ folder exists
2. package.json contains dependencies
3. src/components/ has 8 components
4. tailwind.config.js configured
5. public/index.html exists


RUNNING THE PROJECT
===================

Development Mode
----------------
npm start
- Runs on http://localhost:3000
- Hot reload enabled
- Source maps for debugging
- Shows errors in console

Production Build
----------------
npm run build
- Creates optimized bundle
- Minified code
- Ready to deploy
- Size typically 150-300KB


DEPLOYMENT PREPARATION
======================

Before Deploying
----------------
1. npm run build
2. Test build locally: npx serve -s build
3. Check build/ folder created
4. Verify build works


Deploy to Netlify
-----------------
Method 1: Drag and Drop
1. npm run build
2. Go to netlify.com
3. Drag build/ folder to deploy

Method 2: GitHub Integration
1. Push to GitHub
2. Connect repo to Netlify
3. Set build command: npm run build
4. Set publish directory: build


Deploy to Vercel
----------------
1. npm install -g vercel
2. vercel
3. Follow prompts
4. Done!


GETTING HELP
============

Check Files
-----------
- README.md - Full documentation
- MIGRATION_GUIDE.md - What changed
- PROJECT_STRUCTURE.md - File organization
- TROUBLESHOOTING.md - Common problems

Check Logs
----------
- Browser console: F12 or Cmd+Option+J
- Terminal/CLI for npm errors
- Check network tab for API issues

Online Resources
----------------
- React: https://react.dev
- npm: https://docs.npmjs.com
- Node.js: https://nodejs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Tailwind: https://tailwindcss.com/docs


TROUBLESHOOTING QUICK REFERENCE
================================

Installation Error -> Clear cache and reinstall
Memory Error -> Node 14 issue, upgrade Node
Port in use -> Kill process or change port
Dependencies error -> Use --legacy-peer-deps flag
Animations not showing -> Check browser console
Slow performance -> Check for browser extensions
Can't find module -> npm install --legacy-peer-deps


NEXT STEPS AFTER INSTALLATION
==============================

1. Run npm start and view in browser
2. Test all animations and interactions
3. Check mobile responsiveness
4. Review documentation files
5. Customize content in data.js if needed
6. Build and deploy when ready


MAINTENANCE
===========

Update Dependencies
-------------------
npm outdated          (see outdated packages)
npm update            (update all packages)
npm update [package]  (update specific)

Clean Project
-------------
npm clean       (clean npm cache)
npm prune        (remove unused)


SUPPORT CONTACTS
================

Developer: Shubham Tapadiya
Email: tapadiyams@gmail.com
GitHub: https://github.com/TapadiyaMS
LinkedIn: https://linkedin.com/in/TShubham8/


INSTALLATION COMPLETE!
======================

Your portfolio should now be running on http://localhost:3000

Enjoy exploring your new animated portfolio!

