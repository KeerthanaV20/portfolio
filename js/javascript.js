

// List all unique class names
document.getElementById('menuToggle').addEventListener('click', function() {
const navLinks = document.getElementById('navLinks');
navLinks.classList.toggle('active');

// Change icon based on menu state
const icon = this.querySelector('i');
if (navLinks.classList.contains('active')) {
  icon.classList.remove('fa-bars');
  icon.classList.add('fa-times');
} else {
  icon.classList.remove('fa-times');
  icon.classList.add('fa-bars');
}
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
  const navLinks = document.getElementById('navLinks');
  const icon = document.querySelector('.menu-toggle i');
  navLinks.classList.remove('active');
  icon.classList.remove('fa-times');
  icon.classList.add('fa-bars');
});
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');

if (!navLinks.contains(event.target) && !menuToggle.contains(event.target) && navLinks.classList.contains('active')) {
  navLinks.classList.remove('active');
  const icon = menuToggle.querySelector('i');
  icon.classList.remove('fa-times');
  icon.classList.add('fa-bars');
}
});