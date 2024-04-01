// Slick
// Slide
$(document).ready(function () {
  $('.inner-slide').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // Bắt sự kiện khi slide được chuyển
  $('.inner-slide').on('afterChange', function(event, slick, currentSlide){
    // Gọi WOW.init() trên slide hiện tại
    new WOW({}).init();
  });
});
// End Slide

// Brand
$('#brand').slick();
// End Brand

// End Slick