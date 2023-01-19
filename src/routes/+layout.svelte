<script>
	import Controlpanel from '../components/Controlpanel/Controlpanel.svelte';
	import './layout.scss';
</script>

<div class="app">
	<Controlpanel />

	<main>
		<slot />
	</main>
</div>

<style>
</style>
