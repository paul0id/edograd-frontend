$(document).ready(function(){
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    dots: true,
    speed: 300,
    appendArrows: $(".main-slider-arrows"),
    appendDots: $(".main-slider-dots")
  });
  $(".easytabs").easytabs({
    animate: true,
    animationSpeed: 100,
    defaultTab: ".tab-btn:first-child",
    panelActiveClass: "active-panel",
    tabActiveClass: "active",
    tabs: ".tab-btn",
    updateHash: false
  });
});
$('.offers-grid-masonry').masonry({
  itemSelector: '.full-offer-item',
  percentPosition: true,
  // columnWidth: 20,
  gutter: 20
});
