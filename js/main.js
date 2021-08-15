$(function () {

  const mql = window.matchMedia('(max-width: 800px)');
	const $mediaSlider = $('.review__inner');
	const sliderParam = {
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		dots: true,
		responsive: [
			{
			  breakpoint: 560,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
		]
	}




	if (mql.matches) $mediaSlider.slick(sliderParam);

	function checkScreen(evt) {
		if (evt.matches) {
			$mediaSlider.slick(sliderParam);
		} else {
			$mediaSlider.slick('destroy');
		}
	}


	mql.addListener(checkScreen);


})