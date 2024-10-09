document.addEventListener('DOMContentLoaded', function () {
	const burgerBtn = document.querySelector('.burger-btn');
	const nav = document.querySelector('.header__nav');

	burgerBtn.addEventListener('click', function () {
		nav.classList.toggle('active');
		burgerBtn.classList.toggle('active');
	});

	let startX,
		currentX,
		currentIndex = 0;
	const cards = document.querySelectorAll('.reviews__card');
	const container = document.querySelector('.reviews__cards');

	function swipeStart(e) {
		startX = e.touches[0].clientX;
	}

	function swipeMove(e) {
		currentX = e.touches[0].clientX;
		const distance = currentX - startX;
		container.style.transform = `translateX(${
			-(currentIndex * 100) + (distance / window.innerWidth) * 100
		}%)`;
	}

	function swipeEnd() {
		const distance = currentX - startX;

		if (distance < -50 && currentIndex < cards.length - 1) {
			currentIndex++;
		} else if (distance > 50 && currentIndex > 0) {
			currentIndex--;
		}

		container.style.transform = `translateX(${-currentIndex * 80}%)`;
	}

	function initSwipe() {
		if (window.innerWidth < 500) {
			const reviewsContainer = document.querySelector('.reviews');
			reviewsContainer.addEventListener('touchstart', swipeStart);
			reviewsContainer.addEventListener('touchmove', swipeMove);
			reviewsContainer.addEventListener('touchend', swipeEnd);
		}
	}

	initSwipe();

	window.addEventListener('resize', function () {
		if (window.innerWidth < 580) {
			initSwipe();
		} else {
			const reviewsContainer = document.querySelector('.reviews');
			reviewsContainer.removeEventListener('touchstart', swipeStart);
			reviewsContainer.removeEventListener('touchmove', swipeMove);
			reviewsContainer.removeEventListener('touchend', swipeEnd);
			container.style.transform = 'translateX(0)';
			currentIndex = 0;
		}
	});
});
