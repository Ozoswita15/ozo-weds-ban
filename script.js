// ==========================
// Countdown Timer
// ==========================
const weddingDate = new Date('2026-02-06T10:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if(distance < 0) return;

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance / (1000*60*60)) % 24);
  const minutes = Math.floor((distance / (1000*60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2,'0');
  document.getElementById('hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2,'0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ==========================
// Hamburger Menu
// ==========================
document.getElementById('hamburger').onclick = function() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
};

// ==========================
// Hero Slideshow
// ==========================
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  showSlide(current);
  setInterval(nextSlide, 4000); // Change image every 4 seconds
});


// ==========================
// RSVP Side / Days Display
// ==========================
const sideSelector = document.getElementById('side-selector');
const dayOptions = document.getElementById('day-options');

const brideDays = ['6th Feb Morning - Haldi', '6th Feb Evening - Wedding', '7th Feb Morning - Bashi Biye (Wedding contd.)', '7th Feb Evening - Bidaai'];
const groomDays = ['6th Feb Morning - Haldi', '6th Feb Evening - Baraat', '7th Feb Morning - Bashi Biye (Wedding contd.)', '8th Feb - Reception'];

sideSelector.addEventListener('change', () => {
  const side = sideSelector.value;
  dayOptions.innerHTML = ''; // clear previous

  if (!side) return;

  const days = side === 'bride' ? brideDays : groomDays;
  const list = document.createElement('ul');

  days.forEach(day => {
    const li = document.createElement('li');
    li.textContent = day;
    list.appendChild(li);
  });

  dayOptions.appendChild(list);
});

// ==========================
// Show QR code on clicking the Shagun image
// ==========================
const shagunImg = document.getElementById('shagun-img');
const qrContainer = document.getElementById('qr-container');

shagunImg.addEventListener('click', () => {
  qrContainer.style.display = qrContainer.style.display === 'none' ? 'block' : 'none';
});

// ==========================
// Fade-in effect for elements
// ==========================
document.addEventListener("DOMContentLoaded", function() {
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.2 });

  fadeEls.forEach(el => observer.observe(el));
});