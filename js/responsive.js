// responsive.js - Handles responsive UI/UX and GUI changes for the application

// Media query breakpoints
const breakpoints = {
  sm: 576, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200 // extra large
};

// Function to handle responsive layout changes
function handleResponsiveLayout() {
  // Get the current window width
  const windowWidth = window.innerWidth;

  // Check for each breakpoint and apply styles accordingly
  if (windowWidth < breakpoints.sm) {
    // Apply mobile styles
    document.body.classList.add('mobile');
  } else if (windowWidth < breakpoints.md) {
    // Apply tablet styles
    document.body.classList.add('tablet');
  } else if (windowWidth < breakpoints.lg) {
    // Apply desktop styles
    document.body.classList.add('desktop');
  } else {
    // Apply large desktop styles
    document.body.classList.add('large-desktop');
  }
}

// Add event listener to window resize event
window.addEventListener('resize', handleResponsiveLayout);

// Initialize responsive layout on page load
handleResponsiveLayout();