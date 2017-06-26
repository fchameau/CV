$.when( $.ready ).then(function() {

	console.debug('test');
	// START timeline
	var $timeline_block = $('.cd-timeline-block');

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).hasClass('is-hidden') ) {
				$(this).removeClass('is-hidden').addClass('animated').addClass('fadeIn');
			}
		});
	});
   // END timeline
    

});