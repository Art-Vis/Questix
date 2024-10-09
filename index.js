document.addEventListener('DOMContentLoaded', function () {
	const burgerBtn = document.querySelector('.burger-btn');
	const nav = document.querySelector('.header__nav');

	burgerBtn.addEventListener('click', function () {
		nav.classList.toggle('active');
		burgerBtn.classList.toggle('active');
	});
});
