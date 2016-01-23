$(document).ready(function() {
	
	function is_touch_device() {
  	return !!('ontouchstart' in window) // works on most browsers 
      || !!('onmsgesturechange' in window); // works on ie10
	}; 
	
	$projectsTitle = '<h1 id="title">projects</h1>';
	$contactTitle = '<h1 id="title">contact</h1>';
	$bioTitle = '<h1 id="title">bio</h1>';

	$onPhone = window.matchMedia("(max-width:400px)");
	$defaultTitle = '<h1 id="title">hey, i\'m ben.</h1>';

	if (!(is_touch_device())) {
		//If you're not already clicking on one of the buttons, show each of the button's title text when you mouse over them
		$('#email, #email2').mouseover(function() {
			$('#title').text('contact');
			$('#email').find('.icon').addClass('transition');
		});

		$('#projects, #projects2, #projects3, #projects4').mouseover(function() {
			$('#title').text('projects');
			$('#projects').find('.icon').addClass('transition');
		});

		$('#bio, #bio2, #bio3').mouseover(function() {
			$('#title').text('bio');
			$('#bio').find('.icon').addClass('transition');
		});

		$('#email, #projects, #bio, #projects2, #projects3, #projects4, #email2, #bio2, #bio3').mouseout(function() {
			$('#title').replaceWith($defaultTitle);
			$('#email, #projects, #bio').find('.icon').removeClass('transition');
		})

		$('.photography').mouseover(function() {
			$('.photography').find('.projectbar').addClass('up');
			$('.photography').find('.lefttext').css('color', 'rgba(119, 124, 132, 1)');
			$('.photography').find('.righttext').css('color', 'rgba(155, 155, 155, 1)');
			$('.photography').css('border-top-right-radius', '0px');
			$('.photography').css('border-top-left-radius', '0px');
			$('.photography').find('.bottomlefttext').css('color', 'black');

		});

		$('.photography').mouseout(function() {
			$('.photography').find('.projectbar').removeClass('up');
			$('.photography').find('.lefttext').css('color', 'white');
			$('.photography').find('.righttext').css('color', 'rgba(255, 255, 255, .5)');
			$('.photography').css('border-top-right-radius', '8px');
			$('.photography').css('border-top-left-radius', '8px');
			$('.photography').find('.bottomlefttext').css('color', 'white');

		});

		$('.sunrise').mouseover(function() {
			$('.sunrise').find('.projectbar').addClass('up');
			$('.sunrise').find('.lefttext').css('color', 'rgba(255, 82, 2, 1)');
			$('.sunrise').find('.righttext').css('color', 'rgba(155, 155, 155, 1)');
			$('.sunrise').find('.bottomlefttext').css('color', 'black');
		});

		$('.sunrise').mouseout(function() {
			$('.sunrise').find('.projectbar').removeClass('up');
			$('.sunrise').find('.lefttext').css('color', 'white');
			$('.sunrise').find('.righttext').css('color', 'rgba(255, 255, 255, .5)');
			$('.sunrise').find('.bottomlefttext').css('color', 'white');
		});

		$('.soundcloud').mouseover(function() {
			$('.soundcloud').find('.projectbar').addClass('up');
			$('.soundcloud').find('.lefttext').css('color', 'rgba(255, 82, 2, 1)');
			$('.soundcloud').find('.righttext').css('color', 'rgba(155, 155, 155, 1)');
			$('.soundcloud').find('.bottomlefttext').css('color', 'black');
		});

		$('.soundcloud').mouseout(function() {
			$('.soundcloud').find('.projectbar').removeClass('up');
			$('.soundcloud').find('.lefttext').css('color', 'white');
			$('.soundcloud').find('.righttext').css('color', 'rgba(255, 255, 255, .5)');
			$('.soundcloud').find('.bottomlefttext').css('color', 'white');
		});

		$('.brevity').mouseover(function() {
			$('.brevity').find('.projectbar').addClass('up');
			$('.brevity').find('.lefttext').css('color', 'rgba(120, 4, 221, 1)');
			$('.brevity').find('.righttext').css('color', 'rgba(155, 155, 155, 1)');
			$('.brevity').find('.bottomlefttext').css('color', 'black');
		});

		$('.brevity').mouseout(function() {
			$('.brevity').find('.projectbar').removeClass('up');
			$('.brevity').find('.lefttext').css('color', 'white');
			$('.brevity').find('.righttext').css('color', 'rgba(255, 255, 255, .5)');
			$('.brevity').find('.bottomlefttext').css('color', 'white');

		});

			$('.sonar').mouseover(function() {
			$('.sonar').find('.projectbar').addClass('up');
			$('.sonar').find('.lefttext').css('color', 'rgba(126, 213, 247, 1)');
			$('.sonar').find('.righttext').css('color', 'rgba(155, 155, 155, 1)');
			$('.sonar').find('.bottomlefttext').css('color', 'black');
		});

		$('.sonar').mouseout(function() {
			$('.sonar').find('.projectbar').removeClass('up');
			$('.sonar').find('.lefttext').css('color', 'white');
			$('.sonar').find('.righttext').css('color', 'rgba(255, 255, 255, .5)');
			$('.sonar').find('.bottomlefttext').css('color', 'white');

		});


		$('.askey').mouseover(function() {
			$('.askey').find('.projectbar').addClass('up');
			$('.askey').find('.lefttext').css('color', 'rgba(55, 147, 255, 1)');
			$('.askey').find('.righttext').css('color', 'rgba(155, 155, 155, 1)');
			$('.askey').find('.bottomlefttext').css('color', 'black');
		});

		$('.askey').mouseout(function() {
			$('.askey').find('.projectbar').removeClass('up');
			$('.askey').find('.lefttext').css('color', 'white');
			$('.askey').find('.righttext').css('color', 'rgba(255, 255, 255, .5)');
			$('.askey').find('.bottomlefttext').css('color', 'white');

		});


		$('.quickyo').mouseover(function() {
			$('.quickyo').find('.projectbar').addClass('up');
			$('.quickyo').find('.lefttext').css('color', 'rgba(178, 87, 192, 1)');
			$('.quickyo').find('.righttext').css('color', 'rgba(155, 155, 155, 1)');
			$('.quickyo').find('.bottomlefttext').css('color', 'black');
		});

		$('.quickyo').mouseout(function() {
			$('.quickyo').find('.projectbar').removeClass('up');
			$('.quickyo').find('.lefttext').css('color', 'white');
			$('.quickyo').find('.righttext').css('color', 'rgba(255, 255, 255, .5)');
			$('.quickyo').find('.bottomlefttext').css('color', 'white');

		});

		$('.composure').mouseover(function() {
			$('.composure').find('.projectbar').addClass('up');
			$('.composure').find('.lefttext').css('color', 'rgba(64, 191, 229, 1)');
			$('.composure').find('.righttext').css('color', 'rgba(155, 155, 155, 1)');
			$('.composure').css('border-bottom-right-radius', '0px');
			$('.composure').css('border-bottom-left-radius', '0px');
			$('.composure').find('.bottomlefttext').css('color', 'black');
		});

		$('.composure').mouseout(function() {
			$('.composure').find('.projectbar').removeClass('up');
			$('.composure').find('.lefttext').css('color', 'white');
			$('.composure').find('.righttext').css('color', 'rgba(255, 255, 255, .5)');
			$('.composure').css('border-bottom-right-radius', '8px');
			$('.composure').css('border-bottom-left-radius', '8px');
			$('.composure').find('.bottomlefttext').css('color', 'white');

		});

		$('.writing').mouseover(function() {
			$('.writing').find('.projectbar').addClass('up');
			$('.writing').find('.lefttext').css('color', 'rgba(40, 234, 11, 1)');
			$('.writing').find('.righttext').css('color', 'rgba(155, 155, 155, 1)');
			$('.writing').find('.bottomlefttext').css('color', 'black');
			
		});

		$('.writing').mouseout(function() {
			$('.writing').find('.projectbar').removeClass('up');
			$('.writing').find('.lefttext').css('color', 'white');
			$('.writing').find('.righttext').css('color', 'rgba(255, 255, 255, .5)');
			$('.writing').find('.bottomlefttext').css('color', 'white');
			

		});

		$('#picture').on('mousedown', function() {
			$(this).removeClass('displayed');
			$(this).addClass('hidden');
			$('#picture_blinking').removeClass('hidden');
			$('#picture_blinking').addClass('displayed');
		});

		$('#picture_blinking').on('mouseup', function() {
			$(this).removeClass('displayed');
			$(this).addClass('hidden');
			$('#picture').removeClass('hidden');
			$('#picture').addClass('displayed');
		});

		//If you've selected the projects button, show "projects" as the title and show the back button
		$('#projects, #projects2, #projects3, #projects4').on('click', function() {
			$defaultTitle = $projectsTitle;
			$('#title').replaceWith($projectsTitle);
			$('#bottom div').addClass('hidden');
			$('div.projectstext').removeClass('hidden');
			$('div.projectstext').find('*').removeClass('hidden');
		});

		$('#email, #email2').on('click', function() {
			$defaultTitle = $contactTitle;
			$('#title').replaceWith($contactTitle);
			$('#bottom div').addClass('hidden');
			$('div.contact').removeClass('hidden');
			$('div.contact').find('*').removeClass('hidden');
		});

		//If you've selected the bio button, show "bio" as the title and show the back button
		$('#bio').on('click', function() {
			$defaultTitle = $bioTitle;
			$('#title').replaceWith($bioTitle);
			$('#bottom div').addClass('hidden');
			$('div.biotext').removeClass('hidden');
			$('div.biotext').find('*').removeClass('hidden');
		});

	} else {
		$(function() {
   			$('.redtext br').replaceWith(' ');
		});
		$(function() {
   			$('.bottomlefttext br').replaceWith(' ');
		});
		$('.projectcell').find('.projpic').css('display', 'none');
		$('.projectcell').find('.lefttext').css('color', 'white');
		$('.projectcell').find('.lefttext').css('background-color', 'rgba(255, 255, 255, .3)')
		$('.projectcell').find('.lefttext').css('line-height', '150%')
		$('.projectcell').find('.righttext').css('line-height', '150%')
		$('.projectcell').find('.righttext').css('color', 'rgba(155, 155, 155, 1)')
		$('.projectcell').find('.projectbar').addClass('upphone');
		$('.projectcell').find('.bottomlefttext').css('color', 'white')
		$('.projectcell').find('.bottomlefttext').css('width', '296px')
		$('.projectcell').find('.bottomlefttext').css('top', '65px')
		$('.projectcell').find('.bottomlefttext').css('font-size', '170%')
		$('.projectcell').find('.righttext').css('color', 'rgba(255, 255, 255, .55)');
		$('.photography').css('border-top-right-radius', '0px');
		$('.photography').css('border-top-left-radius', '0px');
		$('.composure').css('border-bottom-right-radius', '0px');
		$('.composure').css('border-bottom-left-radius', '0px');
		$('.projectcell').css('margin-bottom', '0px');
		//$('body').css('overflow-y', 'scroll');
		$('.projectcontainer').css('width', '100%');
		$('.projectstext').css('width', '100%');
		$('.projectbar').css('width', '100%');


		$('#picture').on('touchstart', function() {
			$(this).removeClass('displayed');
			$(this).addClass('hidden');
			$('#picture_blinking').removeClass('hidden');
			$('#picture_blinking').addClass('displayed');
		});

		$('#picture_blinking').on('mouseup', function() {
			$(this).removeClass('displayed');
			$(this).addClass('hidden');
			$('#picture').removeClass('hidden');
			$('#picture').addClass('displayed');
		});

		/*$('#picture').on('touchstart', function() {
			$(this).removeClass('displayed');
			$(this).addClass('hidden');
			$('#picture_blinking').removeClass('hidden');
			$('#picture_blinking').addClass('displayed');

			setTimeout(function() {
				$('#picture').addClass('displayed');
				$('#picture').removeClass('hidden');
				$('#picture_blinking').addClass('hidden');
				$('#picture_blinking').RemoveClass('displayed');
			}, 220);
		});*/

		$('#projects').on('touchstart', function() {
			$('#title').replaceWith($projectsTitle);
			$defaultTitle = $projectsTitle;
			$('#title').replaceWith($projectsTitle);
			$('#bottom div').addClass('hidden');
			$('div.projectstext').removeClass('hidden');
			$('div.projectstext').find('*').removeClass('hidden');
		});

		$('#email').on('touchstart', function() {
			$('#title').replaceWith($contactTitle);
			$defaultTitle = $contactTitle;
			$('#title').replaceWith($contactTitle);
			$('#bottom div').addClass('hidden');
			$('div.contact').removeClass('hidden');
			$('div.contact').find('*').removeClass('hidden');
		});

		$('#bio').on('touchstart', function() {
			$('#title').replaceWith($bioTitle);
			$('#title').replaceWith($bioTitle);
			$('#bottom div').addClass('hidden');
			$('div.biotext').removeClass('hidden');
			$('div.biotext').find('*').removeClass('hidden');
		});
	}
});