document.addEventListener('DOMContentLoaded', function() {
  console.log('Yoga Classes Website application loaded');

  // --- Navigation ---
  // Smooth scrolling for navigation links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Hero Section ---
  // Add a dynamic background image and styling for responsiveness
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.classList.add('bg-cover', 'bg-center', 'h-screen', 'flex', 'items-center', 'justify-center', 'text-white', 'relative'); // Added relative for absolute positioning of overlay

    // Add an overlay for better text readability
    const overlay = document.createElement('div');
    overlay.classList.add('absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-black', 'opacity-50');
    heroSection.appendChild(overlay);

    // Style the hero content to be above the overlay
    const heroContent = heroSection.querySelector('.hero-content'); // Assuming a div with class hero-content exists
    if (heroContent) {
      heroContent.classList.add('relative', 'z-10', 'text-center'); // Ensure content is above overlay and centered
    }
  }

  // --- Classes Section ---
  const classesContainer = document.getElementById('classes');
  if (classesContainer) {
    const classesData = [
      { name: 'Hatha Yoga', time: '9:00 AM', description: 'Gentle introduction to yoga.' },
      { name: 'Vinyasa Flow', time: '10:30 AM', description: 'Dynamic and flowing practice.' },
      { name: 'Restorative Yoga', time: '6:00 PM', description: 'Relaxing and rejuvenating session.' },
      { name: 'Ashtanga Yoga', time: '7:30 AM', description: 'A rigorous and dynamic style of yoga.' }, // Added a new class
      { name: 'Yin Yoga', time: '7:00 PM', description: 'A slow-paced style of yoga with long-held poses.' } // Added another new class
    ];

    classesContainer.innerHTML = ''; // Clear existing content

    const fragment = document.createDocumentFragment(); // Use a document fragment for performance

    classesData.forEach(classInfo => {
      const classElement = document.createElement('div');
      classElement.classList.add('class-item', 'p-4', 'border', 'rounded', 'shadow-md', 'w-full', 'md:w-1/2', 'lg:w-1/3', 'mb-4'); // Added mb-4 for spacing

      const heading = document.createElement('h3');
      heading.classList.add('text-xl', 'font-semibold', 'mb-2'); // Added mb-2 for spacing
      heading.textContent = classInfo.name;
      classElement.appendChild(heading);

      const timePara = document.createElement('p');
      timePara.classList.add('text-gray-600', 'mb-2'); // Added mb-2 for spacing
      timePara.textContent = classInfo.time;
      classElement.appendChild(timePara);

      const descriptionPara = document.createElement('p');
      descriptionPara.textContent = classInfo.description;
      classElement.appendChild(descriptionPara);

      fragment.appendChild(classElement); // Append to fragment
    });

    classesContainer.classList.add('flex', 'flex-wrap', 'justify-center', 'container', 'mx-auto', 'py-8'); // Added container, mx-auto, py-8 for responsiveness
    classesContainer.appendChild(fragment); // Append the entire fragment at once
  }

  // --- Testimonials Section ---
  const testimonialsContainer = document.getElementById('testimonials');
  if (testimonialsContainer) {
    const testimonialsData = [
      { author: 'Jane Doe', text: 'Great yoga classes! I feel so much better.' },
      { author: 'John Smith', text: 'The instructors are amazing and very helpful.' },
      { author: 'Alice Brown', text: 'I highly recommend this yoga studio to everyone!' } // Added a new testimonial
    ];

    testimonialsContainer.innerHTML = ''; // Clear existing content

    const fragment = document.createDocumentFragment(); // Use a document fragment for performance

    testimonialsData.forEach(testimonial => {
      const testimonialElement = document.createElement('div');
      testimonialElement.classList.add('testimonial-item', 'p-4', 'border', 'rounded', 'shadow-md', 'w-full', 'md:w-1/2', 'mb-4'); // Added mb-4 for spacing

      const textPara = document.createElement('p');
      textPara.classList.add('italic', 'mb-2'); // Added mb-2 for spacing
      textPara.textContent = testimonial.text;
      testimonialElement.appendChild(textPara);

      const authorPara = document.createElement('p');
      authorPara.classList.add('font-semibold');
      authorPara.textContent = `- ${testimonial.author}`;
      testimonialElement.appendChild(authorPara);

      fragment.appendChild(testimonialElement); // Append to fragment
    });

    testimonialsContainer.classList.add('flex', 'flex-wrap', 'justify-center', 'container', 'mx-auto', 'py-8'); // Added container, mx-auto, py-8 for responsiveness
    testimonialsContainer.appendChild(fragment); // Append the entire fragment at once
  }

  // --- Contact Form ---
  const form = document.querySelector('form');
  if (form) {
    form.classList.add('container', 'mx-auto', 'py-8', 'w-full', 'md:w-1/2'); // Added container, mx-auto, py-8, w-full, md:w-1/2 for responsiveness
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Basic email validation
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }


      console.log('Form submitted:', { name, email, message });

      // In a real app, you would send this data to a server using fetch or XMLHttpRequest
      // For this example, we'll just show a success message.

      // Simulate sending data to the server (replace with actual API call)
      setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
      }, 500);
    });
  }

  // --- Footer ---
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- General Responsiveness Improvements ---
  document.body.classList.add('text-center');

  // --- Helper Functions ---
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // --- Mobile Navigation ---
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the menu
    });
  }

  // --- About Us Section ---
  // Example of adding a new section dynamically
  const aboutUsSection = document.createElement('section');
  aboutUsSection.id = 'about-us';
  aboutUsSection.classList.add('container', 'mx-auto', 'py-16', 'text-center');

  const aboutUsHeading = document.createElement('h2');
  aboutUsHeading.classList.add('text-3xl', 'font-bold', 'mb-4');
  aboutUsHeading.textContent = 'About Us';
  aboutUsSection.appendChild(aboutUsHeading);

  const aboutUsParagraph = document.createElement('p');
  aboutUsParagraph.classList.add('text-gray-700', 'leading-relaxed');
  aboutUsParagraph.textContent = 'We are a team of passionate yoga instructors dedicated to helping you achieve your wellness goals.  Our classes are designed for all levels, from beginners to experienced practitioners.  We believe in creating a supportive and inclusive environment where everyone feels welcome.';
  aboutUsSection.appendChild(aboutUsParagraph);

  // Insert the About Us section before the Contact Form
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.parentNode.insertBefore(aboutUsSection, contactForm);
  } else {
    // If contact form doesn't exist, append to the body (less ideal, but prevents errors)
    document.body.appendChild(aboutUsSection);
  }

  // --- Schedule Page (Simulated) ---
  // This would ideally be on a separate page, but we can simulate it by adding a button that shows/hides a schedule section
  const scheduleButton = document.createElement('button');
  scheduleButton.textContent = 'View Class Schedule';
  scheduleButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'mx-auto', 'block', 'mb-8'); // Added styling

  const scheduleSection = document.createElement('div');
  scheduleSection.id = 'schedule';
  scheduleSection.classList.add('container', 'mx-auto', 'py-8', 'hidden'); // Initially hidden

  const scheduleHeading = document.createElement('h2');
  scheduleHeading.textContent = 'Class Schedule';
  scheduleHeading.classList.add('text-2xl', 'font-semibold', 'mb-4');
  scheduleSection.appendChild(scheduleHeading);

  const scheduleTable = document.createElement('table');
  scheduleTable.classList.add('table-auto', 'w-full'); // Tailwind table classes

  const tableHead = document.createElement('thead');
  tableHead.innerHTML = '<tr><th class="px-4 py-2">Day</th><th class="px-4 py-2">Time</th><th class="px-4 py-2">Class</th></tr>'; // Basic table header
  scheduleTable.appendChild(tableHead);

  const tableBody = document.createElement('tbody');
  tableBody.innerHTML = '<tr><td class="border px-4 py-2">Monday</td><td class="border px-4 py-2">9:00 AM</td><td class="border px-4 py-2">Hatha Yoga</td></tr><tr><td class="border px-4 py-2">Tuesday</td><td class="border px-4 py-2">10:30 AM</td><td class="border px-4 py-2">Vinyasa Flow</td></tr>'; // Example table data
  scheduleTable.appendChild(tableBody);

  scheduleSection.appendChild(scheduleTable);

  // Append the button and schedule section to the body
  document.body.appendChild(scheduleButton);
  document.body.appendChild(scheduleSection);

  // Add event listener to the button to toggle the schedule section
  scheduleButton.addEventListener('click', () => {
    scheduleSection.classList.toggle('hidden');
  });
});