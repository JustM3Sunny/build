document.addEventListener('DOMContentLoaded', function() {
  console.log('Yoga Classes Website application loaded');

  // --- Configuration ---
  const config = {
    smoothScrollDuration: 500, // milliseconds
    formSubmissionDelay: 500, // milliseconds
  };

  // --- Navigation ---
  // Smooth scrolling for navigation links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        scrollToTarget(targetElement, config.smoothScrollDuration);
      }
    });
  });

  function scrollToTarget(targetElement, duration) {
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // --- Hero Section ---
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.classList.add('bg-cover', 'bg-center', 'h-screen', 'flex', 'items-center', 'justify-center', 'text-white', 'relative');

    const overlay = document.createElement('div');
    overlay.classList.add('absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-black', 'opacity-50');
    heroSection.appendChild(overlay);

    const heroContent = heroSection.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('relative', 'z-10', 'text-center');
    }
  }

  // --- Classes Section ---
  const classesContainer = document.getElementById('classes');
  if (classesContainer) {
    const classesData = [
      { name: 'Hatha Yoga', time: '9:00 AM', description: 'Gentle introduction to yoga.' },
      { name: 'Vinyasa Flow', time: '10:30 AM', description: 'Dynamic and flowing practice.' },
      { name: 'Restorative Yoga', time: '6:00 PM', description: 'Relaxing and rejuvenating session.' },
      { name: 'Ashtanga Yoga', time: '7:30 AM', description: 'A rigorous and dynamic style of yoga.' },
      { name: 'Yin Yoga', time: '7:00 PM', description: 'A slow-paced style of yoga with long-held poses.' }
    ];

    renderSection(classesContainer, classesData, createClassElement);
  }

  // --- Testimonials Section ---
  const testimonialsContainer = document.getElementById('testimonials');
  if (testimonialsContainer) {
    const testimonialsData = [
      { author: 'Jane Doe', text: 'Great yoga classes! I feel so much better.' },
      { author: 'John Smith', text: 'The instructors are amazing and very helpful.' },
      { author: 'Alice Brown', text: 'I highly recommend this yoga studio to everyone!' }
    ];

    renderSection(testimonialsContainer, testimonialsData, createTestimonialElement);
  }

  function renderSection(container, data, createElement) {
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    data.forEach(itemData => {
      const element = createElement(itemData);
      fragment.appendChild(element);
    });

    container.classList.add('flex', 'flex-wrap', 'justify-center', 'container', 'mx-auto', 'py-8');
    container.appendChild(fragment);
  }

  function createClassElement(classInfo) {
    const classElement = document.createElement('div');
    classElement.classList.add('class-item', 'p-4', 'border', 'rounded', 'shadow-md', 'w-full', 'md:w-1/2', 'lg:w-1/3', 'mb-4');

    const heading = document.createElement('h3');
    heading.classList.add('text-xl', 'font-semibold', 'mb-2');
    heading.textContent = classInfo.name;
    classElement.appendChild(heading);

    const timePara = document.createElement('p');
    timePara.classList.add('text-gray-600', 'mb-2');
    timePara.textContent = classInfo.time;
    classElement.appendChild(timePara);

    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = classInfo.description;
    classElement.appendChild(descriptionPara);

    return classElement;
  }

  function createTestimonialElement(testimonial) {
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial-item', 'p-4', 'border', 'rounded', 'shadow-md', 'w-full', 'md:w-1/2', 'mb-4');

    const textPara = document.createElement('p');
    textPara.classList.add('italic', 'mb-2');
    textPara.textContent = testimonial.text;
    testimonialElement.appendChild(textPara);

    const authorPara = document.createElement('p');
    authorPara.classList.add('font-semibold');
    authorPara.textContent = `- ${testimonial.author}`;
    testimonialElement.appendChild(authorPara);

    return testimonialElement;
  }

  // --- Contact Form ---
  const form = document.querySelector('form');
  if (form) {
    form.classList.add('container', 'mx-auto', 'py-8', 'w-full', 'md:w-1/2');
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Simulate form submission to a server (replace with actual API call)
      simulateFormSubmission({ name, email, message })
        .then(() => {
          alert('Thank you for your message! We will get back to you soon.');
          form.reset();
        })
        .catch(error => {
          console.error('Form submission failed:', error);
          alert('Form submission failed. Please try again later.');
        });
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

  // Simulate form submission (replace with actual API call)
  function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success or failure based on some condition (e.g., email contains "error")
        if (data.email.includes('error')) {
          reject(new Error('Simulated server error'));
        } else {
          console.log('Form data submitted to server (simulated):', data);
          resolve();
        }
      }, config.formSubmissionDelay);
    });
  }

  // --- Mobile Navigation ---
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- About Us Section ---
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

  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.parentNode.insertBefore(aboutUsSection, contactForm);
  } else {
    document.body.appendChild(aboutUsSection);
  }

  // --- Schedule Page (Simulated) ---
  const scheduleButton = document.createElement('button');
  scheduleButton.textContent = 'View Class Schedule';
  scheduleButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'mx-auto', 'block', 'mb-8');

  const scheduleSection = document.createElement('div');
  scheduleSection.id = 'schedule';
  scheduleSection.classList.add('container', 'mx-auto', 'py-8', 'hidden');

  const scheduleHeading = document.createElement('h2');
  scheduleHeading.textContent = 'Class Schedule';
  scheduleHeading.classList.add('text-2xl', 'font-semibold', 'mb-4');
  scheduleSection.appendChild(scheduleHeading);

  const scheduleTable = document.createElement('table');
  scheduleTable.classList.add('table-auto', 'w-full');

  const tableHead = document.createElement('thead');
  tableHead.innerHTML = '<tr><th class="px-4 py-2">Day</th><th class="px-4 py-2">Time</th><th class="px-4 py-2">Class</th></tr>';
  scheduleTable.appendChild(tableHead);

  const tableBody = document.createElement('tbody');
  tableBody.innerHTML = '<tr><td class="border px-4 py-2">Monday</td><td class="border px-4 py-2">9:00 AM</td><td class="border px-4 py-2">Hatha Yoga</td></tr><tr><td class="border px-4 py-2">Tuesday</td><td class="border px-4 py-2">10:30 AM</td><td class="border px-4 py-2">Vinyasa Flow</td></tr>';
  scheduleTable.appendChild(tableBody);

  scheduleSection.appendChild(scheduleTable);

  document.body.appendChild(scheduleButton);
  document.body.appendChild(scheduleSection);

  scheduleButton.addEventListener('click', () => {
    scheduleSection.classList.toggle('hidden');
  });
});