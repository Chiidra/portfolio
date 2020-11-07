!(function(
$) {"use strict";
$('#works').on('swipeleft',function(e){
		console.log('swipeleft');
		$('#NextWork').click();
});
$('#works').on('swiperight',function(e){
		console.log('swiperight');
		$('#PreviousWork').click();
});

$('.change-lang').on('click', function(e){e.preventDefault();
$('#LangList .loader').show();
$.get(
$(this).attr('href'), function(data){if(data == 1){location.reload();}
}
);}
);
$(window).on('load', function() {var preloaderFadeOutTime = 500;function hidePreloader() {var preloader = 
$('.spinner-wrapper');setTimeout(function() {preloader.fadeOut(preloaderFadeOutTime);}
, 500);}
hidePreloader();}
);if (
$('.typed').length) {var typed_strings = 
$(".typed").data('typed-items');typed_strings = typed_strings.split(',');new Typed('.typed', {strings: typed_strings,loop: true,typeSpeed: 100,backSpeed: 50,backDelay: 2000}
);}
$(document).on('click', '.nav-menu a, .scrollto', function(e) {if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {var target = 
$(this.hash);if (target.length) {e.preventDefault();var scrollto = target.offset().top;
$('html, body').animate({scrollTop: scrollto}
, 1500, 'easeInOutExpo');if (
$(this).parents('.nav-menu, .mobile-nav').length) {
$('.nav-menu .active, .mobile-nav .active').removeClass('active');
$(this).closest('li').addClass('active');}
if (
$('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');}
return false;}
}
}
);
$(document).ready(function() {
	$('#NextWork').on('click', function(e){
		e.preventDefault();
		var container = $('#works-container');
		var current = container.find('.work-item.active');
		var next = current.next('.work-item');
		if(next.length != 0){
			container.find('.work-item').removeClass('active');
			next.addClass('active');
		}else{
			next = container.find('.work-item').first();
			container.find('.work-item').removeClass('active');
			next.addClass('active');
		}
		$('html, body').animate({
			scrollTop: $('#works').offset().top
		}, 500);
	});
	$('#PreviousWork').on('click', function(e){
		e.preventDefault();
		var container = $('#works-container');
		var current = container.find('.work-item.active');
		var previous = current.prev('.work-item');
		if(previous.length != 0){
			container.find('.work-item').removeClass('active');
			previous.addClass('active');
		}else{
			previous = container.find('.work-item').last();
			container.find('.work-item').removeClass('active');
			previous.addClass('active');
		}
		$('html, body').animate({
			scrollTop: $('#works').offset().top
		}, 500);
	});

	if (window.location.hash) {var initial_nav = window.location.hash;if (
$(initial_nav).length) {var scrollto = 
$(initial_nav).offset().top-100;
$('html, body').animate({scrollTop: scrollto}
, 1500, 'easeInOutExpo');}
}
}
);
$(document).on('click', '.mobile-nav-toggle', function(e) {
$('body').toggleClass('mobile-nav-active');
$('.mobile-nav-toggle svg').toggleClass('fa-bars fa-times');}
);
$('#main').click(function(e) {var container = 
$(".mobile-nav-toggle");if (!container.is(e.target) && container.has(e.target).length === 0) {if (
$('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle svg').toggleClass('fa-bars fa-times');}
}
}
);var nav_sections = 
$('section');var main_nav = 
$('.nav-menu, #mobile-nav');
$(window).on('scroll', function() {var cur_pos = 
$(this).scrollTop() + 300;nav_sections.each(function() {var top = 
$(this).offset().top,bottom = top + 
$(this).outerHeight();if (cur_pos >= top && cur_pos <= bottom) {if (cur_pos <= bottom) {main_nav.find('li').removeClass('active');}
main_nav.find('a[href="#' + 
$(this).attr('id') + '"]').parent('li').addClass('active');}
if (cur_pos < 200) {
$(".nav-menu ul:first li:first").addClass('active');}
}
);}
);
$(window).scroll(function() {
	if(
$(this).scrollTop() > (
$('#content-container').offset().top-100)){
$('.mobile-nav-toggle').addClass('show');}
else{
$('.mobile-nav-toggle').removeClass('show');}
if(
$(this).scrollTop() > (
$('#content-container').offset().top-100)){
$('.mobile-nav-toggle').addClass('show');}
else{
$('.mobile-nav-toggle').removeClass('show');}
if($(window).width() > 768){
	if($(this).scrollTop() > ($('#content-container').offset().top-100)){
$('#header').addClass('show');}
else{
$('#header').removeClass('show');}
}
}
);
$('.back-to-top').click(function() {
$('html, body').animate({scrollTop: 0}
, 1500, 'easeInOutExpo');return false;}
);function aos_init() {AOS.init({duration: 1000,once: true}
);}

$(window).on('load', function() {
$('.venobox').venobox({'share': false}
);aos_init();
$('.contact-form').on('submit', function(e){e.preventDefault();var form = 
$(this);var data = new FormData(this);var link = 
$(this).attr('action');var msg = 
$('.contact-message');var btn = form.find('button[type=submit]');var btn_text = btn.text();var loading = "<i class='fas fa-spinner fa-spin'></i>";var err = 0;var name = 
$('#name');var email = 
$('#email');var service = 
$('#service');var budget = 
$('#budget');var message = 
$('#message');var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if(!name.val()){
$('.name-validate').text(name.attr('data-msg'));name.css('border-color','#cd5b66');err = 1;}
else{
$('.name-validate').text("");name.css('border-color','#ced4da');}
if(!email.val()){
$('.email-validate').text(email.attr('data-msg'));email.css('border-color','#cd5b66');err = 1;}
else{if(!emailReg.test( email.val() )){
$('.email-validate').text(email.attr('data-valid'));email.css('border-color','#cd5b66');err = 1;}
else{
$('.email-validate').text("");email.css('border-color','#ced4da');}
}
if(
$('#service option:selected').val()==''){
$('.service-validate').text(service.attr('data-msg'));service.css('border-color','#cd5b66');err = 1;}
else{
$('.service-validate').text("");service.css('border-color','#ced4da');}
if(!budget.val()){
$('.budget-validate').text(budget.attr('data-msg'));budget.css('border-color','#cd5b66');err = 1;}
else{if(
$.isNumeric(parseInt(budget.val())) == false){
$('.budget-validate').text(budget.attr('data-valid'));budget.css('border-color','#cd5b66');err = 1;}
else{
$('.budget-validate').text("");budget.css('border-color','#ced4da');}
}
if(!message.val()){
$('.message-validate').text(message.attr('data-msg'));message.css('border-color','#cd5b66');err = 1;}
else{
$('.message-validate').text("");message.css('border-color','#ced4da');}
if(err == 0){btn.html(loading);btn.prop('disabled',true);
$.ajax({url: link,method: "POST",data: new FormData(this),dataType: "json",processData: false,contentType: false,success:function(res){console.log(res.area);if(res.stat == 1){
$('.'+res.area+'-validate').html(res.message);
$('#'+res.area).css('border-color','#cd5b66');btn.prop('disabled',false);btn.text(btn_text);}
else{msg.html(res.message);btn.text(btn_text);btn.prop('disabled',false);}
}
}
);}
}
);}
);}
)(jQuery);