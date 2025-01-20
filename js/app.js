const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const bodyEl = document.body;

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
    bodyEl.classList.toggle('noscroll');
});

navLinks.forEach(function (item) {
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('nav--active');
        bodyEl.classList.remove('noscroll');
	})
})

new Swiper('.slider', {

    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    simulateTouch: true,
    spaceBetween: 100,
    speed: 800,
});
