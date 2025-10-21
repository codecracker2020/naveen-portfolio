// ==========================================
// Navigation Menu Toggle
// ==========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==========================================
// Navbar Scroll Effect
// ==========================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// Typing Animation
// ==========================================
const typingText = document.querySelector('.typing-text');
const roles = [
    'UI Architect',
    'AI Specialist',
    'Industrial Automation',
    'Angular Expert',
    'Problem Solver',
    'Tech Enthusiast',
    'Code Craftsman',
    'Unit Tester',
    'n8n Workflow',
    'Node Red'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeRole, typingSpeed);
}

// Start typing animation
setTimeout(typeRole, 1000);

// ==========================================
// Particles Animation
// ==========================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Scroll Reveal Animation
// ==========================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.skill-card, .timeline-item, .contact-item');
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('reveal', 'active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// ==========================================
// Active Navigation Link Highlight
// ==========================================
function highlightNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==========================================
// Parallax Effect for Hero Section
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - scrolled / 600;
    }
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// ==========================================
// Animated Counter for Stats (Optional)
// ==========================================
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ==========================================
// Cursor Trail Effect (Optional Enhancement)
// ==========================================
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

if (circles.length === 0 && window.innerWidth > 768) {
    // Create cursor trail circles
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: rgba(100, 255, 218, 0.3);
            pointer-events: none;
            z-index: 9999;
            transition: all 0.3s ease;
        `;
        document.body.appendChild(circle);
    }
}

const circleElements = document.querySelectorAll('.circle');

circleElements.forEach((circle, index) => {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circleElements.forEach((circle, index) => {
        circle.style.left = x - 5 + 'px';
        circle.style.top = y - 5 + 'px';
        circle.style.transform = `scale(${(circleElements.length - index) / circleElements.length})`;
        
        circle.x = x;
        circle.y = y;
        
        const nextCircle = circleElements[index + 1] || circleElements[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
}

if (window.innerWidth > 768) {
    animateCircles();
}

// ==========================================
// Button Ripple Effect
// ==========================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.cssText += `
            position: absolute;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.3);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// Image Lazy Loading
// ==========================================
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// ==========================================
// Tilt Effect for Cards
// ==========================================
const cards = document.querySelectorAll('.skill-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================================
// Page Load Animation
// ==========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero section
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.animation = 'fadeInLeft 1s ease-out';
        }, 100);
    }
    
    if (heroImage) {
        setTimeout(() => {
            heroImage.style.animation = 'fadeInRight 1s ease-out';
        }, 300);
    }
});

// ==========================================
// Scroll Progress Indicator
// ==========================================
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #64ffda 0%, #fff 100%);
    z-index: 10000;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ==========================================
// Console Easter Egg
// ==========================================
console.log('%c👋 Hello there!', 'color: #64ffda; font-size: 24px; font-weight: bold;');
console.log('%cLooking to hire? Let\'s connect!', 'color: #8892b0; font-size: 16px;');
console.log('%cEmail: knaveenbabu@gmail.com', 'color: #64ffda; font-size: 14px;');
console.log('%cLinkedIn: https://www.linkedin.com/in/naveen-babu-84a71744', 'color: #64ffda; font-size: 14px;');

// ==========================================
// Form Validation (if contact form exists)
// ==========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form submission logic here
        const formData = new FormData(contactForm);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Message sent successfully!';
        successMessage.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background-color: #64ffda;
            color: #0a192f;
            padding: 20px;
            border-radius: 8px;
            font-weight: 600;
            z-index: 10000;
            animation: slideInRight 0.5s ease-out;
        `;
        
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
        
        contactForm.reset();
    });
}

// ==========================================
// Dark/Light Mode Toggle (Optional)
// ==========================================
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌙';
themeToggle.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 4px 16px rgba(100, 255, 218, 0.3);
    transition: all 0.3s ease;
`;

themeToggle.addEventListener('click', () => {
    // Add theme toggle functionality here if needed
    themeToggle.innerHTML = themeToggle.innerHTML === '🌙' ? '☀️' : '🌙';
});

// Uncomment to add theme toggle button
// document.body.appendChild(themeToggle);

console.log('%c✨ Portfolio loaded successfully!', 'color: #64ffda; font-size: 14px;');
