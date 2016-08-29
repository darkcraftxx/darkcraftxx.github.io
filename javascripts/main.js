$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		alert("hello world");
		$('nav').addClass('shrink');
	} else {
		$('nav').removeClass('shrink');
	}
});

$(document).ready(function() {
	console.log("hello world");
});