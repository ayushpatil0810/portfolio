var i = 0;
var txt = "Hi, I'm Ayush Patil"
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Hamburger menu functionality
function initHamburgerMenu() {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');
  
  if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', function() {
      // Toggle hamburger animation
      hamburgerMenu.classList.toggle('active');
      
      // Toggle menu visibility
      navMenu.classList.toggle('show');
    });
    
    // Close menu when clicking on a nav link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('show');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!hamburgerMenu.contains(event.target) && !navMenu.contains(event.target)) {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('show');
      }
    });
    
    // Handle window resize - close menu if switching to desktop view
    window.addEventListener('resize', function() {
      const screenWidth = window.innerWidth;
      // If screen becomes larger than 1024px, hide mobile menu and reset hamburger
      if (screenWidth > 1024) {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('show');
      }
    });
    
    // Handle orientation change on mobile devices
    window.addEventListener('orientationchange', function() {
      setTimeout(function() {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1024) {
          hamburgerMenu.classList.remove('active');
          navMenu.classList.remove('show');
        }
      }, 100);
    });
  }
}

window.onload = function() {
  document.getElementById("hero-title").innerHTML = "";
  typeWriter();
  initHamburgerMenu();
};