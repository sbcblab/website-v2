<script lang="ts">
	import type { IFrame } from '$lib/types';

	export let component: IFrame;
</script>

<div class="container mt-16">
	<iframe
		class="h-96 w-full rounded-[2rem]"
		title={component.title}
		src={component.src}
		style={component.styles.map((style) => `${style.key}: ${style.value};`).join(' ')}
		allowfullscreen
	></iframe>
</div>
