// js/utils.js

/**
 * Utility functions for the Yoga Classes website.
 */

/**
 * Function to smoothly scroll to a target element on the page.
 * @param {string} targetId - The ID of the element to scroll to.
 */
function scrollToElement(targetId) {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    console.warn(`Element with ID "${targetId}" not found.`);
  }
}

/**
 * Function to toggle the visibility of a mobile navigation menu.
 * This assumes a menu element with a specific ID and a class to toggle.
 */
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuButton = document.getElementById('menu-button'); // Assuming a button with this ID

  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden'); // Tailwind class to hide/show
    // Optionally, update the button's text or icon
    if (menuButton) {
      if (mobileMenu.classList.contains('hidden')) {
        menuButton.textContent = 'Menu'; // Or use an icon
      } else {
        menuButton.textContent = 'Close'; // Or use an icon
      }
    }
  } else {
    console.warn('Mobile menu element with ID "mobile-menu" not found.');
  }
}

/**
 * Function to validate a simple contact form.
 * @returns {boolean} - True if the form is valid, false otherwise.
 */
function validateContactForm() {
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  if (!nameInput.value.trim()) {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

  if (!emailInput.value.trim()) {
    alert('Please enter your email.');
    emailInput.focus();
    return false;
  }

  // Basic email validation (can be improved with regex)
  if (!emailInput.value.includes('@')) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return false;
  }

  if (!messageInput.value.trim()) {
    alert('Please enter your message.');
    messageInput.focus();
    return false;
  }

  return true;
}

/**
 * Function to handle form submission (simulated).
 * @param {Event} event - The form submission event.
 */
function handleContactFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  if (validateContactForm()) {
    // Simulate form submission (replace with actual AJAX call)
    alert('Form submitted successfully! (Simulated)');

    // Reset the form (optional)
    document.getElementById('contact-form').reset();
  }
}

// Export the functions (if using modules)
export { scrollToElement, toggleMobileMenu, validateContactForm, handleContactFormSubmit };