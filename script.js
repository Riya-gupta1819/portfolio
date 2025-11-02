// ======= Toggle Navbar Menu =======
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// ======= Scroll Section Active Link =======
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add('active');
      });
    }
  });

  // ======= Sticky Navbar =======
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // ======= Remove toggle when click scroll =======
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ======= Scroll Reveal Animation =======
ScrollReveal({
  // reset: true, // uncomment if you want animations on every scroll
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .skills-container, .portfolio-box, .contact form',
  { origin: 'bottom' }
);
ScrollReveal().reveal('.home-content, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ======= Typing Text Animation =======
const typed = new Typed('.multiple-text', {
  strings: [
    'Full Stack Developer',
    'Java Programmer',
    'Creative Coder',
    'Frontend Enthusiast'
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// ======= About Section Scroll Animation =======
window.addEventListener('scroll', () => {
  const about = document.querySelector('.about-container');
  if (about) {
    const position = about.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      about.classList.add('show');
    }
  }
});
