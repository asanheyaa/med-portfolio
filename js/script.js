
const header = document.querySelector('.header');

window.addEventListener('scroll', (e) => {
	let scrollDistance = window.scrollY
	if (scrollDistance > 0) {
		header.classList.add('--scroll-mode')
	} else {
		header.classList.remove('--scroll-mode')
	}
})

const anchorLinks = document.querySelectorAll('[data-anchor-link]');

anchorLinks.forEach(anchorLink => {
	anchorLink.addEventListener('click', (e)=>{
		e.preventDefault()

		const scrollingElement = document.querySelector(`${anchorLink.getAttribute("href")}`) 
		window.scrollTo({
			top: scrollingElement.offsetTop - header.offsetHeight - 10, 
			behavior: 'smooth'
		})
	})
});