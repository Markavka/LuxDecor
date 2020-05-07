

// Выпадающая менюшка
$('.header__menu-open').click(function(){
	$('.header__menu').addClass('header__menu-active');
	$('body').addClass('lock');
});

$('.header__menu-close').click(function(){
	$('.header__menu').removeClass('header__menu-active');
	$('body').removeClass('lock');
});





// pop-up Регистрация

$('.header__register-btn-reg').click(function(){
	$('.register').addClass('register-active');
	$('body').addClass('lock1');
});

$('.register__close').click(function(){
	$('.register').removeClass('register-active');
	$('body').removeClass('lock1');
});
$('.dark').click(function(){
	$('.register').removeClass('register-active');
	$('body').removeClass('lock1');
});

// Вход через Регистацию
$('.register__text span').click(function(){
	$('.register').removeClass('register-active');
	$('.sign-in').addClass('sign-in-active');
});





// pop-up Вход
$('.header__register-btn-signIn').click(function(){
	$('.sign-in').addClass('sign-in-active');
	$('body').addClass('lock1');
});

$('.sign-in__close').click(function(){
	$('.sign-in').removeClass('sign-in-active');
	$('body').removeClass('lock1');
});
$('.dark').click(function(){
	$('.sign-in').removeClass('sign-in-active');
	$('body').removeClass('lock1');
});

// Регистрация через Вход
$('.sign-in__text span').click(function(){
	$('.sign-in').removeClass('sign-in-active');
	$('.register').addClass('register-active');
});


// message

$('.i-hits__btn').click(function(){
	$('.pop-message').addClass('pop-message-active');
	$('body').addClass('lock1');
});

$('.pop-message__close').click(function(){
	$('.pop-message').removeClass('pop-message-active');
	$('body').removeClass('lock1');
});
$('.pop-message__continue').click(function(){
	$('.pop-message').removeClass('pop-message-active');
	$('body').removeClass('lock1');
});
$('.dark').click(function(){
	$('.pop-message').removeClass('pop-message-active');
	$('body').removeClass('lock1');
});


//Banner

$(document).ready(function(){
	$('.banner__slider').slick({
		dots: true,
		infinite: false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive:[ 
			{
				breakpoint: 992,
				settings: {
					arrows: false,
				}
			}
		]
	});
});

$(window).resize(function(){
	$('.banner__slider').slick('setPosition');
});

// Hits

$(document).ready(function(){
	$('.i-hits__slider').slick({
		slidesToShow: 4,
		variableWidth: true,
		responsive:[ 
			{
				breakpoint: 1247,
				settings: {
					slidesToShow: 3,
					centerMode: true,
					variableWidth: true,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					centerMode: false,
					variableWidth: true,
				}
			},{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					variableWidth: true,
				}
			},{
				breakpoint: 380,
				settings: {
					arrows: false,
				}
			}
		],
	});
});

$(window).resize(function(){
	$('.i-hits__slider').slick('setPosition');
});



$(document).ready(function(){
	$('.useful__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 2,
		autoplay: true,
		autoplaySpeed: 3500,
		responsive:[ 
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					variableWidth: true,
				}
			},
		]
	});
});

$(window).resize(function(){
	$('.useful__slider').slick('setPosition');
});










let plus = document.querySelectorAll(".quantity__plus");
let minus = document.querySelectorAll(".quantity__minus");
let num = document.querySelectorAll(".quantity__namber span");

plus.forEach((item, index) => {
	item.onclick = () => {
		let u = index;
		num[u].innerHTML++;
	}
});

minus.forEach((item, index) => {
	item.onclick = () => {
		let u = index;
		if (num[u].innerHTML > 1) {
			num[u].innerHTML--;
		}
	}
});