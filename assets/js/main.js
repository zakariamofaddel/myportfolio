/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
		});
	}
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	/*Active link*/
	navLink.forEach((n) => n.classList.remove("active"));
	this.classList.add("active");

	/*Remove menu mobile*/
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* GSAP TIMELINE */
const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

tl.from(".intro__hidden", {
	delay: 0.4,
	opacity: 0,
	y: 50,
	stagger: 0.2,
});
tl.to(".slider__animation", {
	delay: 1.3,
	y: "-100%",
	duration: 1.5,
});
tl.to(
	".intro",
	{
		y: "-100%",
		duration: 1,
	},
	"-=1.2"
);
tl.from(".logo__container", {
	opacity: 0,
	x: -50,
	duration: 0.4,
});
tl.from(
	".nav__item",
	{
		opacity: 0,
		x: 50,
		duration: 0.4,
		stagger: 0.2,
	},
	"-=0.4"
);
tl.from(
	".home__img",
	{
		opacity: 0,
		x: 100,
		duration: 0.4,
	},
	"-=0.4"
);
tl.from(
	".home__title",
	{
		opacity: 0,
		y: -100,
		duration: 0.4,
	},
	"-=0.4"
);
tl.from(".home__data .button", {
	opacity: 0,
	x: -50,
	duration: 0.4,
});
tl.from(".home__social a", {
	opacity: 0,
	x: -50,
	duration: 3,
	stagger: 0.2,
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
	origin: "top",
	distance: "10rem",
	duration: 1500,
	reset: false,
});

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL WORK*/
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { interval: 200 });

/* JQUERY SMOOTH SCROLL */

$(document).ready(function () {
	$("a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				900,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
});
