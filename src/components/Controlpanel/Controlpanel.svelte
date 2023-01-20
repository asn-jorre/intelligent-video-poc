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

	<p on:click={toggleMainCopy} on:keydown={toggleMainCopy}>Toggle Main copy</p>
	<p on:click={toggleLogo} on:keydown={toggleLogo}>Toggle Logo</p>
	<p on:click={togglePromo} on:keydown={togglePromo}>Toggle promo</p>
	<p on:click={toggleModelCopy} on:keydown={toggleModelCopy}>Toggle model copy</p>
</div>
