const sm = window.matchMedia( "(max-width: 992px)" );
const md = window.matchMedia( "(min-width: 1000px)" );

// Menu Slide

	var menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');

	function desplazar (){
		$('.menu-hide').toggleClass('show');
		$('#menuIconFirst').toggleClass('menuicon_first');
		$('#menuIconSecond').toggleClass('menuicon_second');
		$('#menuIconThird').toggleClass('menuicon_third');
	}
	$('#hamburger').on('click', function(e){
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');
		console.log(menuHideShow)
	})

	window.addEventListener('click', function(e){
		if (menuHideShow = true && e.target.className != 'menu-hide show') {
			$('.menu-hide').removeClass('show');
			$('#hamburger').removeClass('hamburguer-slide');
			$('#menuIconFirst').removeClass('menuicon_first');
			$('#menuIconSecond').removeClass('menuicon_second');
			$('#menuIconThird').removeClass('menuicon_third');
			e.stopPropagation();
		}
		console.log(e.target)
	})

	// Inmobiliaria items resize divs

	$(".inmobiliaria__article").hover(function(){
		$(this).children('.inmobiliaria__article_text').children('.inmobiliaria__article-hidden-text').toggleClass("inmobiliaria_article-hidden-text-show");
		$(this).toggleClass('inmobiliaria__article-resize');
	});

	// INMOBILIARIA PROYECTS RESIZE

	if (sm.matches) {
		$('.proyecto__item').click(function(e) {
			var expanded = $(this);

			$('.proyecto__item').not(this).toggleClass('proyecto__item-retract');
			expanded.toggleClass('proyecto__item-expand');
			expanded.children('.proyecto__item-content--mobile').toggleClass('proyecto__item-content--mobile-show');
			expanded.children('.proyecto__item-title').children('.proyecto__item-title-h3').toggleClass('proyecto__item-title-h3-hide');
			e.stopPropagation();
		})
	}

	if (md.matches) {
		$('.proyecto__item').hover(function(e) {
			var expanded = $(this);

			$('.proyecto__item').not(this).toggleClass('proyecto__item-retract');
			expanded.toggleClass('proyecto__item-expand');
			expanded.children('.proyecto__item-title').children('.proyecto__item-title-h3').toggleClass('proyecto__item-title-h3-hide');
			e.stopPropagation();
		})
	}



	// window.addEventListener('click', function(e) {
	// 	if (expanded.hasClass('proyecto__item-expand') && e.target != expanded) {
	// 		$('.proyecto__item').removeClass('proyecto__item-retract');
	// 		$('.proyecto__item').removeClass('proyecto__item-expand');
	// 		e.stopPropagation();
	// 	}
	// })
