<script>
	import './page.scss';
	import { onMount } from 'svelte';
	import * as Animation from '../libs/Animation';

	let text = 'Sample text';

	let videoIsplaying = false;

	onMount(async () => {
		let vid = document.getElementById('video');

		let animationWrapper = document.getElementById('animationWrapper');

		Animation.initAnimation(animationWrapper);

		// vid playback is manually changed
		vid.onseeking = function () {
			Animation.goTo(vid.currentTime);
		};

		// triggered every (milli)second video is playing
		vid.ontimeupdate = function () {
			//console.log('time: ' + vid.currentTime);
		};

		vid.onpause = function () {
			videoIsplaying = false;
			Animation.pauseAnimation();
			console.log(text);
		};

		vid.onplay = function () {
			videoIsplaying = true;
			Animation.playAnimation();
		};
	});
</script>

<div class="main">
	<div id="contentWrapper">
		<div id="animationWrapper">
			<span id="testBlock" class="testBlock" /> <br />
			<!-- <span class="testText">test text</span> -->
			<input
				type="text"
				class="testText {videoIsplaying === true ? 'playing' : ''}"
				placeholder="sample text"
				bind:value={text}
			/>
		</div>
		<video src="/vid.mp4" kind="captions" id="video" controls>
			<track kind="captions" />
		</video>
	</div>
</div>
