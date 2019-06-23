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

		$(document).ready(function() {
		/*bind all clicks on an 'h1' element to trigger this function*/
			$('.proyecto__item').click(function() {
				$(this).toggleClass('proyecto__item-expand');
				$(this).children('.proyecto__item-content--mobile').toggleClass('proyecto__item-content--mobile-show');
				$(this).children('.proyecto__item-title--mobile').children('.proyecto__item-title-h3').toggleClass('proyecto__item-title-h3-hide');

				/*if the element following this one has the class 'parent' and the class 'showMe'*/
				if($(this).siblings('.proyecto__item').hasClass('proyecto__item-expand')) {
					/*remove the class 'showMe' from all elements with the class 'parent' or 'child'*/
					$('.proyecto__item').not(this).removeClass('proyecto__item-expand');
					$('.proyecto__item').not(this).children('.proyecto__item-content--mobile').removeClass('proyecto__item-content--mobile-show');
					$('.proyecto__item').not(this).children('.proyecto__item-title--mobile').children('.proyecto__item-title-h3').removeClass('proyecto__item-title-h3-hide');

					$(this).addClass('proyecto__item-expand');
					$(this).children('.proyecto__item-content--mobile').addClass('proyecto__item-content--mobile-show');
					$(this).children('.proyecto__item-title--mobile').children('.proyecto__item-title-h3').addClass('proyecto__item-title-h3-hide');
				}
			});

		});

		// var elements = document.getElementsByClassName("proyecto__item");
		// 	for(var i = 0; i < elements.length; i++)
		// 	{
		// 			elements[i].onclick = function(){
		//
		// 					// remove class from sibling
		//
		// 					var el = elements[0];
		// 					while(el)
		// 					{
		// 							if(el.tagName === "ARTICLE"){
		// 									//remove class
		// 									el.classList.toggle("proyecto__item-retract");
		//
		// 							}
		// 							// pass to the new sibling
		// 							el = el.nextSibling;
		// 					}
		//
		// 				this.classList.toggle("proyecto__item-expand");
		// 			};
		// 	}

		// $('.proyecto__item').click(function(e) {
		// 	var expanded = $(this);
		//
		// 	$('.proyecto__item').not(this).toggleClass('proyecto__item-retract');
		// 	expanded.toggleClass('proyecto__item-expand');
		// 	e.stopPropagation();
		// 	expanded.children('.proyecto__item-content--mobile').toggleClass('proyecto__item-content--mobile-show');
		// 	expanded.children('.proyecto__item-title--mobile').children('.proyecto__item-title-h3').toggleClass('proyecto__item-title-h3-hide');
		//
		// })

		// window.addEventListener('click', function(e) {
		// 	var target = e.target
		// 	if (target = $('.proyecto__item')) {
		// 		target.addClass('proyecto__item-expand');
		// 		target.siblings('.proyecto__item').addClass('proyecto__item-retract');
		// 	}
		// })
	}

	if (md.matches) {
		$('.proyecto__item').hover(function(e) {
			var expanded = $(this);

			$('.proyecto__item').not(this).toggleClass('proyecto__item-retract');
			expanded.toggleClass('proyecto__item-expand');
			expanded.children('.proyecto__item-title--mobile').children('.proyecto__item-title-h3').toggleClass('proyecto__item-title-h3-hide');
			e.stopPropagation();
		})
	}

	// MODAL BOX

	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal
	btn.onclick = function() {
	  modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

	var initFlexSliders = function() {
		$('.flexslider').flexslider({
				animation: "slide",
				slideshow: false,
				controlNav: false,
				directionNav: true,
				start: function(slider){
						$('.flexslider').resize();
				}
		});
	};

	//call this function to show the slider
	initFlexSliders();
