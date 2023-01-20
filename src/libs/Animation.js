import { gsap } from 'gsap';

let tl;

let tl_duration = 20;

let tlFinished = false;

let tlComplate = function () {
	console.log('TL COMPLETE');
	tlFinished = true;
};

export function initAnimation(animationWraper) {
	tl = gsap.timeline({ onComplete: tlComplate, paused: true });

	tl.from(
		'.testText',
		{
			duration: 1,
			ease: 'none',
			paused: false,
			opacity: 0,
		},
		0
	),
	tl.to(".logo", { opacity: 1, ease: "power2.out", duration: 1 }, "<");
	tl.to(".model", { opacity: 1, ease: "power2.out", duration: 1 }, "<");
	tl.to(".promo_bol", { opacity: 1, ease: "power3.out"}, "<");
	tl.to(".frame1", {opacity: 0}, "<+4")


	tl.to(".right", { x: 0, opacity: 1, ease: "power2.out", duration: 0.5 }, "<");
	tl.to(".left", { x: 0, opacity:1, ease: "power2.out", duration: 0.5 }, "<+0.2");
	tl.from(".product", { opacity: 0, ease: "power2.out", duration: 1 });
	tl.from(
		".text_container",
		{ opacity: 0, ease: "power2.out", duration: 1 },
		"<+0.3"
	);
	tl.from(".info", { opacity: 0, ease: "power2.out", duration: 1 }, "<");
	tl.to(".cta_button", { opacity: 1, ease: "power2.out", duration: 1 }, "<");
	tl.from(
		".image_container",
		{ scale: 1.1, opacity: 0, ease: "power2.out", duration: 1 },
		"<+0.3"
	);
	tl.from(
		".phone1",
		{ x: "-7%", y: "-9%", ease: "power4.out", duration: 8 },
		"<"
	);
	tl.from(
		".phone2",
		{ x: "7%", y: "9%", ease: "power4.out", duration: 8 },
		"<"
	);



}

// export function startAnimation() {
// 	//console.log(tl.duration());
// 	tl.time(0);
// 	tl.play();
// }

export function playAnimation() {
	if (tlFinished) {
		tl.time(0); // reset to beginning of timelin
		tlFinished = false;
	}

	tl.play();
}

export function pauseAnimation() {
	tl.pause();
}

export function goTo(time) {
	tl.seek(time);
}
