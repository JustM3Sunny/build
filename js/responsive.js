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

  // Remove existing breakpoint classes.  Use a more efficient method.
  document.body.classList.remove(...Object.values(breakpointNames));


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
  console.log("Mobile navigation adjustments");
  // Example:
  // const nav = document.getElementById('main-nav');
  // if (nav) {
  //   nav.classList.toggle('mobile-nav');
  // }
}

// Function to adjust tablet layout (example)
function adjustTabletLayout() {
  // Add your tablet layout logic here
  console.log("Tablet layout adjustments");
  // Example:
  // const grid = document.getElementById('content-grid');
  // if (grid) {
  //   grid.classList.add('tablet-grid');
  // }
}

// Function to adjust desktop fonts (example)
function adjustDesktopFonts() {
  // Add your desktop font adjustments here
  console.log("Desktop font adjustments");
  // Example:
  // const heading = document.querySelector('h1');
  // if (heading) {
  //   heading.style.fontSize = '2.5em';
  // }
}

// Function to adjust spacing for large desktops (example)
function adjustLargeDesktopSpacing() {
  // Add your large desktop spacing adjustments here
  console.log("Large desktop spacing adjustments");
  // Example:
  // const content = document.getElementById('main-content');
  // if (content) {
  //   content.style.padding = '2em';
  // }
}


// Add event listener to window resize event
// Debounce the resize event to improve performance
function debounce(func, delay) {
  let timeout;
  return function(...args) { // Use rest parameter for arguments
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

const debouncedHandleResponsiveLayout = debounce(handleResponsiveLayout, 100); // Adjust delay as needed

window.addEventListener('resize', debouncedHandleResponsiveLayout);

// Initialize responsive layout on page load
handleResponsiveLayout();