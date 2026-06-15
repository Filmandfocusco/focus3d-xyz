// Intersection Observer for reveal animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

// Initialize animations and DOM event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Setup reveal elements
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    observer.observe(el);
  });

  // Staggering within groups
  const groupsToStagger = ['.hero .reveal', '.services-grid .reveal', '.portfolio-grid .reveal', '.tools-grid .reveal'];
  groupsToStagger.forEach(selector => {
    const group = document.querySelectorAll(selector);
    group.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });
  });

  // Mobile Hamburger Drawer Logic
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-menu-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const drawerLinks = document.querySelectorAll('.mobile-menu-drawer a');

  function toggleMenu() {
    drawer.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  function closeMenu() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }

  if (hamburgerBtn && drawer && overlay) {
    hamburgerBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    drawerLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Wishlist Heart Toggle Logic
  const wishlistButtons = document.querySelectorAll('.wishlist-btn');
  wishlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('active');
    });
  });
});

// Image Gallery Logic (Codex Drive Case)
window.updateMainImg = function(src, el) {
  const mainImg = document.getElementById('mainCaseImg');
  const thumbs = document.querySelectorAll('.thumb');
  
  if (!mainImg || !el) return;
  
  // Fade out
  mainImg.style.opacity = '0';
  
  setTimeout(() => {
    // Swap source
    mainImg.src = src;
    
    // Update active thumb
    thumbs.forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    
    // Fade in
    mainImg.style.opacity = '1';
  }, 300);
};

console.log('Focus3D Studio loaded successfully with Cinema Hardware styling.');
