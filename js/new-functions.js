// new-functions.js
// This file contains JavaScript functions to support UI/UX GUI changes

// Function to make the GUI responsive
function makeResponsive() {
  const sections = document.querySelectorAll('section');
  const pages = document.querySelectorAll('.page');

  const resizeHandler = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    sections.forEach(element => {
      element.style.width = `${viewportWidth}px`;
      element.style.height = `${viewportHeight}px`;
    });

    pages.forEach(element => {
      element.style.width = `${viewportWidth}px`;
      element.style.height = `${viewportHeight}px`;
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

  // Consider using ResizeObserver API for more robust responsiveness if needed.
  // Example:
  // const resizeObserver = new ResizeObserver(entries => {
  //   for (let entry of entries) {
  //     // Update element styles based on entry.contentRect
  //   }
  // });
  // sections.forEach(section => resizeObserver.observe(section));
  // pages.forEach(page => resizeObserver.observe(page));
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

  // Use createTextNode and appendChild for better security and performance
  const sectionHeading = document.createElement('h2');
  sectionHeading.appendChild(document.createTextNode('New Section'));
  const sectionParagraph = document.createElement('p');
  sectionParagraph.appendChild(document.createTextNode('This is a new section.'));
  const sectionContent = document.createElement('div');
  sectionContent.appendChild(sectionHeading);
  sectionContent.appendChild(sectionParagraph);
  newSection.appendChild(sectionContent);

  const pageHeading = document.createElement('h2');
  pageHeading.appendChild(document.createTextNode('New Page'));
  const pageParagraph = document.createElement('p');
  pageParagraph.appendChild(document.createTextNode('This is a new page.'));
  const pageContent = document.createElement('div');
  pageContent.appendChild(pageHeading);
  pageContent.appendChild(pageParagraph);
  newPage.appendChild(pageContent);

  mainContainer.appendChild(newSection);
  mainContainer.appendChild(newPage);
}

// Call the functions
document.addEventListener('DOMContentLoaded', () => {
  makeResponsive();
  addSectionAndPage('main-container');
});