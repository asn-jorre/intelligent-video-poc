<script>
	import './page.scss';
	import { onMount } from 'svelte';
	import * as Animation from '../libs/Animation';

	let text = 'Een nieuwe wereld gaat voor je open';
	let model = 'Galaxy Flip 4';

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
			<div class="frame frame1">
				<div class="logo">
					<img class="logo_img" src="img/logo_b.png" alt="logo" />
				</div>
				<input
					type="text"
					class="model {videoIsplaying === true ? 'playing' : ''}"
					placeholder="sample text"
					bind:value={model}
				/>
				<div class="promo_bol">
					<div class="small small_top">Nu tot</div>
					<div class="big">- € 400</div>
					<div class="small small_bot">cashback</div>
				</div>

				<input
					type="text"
					class="testText {videoIsplaying === true ? 'playing' : ''}"
					placeholder="sample text"
					bind:value={text}
				/>
			</div>
			<div class="frame frame2">
				<div class="left">
					<img class="img3" src="img/frame3.png" alt="img3" />
				</div>
				<div class="right">
					<div class="visual">
						<div class="product">Galaxy Flip 4</div>
						<div class="image_container">
							<div class="image">
								<img id="phone1" class="phone1" src="img/phone1.png" alt="phone1" />
								<img id="phone2" class="phone2" src="img/phone2.png" alt="phone2" />
							</div>
						</div>
						<div class="text_container">
							<p class="info">Snel meldingen zien, oproepen beantwoorden
                  en meer zonder het toestel zelfs maar te openen</p>
						<div class="bottom">
							<div class="cta_button">
								<span class="cta_span">Ontdek meer</span>
								                    <img src="/img/arrow_w.png" alt="arrow">
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<video src="/flip4_.mp4" kind="captions" id="video" controls>
			<track kind="captions" />
		</video>
	</div>
</div>
