/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */


(function ($) { 
	'use strict';
	/* ----------------------------------------------------------- */
	/*  Site search
	/* ----------------------------------------------------------- */

 // overlay search


/* ----------------------------------------------------------- */
  /*  Slick Carousel
  /* ----------------------------------------------------------- */

  $('.slider-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplaySpeed: 4000,
    items:3,
    loop:true,
    autoplay:true,
    dots:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow:3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      
      ]
  });
 
 // post gallery

        $('.post_gallery').owlCarousel({
            loop:true,
            margin:1,
            nav:true,
            dots: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
	


	$('.post-slide').slick({
		fade: true,
    autplay:true
	});		

	// magnific Popup iframe

      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 300,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
      });

	// -----------------------------


	/* ----------------------------------------------------------- */
	/*  Scroll To Top
	/* ----------------------------------------------------------- */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});


})(jQuery);

