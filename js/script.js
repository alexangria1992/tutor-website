document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector(' .mobile-menu-toggle');
  //   console.log(toggleButton);
  const mobileMenu = document.querySelector(' .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});
