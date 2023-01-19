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

	tl.to(
		'.testBlock',
		{
			duration: tl_duration,
			x: () => animationWraper.offsetWidth,
			xPercent: -80, // offset by the width of the box
			rotation: 360,
			ease: 'none',
			paused: false
		},
		0
	).to(
		'.testText',
		{
			duration: tl_duration,
			x: () => animationWraper.offsetWidth,
			xPercent: -120,
			rotation: 360,
			ease: 'none',
			paused: false
		},
		0
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
