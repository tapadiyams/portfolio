# CODE FLOW AND ARCHITECTURE

This document explains the architecture and data flow through the portfolio application.

## Application Entry Point

### index.js
- Renders the React application into the DOM
- Mounts App component to #root element
- Imports global styles (index.css)

### App.js
- Main application component
- Wraps entire application in Framer Motion providers
- Manages scroll position state
- Renders layout with all sections and components

## Component Hierarchy

```
App
  |-- Navbar
  |-- VisualEffects
  |-- MarioCharacter
  |-- About
  |-- Experiences
  |-- Projects
  |-- Contact
```

## Component Details

### Navbar (Navbar.js)
- Fixed navigation bar at top
- Links to different sections
- Mobile responsive hamburger menu
- Smooth scroll to sections on click

### About (About.js)
- Hero section with welcome message
- Personal introduction and bio
- Stats display (years, projects, companies)
- Social media links (GitHub, LinkedIn, Twitter)
- Resume download button
- Floating image animation
- Uses AnimatedSection for entrance animation

### Experiences (Experiences.js)
- Displays work experience cards
- Each card shows: title, company, description, skills
- 3D flip animation on hover
- Tech tags for each experience
- Staggered animation on scroll into view
- Data comes from data.js

### Projects (Projects.js)
- Responsive grid layout of project cards
- Each card shows: title, description, tech stack, image, link
- Zoom animation on hover
- GitHub links for repositories
- Data comes from data.js

### Contact (Contact.js)
- Contact information section
- Email, GitHub, LinkedIn contact cards
- Call-to-action button
- Contact form with Netlify integration
- Responsive grid layout

### MarioCharacter (MarioCharacter.js)
- Animated pixel-art Mario character
- Positioned absolutely on page
- Jumps as user scrolls through sections
- Tracks current section (About, Experiences, Projects, Contact)
- Responds to scroll events
- Pure SVG rendering

### AnimatedSection (AnimatedSection.js)
- Reusable animation wrapper component
- Detects when section comes into view via Intersection Observer
- Applies animation variants based on props
- Supports animation types:
  * fade-in-up: Fade in while moving up
  * slide-from-left: Slide from left side
  * zoom: Scale up with fade
  * bounce: Bounce effect

### VisualEffects (VisualEffects.js)
- Background particle effects
- Floating coins with rotation
- Twinkling stars
- Continuous animations
- Positioned absolutely

## Data Flow

### data.js
Contains main data structures:

Experiences array: title, subtitle, description, tags array
Projects array: title, subtitle, description, image path, github link

- These arrays are imported into components
- Components map over arrays to render cards
- Data is static (imported directly)
- To update: edit data.js and save

## Hook Usage

### useOnScreen Hook
- Custom hook using React Intersection Observer API
- Detects when element comes into viewport
- Returns: ref (to attach to element), inView (boolean state)

### useState
- Used in components for local state
- Examples: menu open/close, hover states, positions

### useEffect
- Used for side effects
- Examples: scroll listeners, animation setup

## Styling Approach

### Tailwind CSS
- Utility-first CSS framework
- Classes directly in JSX elements
- Responsive prefixes: sm, md, lg, xl

### CSS Files
- App.css and index.css
- Custom keyframe animations
- Complex selectors
- Global styles

### Framer Motion
- Animation library
- Uses motion components (motion.div, motion.button)
- Defines animation variants
- whileHover for hover animations
- animate prop for mount animations
- transition prop for timing control

## Animation Flow

### On Page Load
1. App mounts
2. VisualEffects renders background animations
3. MarioCharacter renders and sets up scroll listener
4. Sections render with hidden initial state

### On Scroll
1. Scroll event fires
2. MarioCharacter checks scroll position and updates
3. Mario jumps when entering new section
4. Intersection Observer detects section in viewport
5. AnimatedSection triggers entrance animation for that section

### On Hover
1. Mouse enters component
2. Framer Motion detects whileHover
3. Animation applies (scale, rotate, translate)
4. Mouse leaves component
5. Animation reverts to original state

## Asset Organization

```
public/
  assets/
    images/
      my_pic.HEIC
      coding.svg
      projects/
        road_symbol_detection.jpg
        linkedin_clone.jpg
        portfolio.jpg
        sentimental_analysis.jpg
    icons/
      favicon.ico
      logo192.png
      logo512.png
    docs/
      Shubham Tapadiya Resume.pdf
```

- All assets reference paths in components
- Example: src="./assets/images/coding.svg"
- Images loaded when page renders
- Documents open in new browser tab

## State Management

### Local State
- Stored in individual components using useState
- Examples: menu state, hover states, positions

### No Global State Management
- Simple application doesn't require Redux/Context
- Could add Context API for future features:
  * Theme switching
  * User preferences
  * Multi-page routing

## Performance Considerations

1. Image Optimization
   - Use optimized image formats
   - Set explicit width/height
   - Lazy load images where possible

2. Animation Performance
   - Use GPU-accelerated properties (transform, opacity)
   - Avoid animating layout properties
   - Framer Motion handles requestAnimationFrame

3. Code Organization
   - React.lazy for route-based splitting (future)
   - Can be implemented if app grows

4. Browser Caching
   - Assets cached by browser
   - Service worker could be added for PWA

## Development Workflow

### File Changes
1. Edit component file
2. Save file
3. Webpack detects change
4. Hot module replacement updates browser
5. Component re-renders

### Adding New Section
1. Create component file in src/components/
2. Import in App.js
3. Add to JSX in App.js
4. Wrap with AnimatedSection if desired
5. Add link to Navbar
6. Add data to data.js if needed

### Deployment
1. Test locally: npm start
2. Build: npm run build
3. Deploy via Netlify, Vercel, or GitHub Pages

## Key Dependencies

- react: UI library
- framer-motion: Animation library
- react-intersection-observer: Viewport detection
- tailwindcss: CSS framework
- Font Awesome: Icons library

## Browser Compatibility

- Modern browsers required (Chrome, Firefox, Safari, Edge)
- Uses ES6+ JavaScript features
- CSS Grid & Flexbox support required
- No Internet Explorer support

## Mobile Responsiveness

### Breakpoints
- Mobile: less than 768px (single column)
- Tablet: 768px to 1024px (2 columns)
- Desktop: 1024px and above (full layout)

### Touch Support
- Framer Motion handles mouse and touch events
- Animations work on touch devices
- No special touch handling needed

## Future Enhancements

1. Add more projects to data.js
2. Update resume in assets/docs/
3. Implement dark/light theme toggle
4. Add contact form backend
5. Create dynamic data API
6. Add project filtering by technology
7. Implement analytics tracking
8. Add SEO optimizations
9. Create XML sitemap
10. Add blog section with markdown support

