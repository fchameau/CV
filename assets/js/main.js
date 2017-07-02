$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.when( $.ready ).then(function() {

	// START timeline
	var $timeline_block = $('.cd-timeline-block');
	$('[id$=More]').slideToggle();
	var doc = $(document), 
	  fixedSpe = false,
	  fixedExpe = false,
	  fixedEdu = false,
	  fixedPerso = false,
	  anchorSpe = $('#anchorSpecialtiesHeader'),
	  contentSpe = $('#specialtiesHeader'),
	  anchorExpe = $('#anchorExperienceHeader'),
	  contentExpe = $('#experienceHeader'),
	  anchorEdu = $('#anchorEducationHeader'),
	  contentEdu = $('#educationHeader'),
	  anchorPerso = $('#anchorPersoHeader'),
	  contentPerso = $('#persoHeader');

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		var y = $(window).scrollTop();
		if (y > 700) {
			$('#toTop').removeClass('hide').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
		
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).hasClass('is-hidden') ) {
				$(this).removeClass('is-hidden').addClass('animated').addClass('fadeIn');
			}
		});
		
		//Sticky headers

		var docTop = doc.scrollTop(),
			anchorSpeTop = anchorSpe.offset().top,
			anchorExpeTop = anchorExpe.offset().top,
			anchorEduTop = anchorEdu.offset().top,
			anchorPersoTop = anchorPerso.offset().top;
			
		console.log('scroll', docTop, anchorSpeTop, fixedSpe, contentSpe.outerHeight());
		
		if(docTop > anchorSpeTop  && docTop<anchorExpeTop){
		  if(!fixedSpe){
			anchorSpe.height(contentSpe.outerHeight());
			contentSpe.addClass('fixed');        
			fixedSpe = true;
		  }
		}  else   {
		  if(fixedSpe){
			anchorSpe.height(0);
			contentSpe.removeClass('fixed'); 
			fixedSpe = false;
		  }
		}
		
		if(docTop > anchorExpeTop && docTop<anchorEduTop){
		  if(!fixedExpe){
			anchorExpe.height(contentExpe.outerHeight());
			contentExpe.addClass('fixed');        
			fixedExpe = true;
		  }
		}  else   {
		  if(fixedExpe){
			anchorExpe.height(0);
			contentExpe.removeClass('fixed'); 
			fixedExpe = false;
		  }
		}
		
		if(docTop > anchorEduTop && docTop<anchorPersoTop){
		  if(!fixedEdu){
			anchorEdu.height(contentEdu.outerHeight());
			contentEdu.addClass('fixed');        
			fixedEdu = true;
		  }
		}  else   {
		  if(fixedEdu){
			anchorEdu.height(0);
			contentEdu.removeClass('fixed'); 
			fixedEdu = false;
		  }
		}
		
		if(docTop > anchorPersoTop){
		  if(!fixedPerso){
			anchorPerso.height(contentPerso.outerHeight());
			contentPerso.addClass('fixed');        
			fixedPerso = true;
		  }
		}  else   {
		  if(fixedPerso){
			anchorPerso.height(0);
			contentPerso.removeClass('fixed'); 
			fixedPerso = false;
		  }
		}
		
	});
   // END timeline
    
	
	//scrollTo for <a href=#anchor /> links
	$('a[href^="#"]').on('click', function(event) {

		var target = $(this.getAttribute('href'));

		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});
	


});


