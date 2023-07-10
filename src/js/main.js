const navBurger = document.querySelector('.nav__box-burger');
const navClose = document.querySelector('.nav__box-close');
const navBox = document.querySelector('.nav__box');
const navMobileMenu = document.querySelector('.nav__links--mobile');
const navLinks = navMobileMenu.querySelectorAll('.nav__link');

const handleMobileMenu = () => {
	navBurger.classList.toggle('show-nav-burger');
	navClose.classList.toggle('show-nav-close');
	navMobileMenu.classList.toggle('show-nav');

	handleNavItemsAnimation()
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	navLinks.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

navLinks.forEach((link) => link.addEventListener('click', handleMobileMenu));

navBox.addEventListener('click', handleMobileMenu);
