$(document).ready(function(){

jQuery('#mycarousel_').jcarousel({
	wrap: 'circular',
	scroll: 1
});
jQuery('#mycarousel2').jcarousel({
	wrap: 'circular',
	scroll: 1
});
jQuery('#slider_').jcarousel({
	wrap: 'circular',
	scroll: 1,
	animation: 'slow',
	auto:10
});
	
$(function() {
	var $items = $('.benefits_bot li');
	$items.click(function() {
		$items.removeClass('active');
		$(this).addClass('active');
		var index = $items.index($(this));
		$('.benefits_top li').hide().eq(index).show();
		return false;
	}).eq(1).click();
});

$(".partners li img").hover( 
	function() { 
	$(this).stop().animate({"opacity": "1"}, "fast"); 
	}, 
	function() { 
	$(this).stop().animate({"opacity": "0"}, "fast"); 
}); 

$(function() {
	$( "#sel" ).selectmenu();
});

$(function() {
	var $items_room = $('.wrap.n__ li');
	$items_room.click(function() {
		$items_room.removeClass('act');
		$(this).addClass('act');
		var index = $items_room.index($(this));
		$('.wrap__ > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});

$(function() {
	var $items_room = $('.wrap.n1 li');
	$items_room.click(function() {
		$items_room.removeClass('act');
		$(this).addClass('act');
		var index = $items_room.index($(this));
		$('.wrap_inner > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});
$(function() {
	var $items_room_inner = $('.box1 .box_inner_inner .room_ > div');
	$items_room_inner.click(function() {
		$items_room_inner.removeClass('active');
		$(this).addClass('active');
		var index = $items_room_inner.index($(this));
		$('.box1 .box_inner_inner .info > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});
$(function() {
	var $items_room_inner = $('.box2 .box_inner_inner .room_ > div');
	$items_room_inner.click(function() {
		$items_room_inner.removeClass('active');
		$(this).addClass('active');
		var index = $items_room_inner.index($(this));
		$('.box2 .box_inner_inner .info > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});
$(function() {
	var $items_room_inner = $('.box3 .box_inner_inner .room_ > div');
	$items_room_inner.click(function() {
		$items_room_inner.removeClass('active');
		$(this).addClass('active');
		var index = $items_room_inner.index($(this));
		$('.box3 .box_inner_inner .info > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});
$(function() {
	var $items_room_inner = $('.box4 .box_inner_inner .room_ > div');
	$items_room_inner.click(function() {
		$items_room_inner.removeClass('active');
		$(this).addClass('active');
		var index = $items_room_inner.index($(this));
		$('.box4 .box_inner_inner .info > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});
$(function() {
	var $items_room_end = $('.wrap_inner .box1 .list li');
	$items_room_end.click(function() {
		$items_room_end.removeClass('act');
		$(this).addClass('act');
		var index = $items_room_end.index($(this));
		$('.wrap_inner .box1 .box_inner_inner > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});
$(function() {
	var $items_room_end = $('.wrap_inner .box2 .list li');
	$items_room_end.click(function() {
		$items_room_end.removeClass('act');
		$(this).addClass('act');
		var index = $items_room_end.index($(this));
		$('.wrap_inner .box2 .box_inner_inner > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});
$(function() {
	var $items_room_end = $('.wrap_inner .box3 .list li');
	$items_room_end.click(function() {
		$items_room_end.removeClass('act');
		$(this).addClass('act');
		var index = $items_room_end.index($(this));
		$('.wrap_inner .box3 .box_inner_inner > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});
$(function() {
	var $items_room_end = $('.wrap_inner .box4 .list li');
	$items_room_end.click(function() {
		$items_room_end.removeClass('act');
		$(this).addClass('act');
		var index = $items_room_end.index($(this));
		$('.wrap_inner .box4 .box_inner_inner > div').hide().eq(index).show();
		return false;
	}).eq(0).click();
});

var $menu = $("#header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 280 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 280 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}
});

$('a[href=#up]').click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
});
	
(function($){
	$(window).load(function(){
		
		$("#menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"#menu a"
		});
		
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
		
	});
})(jQuery);

$("a[rel=example_group]").fancybox({
	'transitionIn'		: 'none',
	'transitionOut'		: 'none',
	'titlePosition' 	: 'over',
	'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
		return '<span id="fancybox-title-over">' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
	}
});

$('.checkin__submit').click(function(){
	var form = $(this).closest('form');
	var error = false;
	$('.obligatory').each(function(){
		if($(this).hasClass('datetime'))
		{
			if(!jQuery.trim($('input[name="DATE"]').val()) || !jQuery.trim($('input[name="HOURS"]').val()) || !jQuery.trim($('input[name="MIN"]').val()))
			{
				$(this).addClass('checkin__box--error');
				error = true;
			}
			else
				$(this).removeClass('checkin__box--error');
		}
		else
		{
			var input = $(this).find('input');
			if(!jQuery.trim(input.val()))
			{
				input.closest('.checkin__box').addClass('checkin__box--error');
				error = true;
			}
			else
				input.closest('.checkin__box').removeClass('checkin__box--error');
		}
	});
	if(!error)
	$(this).closest('form').submit();
	return false;
});

});