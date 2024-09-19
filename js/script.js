document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector(' .mobile-menu-toggle');
  //   console.log(toggleButton);
  const mobileMenu = document.querySelector(' .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});

//Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
