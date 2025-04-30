// js/utils.js

/**
 * Utility functions for the Yoga Classes website.
 */

/**
 * Function to smoothly scroll to a target element on the page.
 * @param {string} targetId - The ID of the element to scroll to.
 */
function scrollToElement(targetId) {
  if (!targetId) {
    console.warn('scrollToElement: targetId is required.');
    return;
  }

  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    console.warn(`scrollToElement: Element with ID "${targetId}" not found.`);
    return;
  }

  targetElement.scrollIntoView({
    behavior: 'smooth'
  });
}

/**
 * Function to toggle the visibility of a mobile navigation menu.
 * This assumes a menu element with a specific ID and a class to toggle.
 */
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuButton = document.getElementById('menu-button'); // Assuming a button with this ID

  if (!mobileMenu) {
    console.warn('toggleMobileMenu: Mobile menu element with ID "mobile-menu" not found.');
    return;
  }

  const isHidden = mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');

  if (menuButton) {
    menuButton.textContent = isHidden ? 'Close' : 'Menu'; // Or use an icon
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

  if (!nameInput || !emailInput || !messageInput) {
    console.error('validateContactForm: One or more form elements are missing.');
    return false; // Or throw an error, depending on the desired behavior
  }

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name) {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

  if (!email) {
    alert('Please enter your email.');
    emailInput.focus();
    return false;
  }

  // Improved email validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return false;
  }

  if (!message) {
    alert('Please enter your message.');
    messageInput.focus();
    return false;
  }

  return true;
}

/**
 * Function to handle form submission.
 * @param {Event} event - The form submission event.
 */
async function handleContactFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  if (validateContactForm()) {
    try {
      const form = document.getElementById('contact-form');
      if (!form) {
        console.error('Contact form not found.');
        alert('An error occurred. Please try again later.');
        return;
      }

      const formData = new FormData(form);
      const response = await fetch('/api/contact', { // Replace with your API endpoint
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
        throw new Error(errorMessage);
      }

      const result = await response.json(); // Assuming the API returns JSON

      alert('Form submitted successfully!');
      form.reset();

    } catch (error) {
      console.error('Form submission failed:', error);
      alert(`Form submission failed: ${error.message}. Please try again later.`);
    }
  }
}

// Export the functions (if using modules)
export { scrollToElement, toggleMobileMenu, validateContactForm, handleContactFormSubmit };