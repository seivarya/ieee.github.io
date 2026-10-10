// JavaScript Document


	$(window).on('load', function() {
	
		"use strict";

		/*----------------------------------------------------*/
		/*	Modal Window
		/*----------------------------------------------------*/

		$('.modal').on('show.bs.modal', function (e) {
		    if($(e.currentTarget).attr("data-popup")){
		        $("body").addClass("body-scrollable");
		    }
		});
			
		setTimeout(function () {
		    $(".modal:not(.auto-off)").modal("show");
		},5200);
				
	});


	$(window).on('scroll', function() {
		
		"use strict";
					
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = $(window).scrollTop();
		
		if( b > 110 ){		
			$(".wsmainfull").addClass("scroll");
		} else {
			$(".wsmainfull").removeClass("scroll");
		}				

	});


	$(document).ready(function() {
			
		"use strict";

		$('#loading').hide();

		new WOW().init();

		/*----------------------------------------------------*/
		/*	Mobile Menu Toggle
		/*----------------------------------------------------*/

		if ( $(window).outerWidth() < 992 ) {
			$('.wsmenu-list li.nl-simple, .wsmegamenu li, .sub-menu li.h-link').on('click', function() {				
				 $('body').removeClass("wsactive");	
				 $('.sub-menu').slideUp('slow');
     			 $('.wsmegamenu').slideUp('slow');	
     			 $('.wsmenu-click').removeClass("ws-activearrow");
        		 $('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
			});
		}

		if ( $(window).outerWidth() < 992 ) {
			$('.wsanimated-arrow').on('click', function() {				
				 $('.sub-menu').slideUp('slow');
     			 $('.wsmegamenu').slideUp('slow');	
     			 $('.wsmenu-click').removeClass("ws-activearrow");
        		 $('.wsmenu-click02 > i').removeClass("wsmenu-rotate");
			});
		}

		/*----------------------------------------------------*/
		/*	Tabs
		/*----------------------------------------------------*/

		$('ul.tabs-1 li').on('click', function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs-1 li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		});

		/*----------------------------------------------------*/
		/*	Accordion
		/*----------------------------------------------------*/

		$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
				
		$(".accordion > .accordion-item").on('click', function() {
			$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
			$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
		});

		/*----------------------------------------------------*/
		/*	Loop Carousel
		/*----------------------------------------------------*/

		$('.loop_carousel_left').marquee({
	    	duration: 20000,
	    	startVisible: true,
	    	duplicated: true,
	    	pauseOnHover: false
	  	});

	  	$('.loop_carousel_right').marquee({
	    	duration: 20000,
	    	direction: 'right',
	    	startVisible: true,
	    	duplicated: true,
	    	pauseOnHover: false
	  	});

	  	$('.loop_carousel_txt').marquee({
	    	duration: 35000,
	    	startVisible: true,
	    	duplicated: true,
	    	pauseOnHover: false
	  	});

	  	/*----------------------------------------------------*/
		/*	Statistic Counter
		/*----------------------------------------------------*/
	
		$('.count-element').each(function () {
			$(this).appear(function() {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			},{accX: 0, accY: 0});
		});

		/*----------------------------------------------------*/
		/*	Single Image Lightbox
		/*----------------------------------------------------*/
				
		$('.image-link').magnificPopup({
		  type: 'image'
		});	

		/*----------------------------------------------------*/
		/*	Reviews Grid
		/*----------------------------------------------------*/

		$('.grid-loaded').imagesLoaded(function () {
	        var $grid = $('.masonry-wrap').isotope({
	            itemSelector: '.review-item',
	            percentPosition: true,
	            transitionDuration: '0.7s',
	            masonry: {
	              columnWidth: '.review-item',
	            }
	        });	        
	    });

		/*----------------------------------------------------*/
		/*	Testimonials Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.reviews-carousel');
			owl.owlCarousel({
				items: 3,
				loop:true,
				autoplay:true,
				navBy: 1,
				autoplayTimeout: 4500,
				autoplayHoverPause: true,
				smartSpeed: 1500,
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					768:{
						items:2
					},
					991:{
						items:3
					},
					1000:{
						items:3
					}
				}
		});


		/*----------------------------------------------------*/
		/*	Testimonials Rotator
		/*----------------------------------------------------*/
	
		var owl = $('.reviews-3-carousel');
			owl.owlCarousel({
				items: 1,
				loop:true,
				autoplay:true,
				navBy: 1,
				autoplayTimeout: 5500,
				autoplayHoverPause: true,
				smartSpeed: 1500,
				animateOut: 'fadeOut',
				responsive:{
					0:{
						items:1
					},
					767:{
						items:1
					},
					768:{
						items:1
					},
					991:{
						items:1
					},
					1000:{
						items:1
					}
				}
		});

		/*----------------------------------------------------*/
		/*	Reviews Grid
		/*----------------------------------------------------*/

		$('.grid-loaded').imagesLoaded(function () {
	        var $grid = $('.masonry-wrap').isotope({
	            itemSelector: '.review-item',
	            percentPosition: true,
	            transitionDuration: '0.7s',
	            masonry: {
	              columnWidth: '.review-item',
	            }
	        });	        
	    });

	    /*----------------------------------------------------*/
		/*	Show Password
		/*----------------------------------------------------*/

	    var showPass = 0;
	    $('.btn-show-pass').on('click', function(){
	        if(showPass == 0) {
	            $(this).next('input').attr('type','text');
	            $(this).find('span.eye-pass').removeClass('flaticon-visibility');
	            $(this).find('span.eye-pass').addClass('flaticon-invisible');
	            showPass = 1;
	        }
	        else {
	            $(this).next('input').attr('type','password');
	            $(this).find('span.eye-pass').addClass('flaticon-visibility');
	            $(this).find('span.eye-pass').removeClass('flaticon-invisible');
	            showPass = 0;
	        }  
	    });

	    /*----------------------------------------------------*/
		/*	Newsletter Subscribe Form
		/*----------------------------------------------------*/

		$('.newsletter-form').ajaxChimp({
        language: 'cm',
        url: 'https://gmail.us6.list-manage.com/subscribe/post?u=bfefa83e9e184fad9d67046f3&amp;id=7631d042b3&amp;f_id=0011c2e1f0'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
		});

		$.ajaxChimp.translations.cm = {
			'submit': 'Submitting...',
			0: 'Your request sent successfully',
			1: 'Please enter your email address',
			2: 'An email address must contain a single @',
			3: 'The domain portion of the email address is invalid (the portion after the @: )',
			4: 'The username portion of the email address is invalid (the portion before the @: )',
			5: 'This email address looks fake or invalid. Please enter a real email address'
		};	

	});
