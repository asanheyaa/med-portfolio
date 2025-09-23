
const header = document.querySelector('.header');

window.addEventListener('scroll', (e) => {
	let scrollDistance = window.scrollY
	if (scrollDistance > 0) {
		header.classList.add('--scroll-mode')
	} else {
		header.classList.remove('--scroll-mode')
	}
})