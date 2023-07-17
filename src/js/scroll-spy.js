const scrollSpySections = document.querySelectorAll('.section');
const navLinksDesktop = document.querySelector('.nav__links--desktop');
const menuItems = navLinksDesktop.querySelectorAll('.nav__link');

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		scrollSpySections.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 90) {
				sections.push(section);

				const activeSection = navLinksDesktop.querySelector(
					`.nav__link[href*="${sections[0].id}"]`
				);
				menuItems.forEach((item) => item.classList.remove('active'));

				activeSection.classList.add('active');
			}
		});
	}
};

window.addEventListener('scroll', handleScrollSpy);
handleScrollSpy();
