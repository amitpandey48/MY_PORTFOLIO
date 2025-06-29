// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const cancelBtn = document.querySelector('.cancel-btn'); // Make sure this exists in your HTML

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
    menuBtn.style.display = 'none';
    if (cancelBtn) cancelBtn.style.display = 'block';
  });
}

if (cancelBtn && menu) {
  cancelBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
  });
}

// Close menu on scroll
window.addEventListener('scroll', () => {
  if (menu) menu.classList.remove('active');
  if (menuBtn) menuBtn.style.display = 'block';
  if (cancelBtn) cancelBtn.style.display = 'none';
});

// Button to phone user
function phoneuser() {
  document.getElementById("phone_menu").innerHTML = "hello";
}
