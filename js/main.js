function mainSlider(){
	if($('#main-slider').length){
		$('#main-slider').bxSlider({
		  mode: 'fade',
		  captions: true
		});
	}
}
mainSlider()

$(document).ready(function(){
  $('.input-tel').inputmask("+7(999)-999-99-99"); 
});

$('.toggle__header').click(function(e) {
	var content = $(this).next();
	if(content.is(':hidden')){
		$('.toggle__header').removeClass('active');
		$('.toggle__content').slideUp(350);
		content.slideDown(350);
		$(this).addClass('active');
	}
	else{
		content.slideUp(350);
		$(this).removeClass('active');
	}
});

$('.info-toggle').click(function(e) {
	var content = $(this).next(),
			arrow = $(this).find('.arrow');
	if(content.is(':hidden')){
		content.show();
		$(this).addClass('active');
		arrow.addClass('active');
	}
	else{
		$(this).removeClass('active');
		content.hide();
		arrow.removeClass('active');
	}
});

$(function() {
	$('.search-icon').click(function(e) {
		e.preventDefault();
		var search = $('#search');
		if (search.is(':hidden')){
			$(this).addClass('active');
			search.fadeIn(300)
		}
		else{
			$(this).removeClass('active');
			search.fadeOut(300)
		}
	});
});

$(function() {
	$('.filter-btn').click(function(e) {
		var filter = $(this).next();
		if (filter.is(':hidden')){
			filter.slideDown(300);
			$(this).addClass('active');
		}
		else{
			filter.slideUp(300);
			$(this).removeClass('active');
		}
	});
});

$(function() {
	$('.mob-filter-btn').click(function(e) {
		var filter = $('#sidebar-filter')
		if (filter.is(':hidden')){
			filter.slideDown(300);
			$(this).addClass('active');
		}
		else{
			filter.slideUp(300);
			$(this).removeClass('active');
		}
	});
});

$(function() {
	$('.toggle-menu').click(function(e) {
		var menu = $('#mobile-nav');
		if (menu.is(':hidden')){
			menu.slideDown(300);
			$(this).addClass('active');
		}
		else{
			menu.slideUp(300);
			$(this).removeClass('active');
		}
	});
});

$(function() {
	$('.other-modal-link').click(function(e) {		
		e.preventDefault();
		var modal = $(this).next()
		if(modal.is(':hidden')){
			modal.fadeIn(250);
			modal.addClass('active');
		}
		else{
			modal.fadeOut(250);
			modal.removeClass('active');
		}
	});
	$('.modal__close_other').click(function(e) {
		var modal = $(this).closest('.other-modal');
		modal.fadeOut(250);
		modal.removeClass('active');
	});
});

$(function() {
	$('.mobile-search').click(function(e) {
		var search = $('#search-form');
		if (search.is(':hidden')){
			search.slideDown(300);
			$(this).addClass('active');
		}
		else{
			search.slideUp(300);
			$(this).removeClass('active');
		}
	});
});

var profile = ['#profile','#history-orders'];
var	info = ['#product-descr','#product-char','#product-review'];
var	catalog = ['#catalog-column','#catalog-list'];
var products = ['#telephone','#gadjet','#auto','#tablet','#apple','#acces','#checol','#audio-product','#all-product']; 

function tab(arr, e){
  if ($(e).css('display') == 'none'){
    for(var i in arr){   
       $(arr[i]).hide();     
    }
    $(e).show();       
  }
}
$('.nav-tab a').click(function(e) {
	$('.nav-tab a').removeClass('active')
	$(this).addClass('active');
});
$('.view').click(function(e) {
	$('.view').removeClass('active')
	$(this).addClass('active');
});

$(document).ready(function() {
  $(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
});

// Select
$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(150);

		$(this).addClass('active');
		$('.drop').find('li').click(function(){
			var selectResult = $(this).html();
			$(this).parent().parent().find('input').val(selectResult);
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(150);
		});
	
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(150);
	}

	return false;
});

$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0){
      container.slideUp(150);
      $('.slct').removeClass('active');
  }
});

$(function() {
	$('.more-link_descr').click(function(e) {
		e.preventDefault();
		$('.product-descr-text').addClass('show');
		$(this).hide()
	});
});

$(function() {
	$('.more-link_review').click(function(e) {
		e.preventDefault();
		$('.product-review__list').addClass('show-all');
		$(this).hide()
	});
});

$('form').bind('submit', function(event) {
  $(this).find('[type=text]').each(function() {
  	var errorIcon = '<div class="error-icon"></div>';
  	var okIcon = '<div class="ok-icon"></div>';
  	var parentBlock = $(this).parent();
    if(!$(this).val().length) { 
    event.preventDefault();
      parentBlock.append(errorIcon)
      $(this).addClass('error')
      $('.error-info').show();
    }
    else{
      parentBlock.append(okIcon)
    }
  });
});

$(document).ready(function () {
	$.fn.equivalent = function (){
	  var $blocks = $(this),
	      maxH    = $blocks.eq(0).height(); 
	  $blocks.each(function(){
	      maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
	  });

	  $blocks.height(maxH); 
	}
	if(window.matchMedia('(min-width: 992px)').matches){
		$('.height-block').equivalent();
	}
	
});