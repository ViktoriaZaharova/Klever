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