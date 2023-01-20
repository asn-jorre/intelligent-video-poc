<script>
	import './Controlpanel.scss';

	import { mainCopyVisible } from '../../stores/controlPanel.store';

	let toggleCopy = function () {
		mainCopyVisible.update((n) => !n);
	};
</script>

<div class="panel">
	<p on:click={toggleCopy} on:keydown={toggleCopy}>copy overlay</p>
</div>
