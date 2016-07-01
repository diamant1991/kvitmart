function mainSlider(){
	if($('#main-slider').length){
		$('#main-slider').bxSlider({
		  mode: 'fade',
		  captions: true
		});
	}
}
mainSlider()

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
		arrow.addClass('active')
	}
	else{
		content.hide();
		arrow.removeClass('active')
	}
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