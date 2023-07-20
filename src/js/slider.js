const slider = document.querySelector('.slider');
const sliderImges = document.querySelectorAll('.slider__box');
const leftBtn = document.querySelector('.slider__btn--left');
const rightBtn = document.querySelector('.slider__btn--right');
const sliderSpeed = 4000;

let prev;
let index = 0;

const handleCarousel = () => {
	index++;
	changeImg();
};

let startCarousel = setInterval(handleCarousel, sliderSpeed);

const changeImg = () => {
	if (index > sliderImges.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = sliderImges.length - 1;
	}

	sliderImges.forEach((img) => {
		console.log(img.getAttribute('data-number'));
		if (img.getAttribute('data-number') != index) {
			img.classList.remove('show');
		} else {
			img.classList.add('show');
		}
	});
};

const handleRightArrow = () => {
	index++;
	resetInterval();
};

const handleLeftArrow = () => {
	index--;
	resetInterval();
};

const resetInterval = () => {
	changeImg();
	clearInterval(startCarousel);
	startCarousel = setInterval(handleCarousel, sliderSpeed);
};

rightBtn.addEventListener('click', handleRightArrow);
leftBtn.addEventListener('click', handleLeftArrow);
