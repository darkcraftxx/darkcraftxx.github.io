$(document).ready(function() {
	console.log("hello world");
});

$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$('nav').addClass('shrink');
	} else {
		$('nav').removeClass('shrink');
	}
});