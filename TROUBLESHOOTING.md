TROUBLESHOOTING GUIDE
====================

This document covers common issues and solutions.


NPM INSTALLATION ISSUES
=======================

ERROR: ENOTEMPTY: directory not empty
-------------------------------------
Cause: Corrupted node_modules
Solution:
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install --legacy-peer-deps

ERROR: Cannot find module errors
---------------------------------
Cause: Dependencies not installed
Solution:
  npm install --legacy-peer-deps
  npm ci (instead of npm install)

ERROR: EACCES - Permission denied
----------------------------------
Cause: npm permissions issue
Solution:
  # Check if node_modules is writable
  ls -la node_modules
  
  # Try with sudo (last resort)
  sudo npm install
  
  # Better: Fix npm permissions
  npm config get prefix
  # Create npm directory
  mkdir ~/.npm-global
  npm config set prefix ~/.npm-global

ERROR: Module parse failed
---------------------------
Cause: Wrong Node version or corrupted module
Solution:
  node --version          (should be 14.17+)
  npm install --legacy-peer-deps
  rm -rf node_modules && npm install

ERROR: code ERESOLVE
--------------------
Cause: Dependency conflicts
Solution:
  npm install --legacy-peer-deps
  npm install --force

ERROR: Out of memory
--------------------
Cause: Not enough RAM (common with Node 14)
Solution:
  # Increase memory for node
  NODE_OPTIONS="--max-old-space-size=4096" npm install
  
  # Or upgrade Node version
  nvm install 16
  nvm use 16


DEVELOPMENT SERVER ISSUES
==========================

ERROR: Port 3000 already in use
--------------------------------
Cause: Another process on port 3000
Solution:
  # Find process using port
  lsof -ti:3000
  
  # Kill process
  lsof -ti:3000 | xargs kill -9
  
  # Or use different port
  PORT=3001 npm start

ERROR: Cannot GET /
-----------------------------
Cause: Server not running properly
Solution:
  npm start
  # Wait 10-15 seconds for full startup
  # Check browser console for errors

ERROR: Hot reload not working
------------------------------
Cause: File watcher limit issue
Solution:
  # Increase file watch limit (macOS)
  echo fs.inotify.max_user_watches=524288 | \
    sudo tee -a /etc/sysctl.conf
  sudo sysctl -p
  
  # Then restart: npm start

ERROR: Page blank/white screen
-------------------------------
Cause: JavaScript error
Solution:
  1. Press F12 to open dev tools
  2. Check Console tab for errors
  3. Check Network tab for failed requests
  4. Restart: npm start
  5. Clear browser cache: Cmd+Shift+Delete

Service Worker cache issue
----------------------------
Solution:
  # Clear browser cache manually
  Cmd+Shift+Delete (Chrome/Firefox)
  
  # Or unregister service worker
  Browser DevTools > Application > Clear Storage


ANIMATION ISSUES
================

Animations not showing
-----------------------
Cause: Missing Framer Motion library
Check:
  npm list framer-motion
  npm list react-intersection-observer

Solution:
  npm install framer-motion@10.16.4
  npm install react-intersection-observer@9.5.2

Mario character not visible
----------------------------
Check:
  1. MarioCharacter imported in App.js
  2. Browser console for errors
  3. CSS classes are applied
  4. Component size (check width/height)

Solution:
  1. Check src/App.js imports
  2. Look for console errors (F12)
  3. Verify MarioCharacter.js file exists
  4. Hard refresh: Cmd+Shift+R

Animations choppy/stuttering
---------------------------
Causes: Performance issue
Solutions:
  1. Close unused browser tabs
  2. Disable browser extensions
  3. Check CPU usage (Activity Monitor)
  4. Try different browser
  5. Reduce animation quantity in tailwind.config.js


STYLING ISSUES
==============

Tailwind styles not applying
----------------------------
Cause: Tailwind not configured
Solution:
  1. Check tailwind.config.js exists
  2. Check PostCSS configured
  3. Restart: npm start
  4. Hard refresh: Cmd+Shift+R

Colors not visible
-------------------
Cause: Text color same as background
Solution:
  Check component className for color classes
  Add contrasting text color classes

Layout broken on mobile
------------------------
Cause: Missing responsive classes
Solution:
  Use Tailwind responsive prefixes
  md: for tablets (768px+)
  sm: for small screens


BROWSER ISSUES
==============

Works in Chrome but not Firefox
--------------------------------
Cause: Browser compatibility issue
Solution:
  1. Update browser to latest
  2. Check for console errors
  3. Try Incognito/Private mode
  4. Clear cache and cookies

Works locally but not on deployed site
---------------------------------------
Cause: Build or deployment issue
Solution:
  1. npm run build locally, test
  2. Check build output for errors
  3. Verify all assets copied
  4. Check deployment logs


BUILD ISSUES
============

Build fails with errors
------------------------
Solution:
  1. Check error message carefully
  2. Look for missing imports
  3. Verify file paths are correct
  4. npm install any missing dependencies

Build completes but file too large
-----------------------------------
Cause: Unoptimized bundle
Solution:
  1. Check for large dependencies
  2. Use code splitting (Routes)
  3. Lazy load components
  4. Remove unused imports

Build works but deploy fails
-----------------------------
Check:
  1. build/ folder created
  2. index.html exists in build/
  3. Static assets copied
  4. Deployment platform requirements


GIT/GITHUB ISSUES
=================

Git not recognizing changes
---------------------------
Solution:
  git status
  git add .
  git commit -m "message"
  git push

Large file not pushing
----------------------
Cause: File exceeds GitHub limit
Solution:
  Use .gitignore to exclude large files
  Add to .gitignore:
    node_modules/
    build/
    .env

Git conflicts
-------------
Solution:
  1. Identify conflicting files
  2. Edit files, remove conflict markers
  3. git add conflicted_file
  4. git commit
  5. git push


PERFORMANCE ISSUES
==================

Site loading slowly
-------------------
Check:
  1. Network speed (DevTools)
  2. Bundle size (npm run build)
  3. Large images
  4. Unoptimized animations

Solutions:
  1. Compress images
  2. Enable gzip compression
  3. Use CDN for assets
  4. Reduce animation frequency


DEPLOYMENT ISSUES
=================

Netlify deployment fails
------------------------
Check:
  1. Build command: npm run build
  2. Publish directory: build
  3. Node version set to 16+
  4. Environment variables

Vercel deployment fails
-----------------------
Check:
  1. GitHub repo connected
  2. Node version compatible
  3. Build settings correct
  4. Functions configured


GET HELP
========

Check Files
-----------
- README.md - Main documentation
- SETUP.md - Installation guide
- PROJECT_STRUCTURE.md - File organization
- COMPLETION_CHECKLIST.md - What was done

Browser Console
---------------
Press F12 (Chrome/Firefox)
Check Console tab for error messages
Copy full error text if pasting online

Terminal/CLI
------------
Look at npm output for specific errors
Google error message with project name
Check npm documentation

Online Resources
----------------
- Stack Overflow
- GitHub Issues
- npm Package Documentation
- React Documentation

Contact Developer
-----------------
Shubham Tapadiya
Email: tapadiyams@gmail.com
GitHub: https://github.com/TapadiyaMS


STILL NOT WORKING?
==================

Try These Steps
---------------
1. npm install --legacy-peer-deps
2. npm start
3. Press F12 and check Console
4. Copy exact error message
5. Restart computer
6. Try in different browser
7. Ask for help with error details

When Asking for Help
---------------------
Include:
- Exact error message
- Node version (node --version)
- npm version (npm --version)
- Operating system
- What you were doing
- What happened instead
- What you expected

Example Report
---------------
"I ran npm install --legacy-peer-deps and got error:
ERR! code ENOTEMPTY
Running Node v14.16.0 on macOS 12.5"


QUICK REFERENCE
===============

Common Fixes
------------
npm install --legacy-peer-deps     (Dependencies)
npm start                          (Start dev)
npm run build                      (Create build)
npm cache clean --force            (Clear cache)
rm -rf node_modules                (Reset install)
Cmd+Shift+R                        (Hard refresh)
F12                                (Open dev tools)


Recovery Checklist
------------------
1. Close browser
2. Stop npm (Ctrl+C)
3. rm -rf node_modules
4. npm install --legacy-peer-deps
5. Open new terminal
6. npm start
7. Open browser
8. Press Cmd+Shift+R


MAINTAIN SANITY
===============

- One problem at a time
- Read error messages carefully
- Google exact error first
- Check documentation
- Try again after waiting
- Restart everything
- Ask for help


MORE HELP
=========

Documentation:
  - README.md
  - SETUP.md
  - PROJECT_STRUCTURE.md

Developer:
  Shubham Tapadiya
  tapadiyams@gmail.com

GitHub:
  https://github.com/TapadiyaMS/portfolio

===================================
END OF TROUBLESHOOTING GUIDE
===================================

