// Back to top button functionality
document.getElementById('backToTop').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = 'inline-block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Initialize back to top button as hidden
// document.getElementById('backToTop').style.display = 'none';