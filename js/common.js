$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.home-slider').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true,
	fade: true,
});

$('.btn-burger').on('click', function () {
	$('.sidebar-wrapper').fadeToggle();
});

$('.sidebar-wrapper__close').on('click', function () {
	$('.sidebar-wrapper').fadeOut();
});