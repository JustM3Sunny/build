// new-functions.js
// This file contains JavaScript functions to support UI/UX GUI changes

// Function to make the GUI responsive
function makeResponsive() {
  const sections = document.querySelectorAll('section');
  const pages = document.querySelectorAll('.page');

  const resizeHandler = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    sections.forEach(section => {
      section.style.width = `${viewportWidth}px`;
      section.style.height = `${viewportHeight}px`;
    });

    pages.forEach(page => {
      page.style.width = `${viewportWidth}px`;
      page.style.height = `${viewportHeight}px`;
    });
  };

  // Initial resize to set correct dimensions on load
  resizeHandler();

  // Debounce the resize event to improve performance
  let resizeTimeout;
  const debouncedResizeHandler = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeHandler, 100); // Adjust delay as needed
  };

  window.addEventListener('resize', debouncedResizeHandler);

  // Using ResizeObserver API for more robust responsiveness
  const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
      const element = entry.target;
      element.style.width = `${entry.contentRect.width}px`;
      element.style.height = `${entry.contentRect.height}px`;
    }
  });

  sections.forEach(section => resizeObserver.observe(section));
  pages.forEach(page => resizeObserver.observe(page));

  // Clean up the initial resize event listener after ResizeObserver is set up
  window.removeEventListener('resize', debouncedResizeHandler);
}

// Function to add a section and a page
function addSectionAndPage(containerId) {
  const mainContainer = document.getElementById(containerId);

  if (!mainContainer) {
    console.error(`Container with ID '${containerId}' not found.`);
    return;
  }

  const newSection = document.createElement('section');
  const newPage = document.createElement('div');
  newPage.className = 'page';

  // Helper function to create elements with text content
  const createElementWithText = (tag, text) => {
    const element = document.createElement(tag);
    element.textContent = text; // Use textContent for security and simplicity
    return element;
  };

  const sectionHeading = createElementWithText('h2', 'New Section');
  const sectionParagraph = createElementWithText('p', 'This is a new section.');
  newSection.appendChild(sectionHeading);
  newSection.appendChild(sectionParagraph);

  const pageHeading = createElementWithText('h2', 'New Page');
  const pageParagraph = createElementWithText('p', 'This is a new page.');
  newPage.appendChild(pageHeading);
  newPage.appendChild(pageParagraph);

  mainContainer.appendChild(newSection);
  mainContainer.appendChild(newPage);
}

// Call the functions
document.addEventListener('DOMContentLoaded', () => {
  makeResponsive();
  addSectionAndPage('main-container');
});