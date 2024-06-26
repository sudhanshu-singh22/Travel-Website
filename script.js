
document.addEventListener('DOMContentLoaded', function () {
  // Selectors
  let searchBtn = document.querySelector('#search-btn');
  let searchBar = document.querySelector('.search-bar-container');
  let formBtn = document.querySelector('#login-btn');
  let loginForm = document.querySelector('.login-form-container');
  let formClose = document.querySelector('#form-close');
  let menuBar = document.getElementById('menu-bar');
  let navbar = document.querySelector('.navbar');
  let videoBtn = document.querySelectorAll('.vid-btn');

  // Event Listeners
  menuBar.addEventListener('click', function () {
      menuBar.classList.toggle('fa-times');
      navbar.classList.toggle('active');
      searchBar.classList.remove('active');
      searchBtn.classList.remove('fa-times');
  });

  searchBtn.addEventListener('click', function () {
      searchBtn.classList.toggle('fa-times');
      searchBar.classList.toggle('active');
      navbar.classList.remove('active');
      menuBar.classList.remove('fa-times');
  });

  formBtn.addEventListener('click', function () {
      loginForm.classList.add('active');
  });

  formClose.addEventListener('click', function () {
      loginForm.classList.remove('active');
  });

  videoBtn.forEach(btn => {
      btn.addEventListener('click', function () {
          document.querySelector('.controls .active').classList.remove('active');
          btn.classList.add('active');
          let src = btn.getAttribute('data-src');
          document.querySelector('#video-slider').src = src;
      });
  });

  // Swiper instances
  new Swiper(".review-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  });

  new Swiper(".brand-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  });
});
