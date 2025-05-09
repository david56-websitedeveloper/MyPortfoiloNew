     // Mobile menu toggle
     const menuBtn = document.getElementById('menu-btn');
     const mobileMenu = document.getElementById('mobile-menu');
     
     menuBtn.addEventListener('click', () => {
         mobileMenu.classList.toggle('hidden');
     });
     
     // Smooth scrolling for navigation links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
             e.preventDefault();
             
             const targetId = this.getAttribute('href');
             const targetElement = document.querySelector(targetId);
             
             if (targetElement) {
                 window.scrollTo({
                     top: targetElement.offsetTop - 80,
                     behavior: 'smooth'
                 });
                 
                 // Close mobile menu if open
                 mobileMenu.classList.add('hidden');
             }
         });
     });
     
     // Contact form submission
     const contactForm = document.getElementById('contact-form');
     const formMessage = document.getElementById('form-message');
     
     contactForm.addEventListener('submit', function(e) {
         e.preventDefault();
         
         // Simulate form submission
         formMessage.textContent = "Thank you for your message! I'll get back to you soon.";
         formMessage.classList.remove('hidden', 'text-red-500');
         formMessage.classList.add('text-green-500');
         
         // Reset form
         contactForm.reset();
         
         // Hide message after 5 seconds
         setTimeout(() => {
             formMessage.classList.add('hidden');
         }, 5000);
     });
     
     // Scroll animation
     const animateOnScroll = () => {
         const elements = document.querySelectorAll('.project-card, .nav-link');
         
         elements.forEach(element => {
             const elementPosition = element.getBoundingClientRect().top;
             const screenPosition = window.innerHeight / 1.2;
             
             if (elementPosition < screenPosition) {
                 element.style.opacity = '1';
                 element.style.transform = 'translateY(0)';
             }
         });
     };
     
     // Set initial state for animated elements
     document.querySelectorAll('.project-card, .nav-link').forEach(element => {
         element.style.opacity = '0';
         element.style.transform = 'translateY(20px)';
         element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
     });
     
     // Run animation on scroll
     window.addEventListener('scroll', animateOnScroll);
     // Run once on page load
     animateOnScroll();