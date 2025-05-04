// responsive.js - Handles responsive UI/UX and GUI changes for the application

// Media query breakpoints
const breakpoints = {
  sm: 576, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};

// Breakpoint names for clarity and maintainability
const breakpointNames = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
  largeDesktop: 'large-desktop',
};

// Function to determine the current breakpoint
function getCurrentBreakpoint(windowWidth) {
  if (windowWidth < breakpoints.sm) {
    return breakpointNames.mobile;
  } else if (windowWidth < breakpoints.md) {
    return breakpointNames.tablet;
  } else if (windowWidth < breakpoints.lg) {
    return breakpointNames.desktop;
  } else {
    return breakpointNames.largeDesktop;
  }
}


// Function to handle responsive layout changes
function handleResponsiveLayout() {
  // Get the current window width
  const windowWidth = window.innerWidth;

  // Determine the current breakpoint
  const currentBreakpoint = getCurrentBreakpoint(windowWidth);

  // Apply styles based on the current breakpoint
  applyBreakpointStyles(currentBreakpoint);
}

const breakpointActions = {
    [breakpointNames.mobile]: adjustMobileNavigation,
    [breakpointNames.tablet]: adjustTabletLayout,
    [breakpointNames.desktop]: adjustDesktopFonts,
    [breakpointNames.largeDesktop]: adjustLargeDesktopSpacing,
};

let previousBreakpoint = null; // Store the previous breakpoint

function applyBreakpointStyles(breakpoint) {
  if (breakpoint === previousBreakpoint) {
    return; // Avoid unnecessary updates
  }

  // Remove existing breakpoint classes
  Object.values(breakpointNames).forEach(name => document.body.classList.remove(name));

  // Add the current breakpoint class
  document.body.classList.add(breakpoint);

  // Call the specific adjustment function
  if (breakpointActions[breakpoint]) {
    breakpointActions[breakpoint]();
  } else {
    console.warn(`No action defined for breakpoint: ${breakpoint}`);
  }

  previousBreakpoint = breakpoint; // Update the previous breakpoint
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
// Debounce the resize event to improve performance
function debounce(func, delay) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

const debouncedHandleResponsiveLayout = debounce(handleResponsiveLayout, 100); // Adjust delay as needed

window.addEventListener('resize', debouncedHandleResponsiveLayout);

// Initialize responsive layout on page load
handleResponsiveLayout();