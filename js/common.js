$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.home-slider').slick({
	slidesToShow: 1,
	swipeToSlide: true,
	arrows: false,
	dots: true,
	fade: true,
});

$('.gallery-slider-portfolio').slick({
	slidesToShow: 3,
	swipeToSlide: true,
	variableWidth: true,
	arrows: true,
	appendArrows: '.gallery-slider-portfolio__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev-arrow"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next-arrow"></use></svg></button>',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
			}
		 }
	 ]
});

$('.gallery-slider-video').slick({
	slidesToShow: 3,
	swipeToSlide: true,
	variableWidth: true,
	arrows: true,
	appendArrows: '.gallery-slider-video__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev-arrow"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next-arrow"></use></svg></button>',
	responsive: [
		{
		  breakpoint: 1870,
		  settings: {
			slidesToShow: 1,
		  }
		},
		{
			breakpoint: 576,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
			}
		 }
	 ]
});

$('.gallery-slider-documents').slick({
	slidesToShow: 4,
	swipeToSlide: true,
	variableWidth: true,
	arrows: true,
	appendArrows: '.gallery-slider-documents__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev-arrow"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next-arrow"></use></svg></button>',
	responsive: [
		{
		  breakpoint: 1870,
		  settings: {
			slidesToShow: 1,
		  }
		},
		{
			breakpoint: 576,
			settings: {
				variableWidth: false,
				slidesToShow: 1,
			}
		 }
	 ]
});


$('[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
	// e.target
	// e.relatedTarget
	$('.slick-slider').slick('setPosition');
});

$('.btn-burger').on('click', function () {
	$('.sidebar-wrapper').fadeToggle();
});

$('.sidebar-wrapper__close').on('click', function () {
	$('.sidebar-wrapper').fadeOut();
});

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});


$('.btn-toggle-reports').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.reports-wrapper').find('.report-col:hidden').slice(0, 3).slideDown();

	var onBlock = $(this).parents('.reports-wrapper').find('.report-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

$('.btn-toggle-documentation').on('click', function (e) {
	e.preventDefault();
	$(this).parents('.documentation-content').find('.documentation-box:hidden').slice(0, 2).slideDown();

	var onBlock = $(this).parents('.documentation-content').find('.documentation-box:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});