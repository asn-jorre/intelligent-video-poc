<script>
	import './Controlpanel.scss';

	import { mainCopyVisible } from '../../stores/controlPanel.store';

	let toggleCopy = function () {
		mainCopyVisible.update((n) => !n);
	};
</script>

<div class="panel">
	<div class="ASNlogo">
		<img src="img/logo_white_asn.png" alt="">
		<div class="sub">
			<span></span>
			<p>Intelligent Video tool</p>
		</div>
	</div>
	<p on:click={toggleCopy} on:keydown={toggleCopy}>copy overlay</p>
</div>
