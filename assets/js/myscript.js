const sm = window.matchMedia( "(max-width: 992px)" );
const md = window.matchMedia( "(min-width: 1000px)" );

// Menu Slide

	var menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');

	function desplazar (){
		$('.menu-hide').toggleClass('show');
		$('#menuIconFirst').toggleClass('menuicon_first');
		$('#menuIconSecond').toggleClass('menuicon_second');
		$('#menuIconThird').toggleClass('menuicon_third');
		$('.menuicon').toggleClass('menuicon--black');
		$('.hamburger_div').toggleClass('hamburger_div--black');
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
			$('.menuicon').removeClass('menuicon--black');
			$('.hamburger_div').removeClass('hamburger_div--black');
			e.stopPropagation();
		}
		console.log(e.target)
	})

	// MENU COLOR CHANGE

	var header = $('#header').offset();
	var inmobiliaria = $('#inmobiliaria').offset();
	var proyectos = $('#proyectos').offset();
	var equipo = $('#equipo').offset();
	var inversionistas = $('#inversionistas').offset();
	var postVenta = $('#postVenta').offset();

	window.addEventListener('scroll', function(){
		if ($(window).scrollTop() >= inmobiliaria.top - 100) {
			$('.menuicon').addClass('menuicon--black');
			$('.hamburger_div').addClass('hamburger_div--black');
		} else {
			$('.menuicon').removeClass('menuicon--black');
			$('.hamburger_div').removeClass('hamburger_div--black');
		}

		if ($(window).scrollTop() >= proyectos.top) {
			$('.menuicon').removeClass('menuicon--black');
			$('.hamburger_div').removeClass('hamburger_div--black');
		}

		if ($(window).scrollTop() >= equipo.top -100) {
			$('.menuicon').addClass('menuicon--black');
			$('.hamburger_div').addClass('hamburger_div--black');
		}

		if ($(window).scrollTop() >= inversionistas.top - 50) {
			$('.menuicon').removeClass('menuicon--black');
			$('.hamburger_div').removeClass('hamburger_div--black');
		}
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

	var btn = document.getElementsByClassName("myBtn");

		for (var i = 0; i < btn.length; i++) {
		  var thisBtn = btn[i];
		  thisBtn.addEventListener("click", function(){
		    var modal = document.getElementById(this.dataset.modal);
		    modal.classList.add("modal-show");
		}, false);
	}

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close");

	// // When the user clicks on <span> (x), close the modal
	$(span).on('click', function() {
		$('.modal').removeClass('modal-show');
	})


// FUTURO EXPAND ITEMS

if (md.matches) {

	$(document).ready(function () {
	$(".futuroExpander .futuro__expander-head").hover(function () {
		$(this).find('.sign').html('>');
		$('.futuro__expander-content').not($(this).nextAll('.futuro__expander-content')).hide().prevAll('.futuro__expander-head').find('.sign').html('');
	    $(this).nextAll('.futuro__expander-content').fadeIn().css('display', 'inline-block')(function() {
	      $(this).closest('.futuroExpander').addClass('expanded');
	    });
	});
	});

}
