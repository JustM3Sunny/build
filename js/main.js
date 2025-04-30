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
  // (Example: Add a dynamic background image - replace with actual logic)
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    // heroSection.style.backgroundImage = "url('img/yoga-background.jpg')"; // Replace with your image path
    // heroSection.style.backgroundSize = 'cover';
    // heroSection.style.backgroundPosition = 'center';
  }

  // --- Classes Section ---
  const classesContainer = document.getElementById('classes');
  if (classesContainer) {
    const classesData = [
      { name: 'Hatha Yoga', time: '9:00 AM', description: 'Gentle introduction to yoga.' },
      { name: 'Vinyasa Flow', time: '10:30 AM', description: 'Dynamic and flowing practice.' },
      { name: 'Restorative Yoga', time: '6:00 PM', description: 'Relaxing and rejuvenating session.' }
    ];

    classesContainer.innerHTML = ''; // Clear existing content

    const fragment = document.createDocumentFragment(); // Use a document fragment for performance

    classesData.forEach(classInfo => {
      const classElement = document.createElement('div');
      classElement.classList.add('class-item', 'p-4', 'border', 'rounded', 'shadow-md', 'w-full', 'md:w-1/2', 'lg:w-1/3');

      const heading = document.createElement('h3');
      heading.classList.add('text-xl', 'font-semibold');
      heading.textContent = classInfo.name;
      classElement.appendChild(heading);

      const timePara = document.createElement('p');
      timePara.classList.add('text-gray-600');
      timePara.textContent = classInfo.time;
      classElement.appendChild(timePara);

      const descriptionPara = document.createElement('p');
      descriptionPara.textContent = classInfo.description;
      classElement.appendChild(descriptionPara);

      fragment.appendChild(classElement); // Append to fragment
    });

    classesContainer.classList.add('flex', 'flex-wrap', 'justify-center');
    classesContainer.appendChild(fragment); // Append the entire fragment at once
  }

  // --- Testimonials Section ---
  const testimonialsContainer = document.getElementById('testimonials');
  if (testimonialsContainer) {
    const testimonialsData = [
      { author: 'Jane Doe', text: 'Great yoga classes! I feel so much better.' },
      { author: 'John Smith', text: 'The instructors are amazing and very helpful.' }
    ];

    testimonialsContainer.innerHTML = ''; // Clear existing content

    const fragment = document.createDocumentFragment(); // Use a document fragment for performance

    testimonialsData.forEach(testimonial => {
      const testimonialElement = document.createElement('div');
      testimonialElement.classList.add('testimonial-item', 'p-4', 'border', 'rounded', 'shadow-md', 'w-full', 'md:w-1/2');

      const textPara = document.createElement('p');
      textPara.classList.add('italic');
      textPara.textContent = testimonial.text;
      testimonialElement.appendChild(textPara);

      const authorPara = document.createElement('p');
      authorPara.classList.add('font-semibold');
      authorPara.textContent = `- ${testimonial.author}`;
      testimonialElement.appendChild(authorPara);

      fragment.appendChild(testimonialElement); // Append to fragment
    });

    testimonialsContainer.classList.add('flex', 'flex-wrap', 'justify-center');
    testimonialsContainer.appendChild(fragment); // Append the entire fragment at once
  }

  // --- Contact Form ---
  const form = document.querySelector('form');
  if (form) {
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
});