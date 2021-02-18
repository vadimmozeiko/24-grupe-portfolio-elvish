// IMPORTS
// Nav
import { navScroll } from './components/nav-bar.js'
// Hero
// About
import { ProgressBar } from './components/Progress-bar.js'
import { leftProgressBar } from './data/progress-bars.js'
import { rightProgressBar } from './data/progress-bars.js'
// Services
// Statistics
// Education
// Available Freelancer
// Work
// Client
// Trusted Clients
// Subscribe
// Blog
// Contact
// Footer

// EXECUTION
// Nav
navScroll();
// Hero
particlesJS.load('particles-js','particles.json', function(){});
// About
new ProgressBar('.left-progress', leftProgressBar)
new ProgressBar('.right-progress', rightProgressBar)
// Services
// Statistics
// Education
// Available Freelancer
// Work
// Client
// Trusted Clients
// Subscribe
// Blog
// Contact
// Footer