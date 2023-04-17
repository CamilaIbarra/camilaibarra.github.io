// NAVBAR COLOR CHANGE ON SCROLL
var a = $("nav").offset().top;

$(document).scroll(function () {
  if ($(this).scrollTop() > a) {
    $("nav").css({ background: "white" });
  } else {
    $("nav").css({ background: "transparent" });
  }
});

// TESTIMONIALS SECTION (swiper js)
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction:false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsive Breakpoints
  breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
    },

    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});

// MOBILE NAVBAR
const btn = document.querySelector("button.mobile-menu-btn");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
