import Swiper, { Navigation, Pagination, Autoplay  } from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.products-swiper', {
	modules: [Navigation, Pagination, Autoplay],
	loop: true,
	spaceBetween: 15,
	slidesPerView: 'auto',
	watchSlidesProgress: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},

	navigation: {
		nextEl: '.products-button-next',
		/*prevEl: '.products-button-prev',*/
	},

	on: {
		init: last_visble,
		slideChange: last_visble,
	},
});

const about = new Swiper('.about-swiper', {
	modules: [Autoplay],
	loop: true,
	spaceBetween: 35,
	slidesPerView: 'auto',
	speed: 2000,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
});

const instagram1 = new Swiper('.instagram-swiper-row1', {
	modules: [Autoplay],
	direction: 'vertical',
	loop: true,
	spaceBetween: 30,
	slidesPerView: 'auto',
	speed: 8000,
	autoplay: {
		enabled: true,
    	delay: false,
	},
});
const instagram2 = new Swiper('.instagram-swiper-row2', {
	modules: [Autoplay],
	direction: 'vertical',
	loop: true,
	spaceBetween: 30,
	slidesPerView: 'auto',
	speed: 8000,
	autoplay: {
		enabled: true,
    	delay: false,
		reverseDirection: true,
	},
});
const instagram3 = new Swiper('.instagram-swiper-row3', {
	modules: [Autoplay],
	direction: 'vertical',
	loop: true,
	spaceBetween: 30,
	slidesPerView: 'auto',
	speed: 8000,
	autoplay: {
		enabled: true,
    	delay: false,
	},
});
const instagram4 = new Swiper('.instagram-swiper-row4', {
	modules: [Autoplay],
	direction: 'vertical',
	loop: true,
	spaceBetween: 30,
	slidesPerView: 'auto',
	speed: 8000,
	autoplay: {
		enabled: true,
    	delay: false,
		reverseDirection: true,
	},
});

function last_visble () {
	const last = document.querySelector('.products-slide-visible_last');
	if (last != null) {
		last.classList.remove('products-slide-visible_last');
	}
	const products_swiper = document.querySelector('.products-swiper');
	const products_slide = products_swiper.querySelectorAll('.swiper-slide-visible');
	const products_slide_last = products_slide[products_slide.length- 1];
	products_slide_last.classList.add('products-slide-visible_last');
}

