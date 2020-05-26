$(function() {
	
	// Scroll functionallity
	
	// Scroll page to specific section
	$('#about-button, #services-button, #contact-button').on('click', function() {
		
		var element = "#" + $(this).attr('href');
		var position = $(element).offset().top;
		
		$('html, body').animate(
			{
				scrollTop: position - 150
			}, 
			2000, 
			'swing'
		);
		return false;
	});
	
	// Scrolls page back to the top
	/*$('a[href="#"]').on('click', function() {
		$('html, body').animate(
			{
				scrollTop: 0
			}, 
			2000, 
			'swing'
		);
		return false;
	});*/
});



