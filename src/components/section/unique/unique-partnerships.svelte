<script lang="ts">
	import type { Partnerships } from '$lib/types';
	import Svg from '$src/components/svg.svelte';

	export let component: Partnerships;
</script>

<div class="container flex flex-wrap justify-center">
	{#each component.partnerships as partnership}
		<a
			href={partnership.link}
			target="_blank"
			class="flex items-center justify-center p-10 transition-transform hover:scale-105"
		>
			<Svg src={partnership.imageUrl} class="h-24" overrideFill />
		</a>
	{/each}
</div>
