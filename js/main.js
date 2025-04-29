// Main JavaScript file for Yoga Classes Website

document.addEventListener('DOMContentLoaded', function() {
  console.log('Yoga Classes Website application loaded');

  // --- Navigation ---
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
    //  heroSection.style.backgroundImage = "url('img/yoga-background.jpg')"; // Replace with your image path
    //  heroSection.style.backgroundSize = 'cover';
    //  heroSection.style.backgroundPosition = 'center';
  }

  // --- Classes Section ---
  // (Example: Dynamically load class data - replace with actual data fetching)
  const classesContainer = document.getElementById('classes');
  if (classesContainer) {
    const classesData = [
      { name: 'Hatha Yoga', time: '9:00 AM', description: 'Gentle introduction to yoga.' },
      { name: 'Vinyasa Flow', time: '10:30 AM', description: 'Dynamic and flowing practice.' },
      { name: 'Restorative Yoga', time: '6:00 PM', description: 'Relaxing and rejuvenating session.' }
    ];

    classesData.forEach(classInfo => {
      const classElement = document.createElement('div');
      classElement.classList.add('class-item', 'p-4', 'border', 'rounded', 'shadow-md'); // Tailwind classes

      classElement.innerHTML = `
        <h3 class="text-xl font-semibold">${classInfo.name}</h3>
        <p class="text-gray-600">${classInfo.time}</p>
        <p>${classInfo.description}</p>
      `;

      classesContainer.appendChild(classElement);
    });
  }

  // --- Testimonials Section ---
  // (Example: Dynamically load testimonials - replace with actual data fetching)
  const testimonialsContainer = document.getElementById('testimonials');
  if (testimonialsContainer) {
    const testimonialsData = [
      { author: 'Jane Doe', text: 'Great yoga classes! I feel so much better.' },
      { author: 'John Smith', text: 'The instructors are amazing and very helpful.' }
    ];

    testimonialsData.forEach(testimonial => {
      const testimonialElement = document.createElement('div');
      testimonialElement.classList.add('testimonial-item', 'p-4', 'border', 'rounded', 'shadow-md'); // Tailwind classes

      testimonialElement.innerHTML = `
        <p class="italic">${testimonial.text}</p>
        <p class="font-semibold">- ${testimonial.author}</p>
      `;

      testimonialsContainer.appendChild(testimonialElement);
    });
  }

  // --- Contact Form ---
  // Form submission handling
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      console.log('Form submitted:', { name, email, message });

      // In a real app, you would send this data to a server using fetch or XMLHttpRequest
      // For this example, we'll just show a success message.

      // Simulate sending data to the server (replace with actual API call)
      setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
      }, 500); // Simulate a 0.5 second delay
    });
  }

  // --- Footer ---
  // (Example: Add dynamic year to the footer)
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});