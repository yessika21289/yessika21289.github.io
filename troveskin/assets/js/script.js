// Slick slider function
function slickSlider(selector, auto, infinite, center, item, dots, arrow) {
  selector.slick({
    autoplay: auto,
    infinite: infinite,
    centerMode: center,
    slidesToShow: item,
    slidesToScroll: 1,
    speed: 900,
    dots: dots,
    dotsClass: 'troveskin-dots',
    variableWidth: true,
    arrows: arrow,
    prevArrow: '<a href="javascript:;" class="prev-arrow"><span class="icon-slider-prev"></span></a>',
    nextArrow: '<a href="javascript:;" class="next-arrow"><span class="icon-slider-next"></span></a>',
  });
}

// Tabs function
function tabs(trigger, parent) {
  trigger.click(function(e) {
    e.preventDefault();
    var tabs = $(this).closest(parent);
    var target = $(this).data('target');
    if (tabs.find(target).hasClass('expand') == false) {
      tabs.find(target).addClass('expand').siblings().removeClass('expand');
      $(this).closest('li').addClass('active').siblings().removeClass('active');
    }
    tabs.find('> .tabs-header > .active-tabs').attr('data-tabs', target);
  });
}

(function($) {
  // Document ready
  $(document).ready(function() {

    // Unreload
    $(window).on('beforeunload', function() {
      $('html, body').scrollTop(0);
    });

    // Menu
    $('.js-menu-toggle').click(function() {
      var id = $(this).data('toggle');
      if ($(id).hasClass('open')) {
        $('body').removeClass('fixed');
        $(id).removeClass('open');
        $(id).slideUp();
      } else {
        $('body').addClass('fixed');
        $(id).addClass('open');
        $(id).slideDown();
      }
    });

    $('.js-menu-close').click(function() {
      var id = $(this).data('toggle');
      $('body').removeClass('fixed');
      $(id).removeClass('open');
      $(id).slideUp();
    });

    // Slick carousel element
    slickSlider($('.homepage-banner-image'), true, true, true, 1, true, false);

    // Tabs
    tabs($('.step-tabs ul li a'), '.section-step');

    var windowWidth = $(window).width();
    if (windowWidth <= '480') {
      $('.step-list:first-child').addClass('expand');
    } else if (windowWidth <= '768') {
      $('.step-list:first-child').addClass('expand');
    } else if (windowWidth <= '980') {
      $('.step-list:first-child').removeClass('expand');
    } else if (windowWidth <= '1279') {
      $('.step-list:first-child').removeClass('expand');
    } else {
      $('.step-list:first-child').removeClass('expand');
    }
  });

  // Window resize
  $(window).resize(function() {
    var windowWidth = $(window).width();

    // Menu handle
    if (windowWidth > '768') {
      $('#main-menu').css({'display': 'flex'});
    } else {
      $('body').removeClass('fixed');
      $('#main-menu').css({'display': 'none'});
      $('#main-menu').removeClass('open');
      $('#main-menu').closest('.navbar-wrapper').find('span').removeClass('icon-close');
      $('#main-menu').closest('.navbar-wrapper').find('span').addClass('icon-menu');
    }

    var windowWidth = $(window).width();
    if (windowWidth <= '480') {
      $('.step-list:first-child').addClass('expand');
    } else if (windowWidth <= '768') {
      $('.step-list:first-child').addClass('expand');
    } else if (windowWidth <= '980') {
      $('.step-list:first-child').removeClass('expand');
    } else if (windowWidth <= '1279') {
      $('.step-list:first-child').removeClass('expand');
    } else {
      $('.step-list:first-child').removeClass('expand');
    }
  });
})(jQuery);