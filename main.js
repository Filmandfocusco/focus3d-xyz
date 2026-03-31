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
      // For more complex animations, we could trigger per-element delays here
      if (entry.target.classList.contains('active')) {
        // Optional: stop observing once revealed
        // observer.unobserve(entry.target);
      }
    }
  });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el, index) => {
    // Add staggered delay to elements if needed
    // const delay = (index % 4) * 0.1;
    // el.style.transitionDelay = `${delay}s`;
    observer.observe(el);
  });

  // Staggering within groups
  const groupsToStagger = ['.hero .reveal', '.services-grid .reveal'];
  groupsToStagger.forEach(selector => {
    const group = document.querySelectorAll(selector);
    group.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });
  });
});

// Image Gallery Logic
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

console.log('Focus3D Studio loaded successfully.');
