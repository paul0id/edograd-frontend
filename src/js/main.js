$(document).ready(function(){
  $('.offers-grid-masonry').masonry({
    itemSelector: '.full-offer-item',
    percentPosition: true,
    // columnWidth: 20,
    gutter: 20
  });
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
  $('.partner-slider').slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    arrows: true,
    dots: false,
    speed: 300,
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
  $(".partner-tabs").easytabs({
    animate: true,
    animationSpeed: 100,
    defaultTab: ".partner-header-nav-bar-item:first-child",
    panelActiveClass: "active-panel",
    tabActiveClass: "active",
    tabs: ".partner-header-nav-bar-item",
    updateHash: true
  });

  // City-selector
  $('.city-selector .current-city-item').click(function(){
    $('.city-selector-panel').slideDown(100);
  });
  $('.city-selector .close-btn').click(function(){
    $('.city-selector-panel').slideUp(100);
  });

  // Rating set
  $('.rating-stars-select').rating(function(vote, event){
      $('.feedback-item-rating').val(vote);
  });

  // Checkboxes
  var styled_checkbox_val = $('.styled_checkbox').attr('data-check');
  $("." + styled_checkbox_val).hide();

  $('.styled_checkbox').click(function(){
    $(this).toggleClass('active');
    var checkBoxes = $(".pickup_checkbox");
    checkBoxes.prop("checked", !checkBoxes.prop("checked"));
    $('.delivery-label').toggleClass('disabled');
    $('.delivery-field').toggleClass('disabled');
  });



});

// Modal windows
$(function() {
  $('#outoftime_modal').easyModal({
		top: 200,
		overlay: 0.2,
		transitionIn: 'animated bounceInLeft',
		transitionOut: 'animated bounceOutRight',
		closeButtonClass: '.animated-close'
	});
  $('.easy-modal-open').click(function(e) {
		var target = $(this).attr('href');
		$(target).trigger('openModal');
		e.preventDefault();
	});
	$('.easy-modal-close').click(function(e) {
		$('.easy-modal').trigger('closeModal');
	});
});
