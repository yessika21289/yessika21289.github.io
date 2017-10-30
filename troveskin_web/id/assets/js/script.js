// Slick slider function
function slickSlider(selector, auto, infinite, center, item, dots, dotClass, arrow, width) {
  selector.slick({
    autoplay: auto,
    infinite: infinite,
    centerMode: center,
    slidesToShow: item,
    slidesToScroll: 1,
    speed: 900,
    dots: dots,
    dotsClass: dotClass,
    variableWidth: width,
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
  $(document).on('ready', function() {
    var windowWidth = $(window).width();
    if (windowWidth <= '480') {
      $('.step-list:first-child').addClass('expand');
      slickSlider($('.step-list-wrapper'), false, false, false, 1, true, 'step-dots', false, false);
    } else if (windowWidth <= '768') {
      $('.step-list:first-child').addClass('expand');
      slickSlider($('.step-list-wrapper'), false, false, false, 1, true, 'step-dots', false, false);
    } else if (windowWidth <= '980') {
      $('.step-list:first-child').removeClass('expand');
      slickSlider($('.step-list-wrapper'), false, false, false, 1, true, 'step-dots', false, false);
    } else if (windowWidth <= '1279') {
      $('.step-list:first-child').removeClass('expand');
    } else {
      $('.step-list:first-child').removeClass('expand');
    }

    // Unreload
    $(window).on('beforeunload', function() {
      $('html, body').scrollTop(0);
    });

    // Menu
    $('.js-menu-toggle').on('click', function() {
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

    $('.js-menu-close').on('click', function() {
      var id = $(this).data('toggle');
      $('body').removeClass('fixed');
      $(id).removeClass('open');
      $(id).slideUp();
    });

    // Language menu
    $('.language-menu').on('click', function() {
      if ($(this).hasClass('expand')) {
        $(this).removeClass('expand');
        $('.language-option').slideUp();
      } else {
        $(this).addClass('expand');
        $('.language-option').slideDown();
      }
    });
    // $('html, body').on('click', function(e) {
    //   var t = e.target;
    //   if ($('.language-menu') !== t && !$('.language-menu').find(t).length) {
    //     $('.language-menu').removeClass('expand');
    //     $('.language-option').slideUp();
    //   }
    // });

    // Slick carousel element
    slickSlider($('.homepage-banner-image'), false, true, true, 1, true, 'troveskin-dots', false, true);
  });

  // Window resize
  $(window).on('resize', function() {
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
  });
})(jQuery);