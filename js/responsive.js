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

  // Remove existing classes to avoid conflicts
  document.body.classList.remove('mobile', 'tablet', 'desktop', 'large-desktop');

  // Check for each breakpoint and apply styles accordingly
  if (windowWidth < breakpoints.sm) {
    // Apply mobile styles
    document.body.classList.add('mobile');
    // Example: Adjust navigation for mobile
    adjustMobileNavigation();
  } else if (windowWidth < breakpoints.md) {
    // Apply tablet styles
    document.body.classList.add('tablet');
    // Example: Adjust grid layout for tablet
    adjustTabletLayout();
  } else if (windowWidth < breakpoints.lg) {
    // Apply desktop styles
    document.body.classList.add('desktop');
    // Example: Adjust font sizes for desktop
    adjustDesktopFonts();
  } else {
    // Apply large desktop styles
    document.body.classList.add('large-desktop');
    // Example: Adjust spacing for large desktops
    adjustLargeDesktopSpacing();
  }
}

// Function to adjust mobile navigation (example)
function adjustMobileNavigation() {
  // Add your mobile navigation logic here
  // For example, show a hamburger menu
  console.log("Mobile navigation adjustments");
  // You might want to toggle a class on a navigation element
  // document.getElementById('main-nav').classList.toggle('mobile-nav');
}

// Function to adjust tablet layout (example)
function adjustTabletLayout() {
  // Add your tablet layout logic here
  // For example, change the number of columns in a grid
  console.log("Tablet layout adjustments");
  // You might want to adjust grid column counts
  // document.getElementById('content-grid').classList.add('tablet-grid');
}

// Function to adjust desktop fonts (example)
function adjustDesktopFonts() {
  // Add your desktop font adjustments here
  console.log("Desktop font adjustments");
  // You might want to change the font size of headings
  // document.querySelector('h1').style.fontSize = '2.5em';
}

// Function to adjust spacing for large desktops (example)
function adjustLargeDesktopSpacing() {
  // Add your large desktop spacing adjustments here
  console.log("Large desktop spacing adjustments");
  // You might want to increase the padding around elements
  // document.getElementById('main-content').style.padding = '2em';
}


// Add event listener to window resize event
window.addEventListener('resize', handleResponsiveLayout);

// Initialize responsive layout on page load
handleResponsiveLayout();