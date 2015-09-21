head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//	 var scroll_left = $(this).scrollLeft();
	//	 $(".fixed-element").css({
	//		 left: -scroll_left
	//	 });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//	 scrollFixedElements()
	// });

	$('.js-dropdown-parent').each(function() {
		var ddLink = $(this).find('.js-dropdown-link'),
			ddParent = $(this),
			ddHide = $(this).find('.js-dropdown-hide'),
			dd = $(this).find('.js-dropdown');

			ddLink.click(function() {
				ddHide.slideUp(400);
				dd.slideDown(400);
				return false;
			});
	});

	//counter

	var a = new Date(); // Now
	var b = new Date(2015, 8, 30, 0, 0, 0, 0); // end date
	var seconds = Math.round((b-a)/1000); // seconds

	clock = $('.js-clock').FlipClock({
		clockFace: 'DailyCounter',
		autoStart: false,
		language: 'ru'
	});
			
	clock.setTime(seconds);
	clock.setCountdown(true);
	clock.start();
});