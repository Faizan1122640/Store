// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// WhatsApp Order Function
function orderOnWhatsApp(productName, price) {
    const message = `Hi! I want to order ${productName}. Price: ${price}. Is it available?`;
    const whatsappUrl = `https://wa.me/+923157603693?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// View Product Details Function
function viewProduct(name, price, image, description, category) {
    // Create URL parameters
    const params = new URLSearchParams({
        name: name,
        price: price,
        image: image,
        desc: description,
        category: category
    });

    // Navigate to product detail page
    window.location.href = `product.html?${params.toString()}`;
}

// Header scroll effect
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }

    lastScrollY = window.scrollY;
});

// Smooth scroll for anchor links
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

// Intersection Observer for fade-in animations
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

// Observe all product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Search functionality (for future enhancement)
function initializeSearch() {
    // This function can be used to implement product search
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search products...';
    searchInput.className = 'search-input';

    // Add search input to navbar when needed
}

// Loading spinner for better UX
function showLoadingSpinner() {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(spinner);
}

function hideLoadingSpinner() {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
        spinner.remove();
    }
}

// Add to cart animation (for future enhancement)
function animateAddToCart(button) {
    button.style.transform = 'scale(0.95)';
    button.style.backgroundColor = '#059669';
    button.textContent = 'Opening WhatsApp...';

    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '#25d366';
        button.textContent = 'Order on WhatsApp';
    }, 2000);
}

// Performance optimization - lazy loading images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
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

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .btn {
        position: relative;
        overflow: hidden;
    }

    .loading-spinner {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #10b981;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .search-input {
        padding: 8px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 14px;
        transition: all 0.3s ease;
    }

    .search-input:focus {
        outline: none;
        border-color: #10b981;
        box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
    }
`;
document.head.appendChild(style);

// Error handling for WhatsApp links
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // You could show a user-friendly error message here
});

// Page load optimization
window.addEventListener('load', () => {
    hideLoadingSpinner();

    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
});

// Add CSS for page transitions
const pageTransitionStyle = document.createElement('style');
pageTransitionStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(pageTransitionStyle);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, properties = {}) {
    // This function can be used to integrate with Google Analytics or other tracking services
    console.log('Event tracked:', eventName, properties);
}

// Track WhatsApp button clicks
document.querySelectorAll('.btn-whatsapp').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        trackEvent('whatsapp_order_click', {
            product_name: productName
        });
    });
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log('CloudStore initialized successfully!');

    // Add any initialization code here
    trackEvent('page_load', {
        page: 'home'
    });
});