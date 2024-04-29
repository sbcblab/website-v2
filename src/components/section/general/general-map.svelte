<script lang="ts">
	import type { Map } from '$lib/types';

	export let component: Map;
</script>

<div class="container mt-12">
	<iframe
		class="rounded-md bg-[#e5e3df] shadow-lg"
		title="Google Maps"
		src={component.src}
		style={component.styles.map((style) => `${style.key}: ${style.value};`).join(' ')}
		allowfullscreen
	></iframe>
</div>
