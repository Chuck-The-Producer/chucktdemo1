const navMenu = document.getElementById('nav_menu'),
	navToggle = document.getElementById('nav_toggle'),
	navClose = document.getElementById('nav_close')

	if(navToggle){
		navToggle.addEventListener('click', () =>{
			navMenu.classList.add('show-menu')
		})
	}

	if(navClose){
		navClose.addEventListener('click', () =>{
			navMenu.classList.remove('show-menu')
		})
	}

	/* ========== REMOVE MENU MOBILE =========== */
	const navLink = document.querySelectorAll('.nav-link')

	function linkAction(){
		const navMenu = document.getElementById('nav_menu')

		navMenu.classList.remove('show-menu')
	}

	navLink.forEach(n => n.addEventListener('click', linkAction))

	/* ========== Change Background Header =========== */
	function scrollHeader(){
		const header = document.getElementById('header')

		if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
	}

	window.addEventListener('scroll', scrollHeader)