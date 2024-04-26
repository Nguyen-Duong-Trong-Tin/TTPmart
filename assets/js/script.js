// Slick
$(document).ready(function () {
  // Slide
  $('.inner-slide').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // Bắt sự kiện khi slide được chuyển
  $('.inner-slide').on('afterChange', function (event, slick, currentSlide) {
    // Gọi WOW.init() trên slide hiện tại
    new WOW({}).init();
  });
  // End Slide

  // Brand
  $('.inner-brand').slick({
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000
  });
  // End Brand
});
// End Slick


// Login Page
const inputEmailSignUp = document.querySelector(".login #inputEmail");
const inputPasswordSignUp = document.querySelector(".login #inputPassword");
console.log(inputEmailSignUp);
console.log(inputPasswordSignUp);
// End Login Page