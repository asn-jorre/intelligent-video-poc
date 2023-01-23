<script>
	import './Controlpanel.scss';

	import {
		mainCopyVisible,
		logoVisible,
		modelCopyVisible,
		promoBolVisible
	} from '../../stores/controlPanel.store';

	let toggleMainCopy = function () {
		mainCopyVisible.update((val) => !val);
	};

	let toggleLogo = function () {
		logoVisible.update((val) => !val);
	};

	let togglePromo = function () {
		promoBolVisible.update((val) => !val);
	};

	let toggleModelCopy = function () {
		modelCopyVisible.update((val) => !val);
	};
</script>

<div class="panel">
	<div class="ASNlogo">
		<img src="img/logo_white_asn.png" alt="" />
		<div class="sub">
			<span />
			<p>Intelligent Video tool</p>
		</div>
	</div>

	<div class="section">
		<!-- <img src="./img/widgets_title.png" alt="widgets_title" class="section-title" /> -->
		<span class="section-title">Dynamic toggles</span>
		<div class="icons-wrapper">
			<div
				on:click={toggleMainCopy}
				on:keydown={toggleMainCopy}
				class={$mainCopyVisible === false ? 'disabled' : ''}
			>
				<img src="./img/widgets_txt.png" alt="icon" class="icon" />
				<p>Main</p>
			</div>
			<div
				on:click={toggleModelCopy}
				on:keydown={toggleModelCopy}
				class={$modelCopyVisible === false ? 'disabled' : ''}
			>
				<img src="./img/widgets_txt.png" alt="icon" class="icon" />
				<p>Model</p>
			</div>
			<div
				on:click={toggleLogo}
				on:keydown={toggleLogo}
				class={$logoVisible === false ? 'disabled' : ''}
			>
				<img src="./img/widgets_logo.png" alt="icon" class="icon" />
				<p>Logo</p>
			</div>
			<div
				on:click={togglePromo}
				on:keydown={togglePromo}
				class={$promoBolVisible === false ? 'disabled' : ''}
			>
				<img src="./img/widgets_promo.png" alt="icon" class="icon" />
				<p>Promo</p>
			</div>
		</div>
	</div>
</div>
