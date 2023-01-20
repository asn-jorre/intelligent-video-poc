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
