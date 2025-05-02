// new-functions.js
// This file contains JavaScript functions to support UI/UX GUI changes

// Function to make the GUI responsive
function makeResponsive() {
  const sections = document.querySelectorAll('section');
  const pages = document.querySelectorAll('.page');

  const resizeHandler = () => {
    sections.forEach(element => {
      element.style.width = `${window.innerWidth}px`;
      element.style.height = `${window.innerHeight}px`;
    });

    pages.forEach(element => {
      element.style.width = `${window.innerWidth}px`;
      element.style.height = `${window.innerHeight}px`;
    });
  };

  // Initial resize to set correct dimensions on load
  resizeHandler();

  // Debounce the resize event to improve performance
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeHandler, 100); // Adjust delay as needed
  });
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

  const sectionContent = document.createElement('div');
  sectionContent.innerHTML = '<h2>New Section</h2><p>This is a new section.</p>';
  newSection.appendChild(sectionContent);

  const pageContent = document.createElement('div');
  pageContent.innerHTML = '<h2>New Page</h2><p>This is a new page.</p>';
  newPage.appendChild(pageContent);

  mainContainer.appendChild(newSection);
  mainContainer.appendChild(newPage);
}

// Call the functions
makeResponsive();
addSectionAndPage('main-container');