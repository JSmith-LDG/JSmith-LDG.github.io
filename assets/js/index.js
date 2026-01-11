document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Enhanced navigation highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Add active class styling to navigation
  const style = document.createElement('style');
  style.textContent = `
    .site-nav a.active {
      background-color: rgba(255, 255, 255, 0.2);
      border-bottom: 2px solid var(--accent-color);
    }
  `;
  document.head.appendChild(style);

  // Enhanced pixel animation
  const background = document.getElementById('retro-background');
  function createPixels() {
    const numberOfPixels = 50; // Reduced for better performance
    for (let i = 0; i < numberOfPixels; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.left = `${Math.random() * 100}vw`;
      pixel.style.top = `${Math.random() * 100}vh`;
      pixel.style.animationDuration = `${Math.random() * 15 + 10}s`;
      pixel.style.animationDelay = `${Math.random() * 5}s`;
      background.appendChild(pixel);
    }
  }

  createPixels();

  // Add loading animation for project cards
  const projectCards = document.querySelectorAll('.project-card');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Contact form functionality (if added later)
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Add form submission logic here
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
});