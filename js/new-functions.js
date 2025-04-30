// new-functions.js
// This file contains new JavaScript functions to support the full UI/UX GUI change

// Function to make the GUI fully responsive
function makeResponsive() {
  // Get all sections and pages
  const sections = document.querySelectorAll('section');
  const pages = document.querySelectorAll('.page');

  // Add event listener to window resize event
  window.addEventListener('resize', () => {
    // Iterate through sections and pages
    sections.forEach((section) => {
      // Set section width and height based on window size
      section.style.width = `${window.innerWidth}px`;
      section.style.height = `${window.innerHeight}px`;
    });

    pages.forEach((page) => {
      // Set page width and height based on window size
      page.style.width = `${window.innerWidth}px`;
      page.style.height = `${window.innerHeight}px`;
    });
  });
}

// Function to add more sections and pages
function addMoreSectionsAndPages() {
  // Get the main container element
  const mainContainer = document.getElementById('main-container');

  // Create new section and page elements
  const newSection = document.createElement('section');
  const newPage = document.createElement('div');
  newPage.className = 'page';

  // Add content to new section and page
  newSection.innerHTML = '<h2>New Section</h2><p>This is a new section.</p>';
  newPage.innerHTML = '<h2>New Page</h2><p>This is a new page.</p>';

  // Append new section and page to main container
  mainContainer.appendChild(newSection);
  mainContainer.appendChild(newPage);
}

// Call the functions to make the GUI fully responsive and add more sections and pages
makeResponsive();
addMoreSectionsAndPages();