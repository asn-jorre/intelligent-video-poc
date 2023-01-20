<script>
	import './Controlpanel.scss';

	import { copyOverLayVisibible } from '../../stores/controlPanel.store';

	let toggleCopy = function () {
		copyOverLayVisibible.update((n) => !n);
	};
</script>

<div class="panel">
	<p on:click={toggleCopy} on:keydown={toggleCopy}>copy overlay</p>
</div>
