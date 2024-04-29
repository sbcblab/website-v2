<script lang="ts">
	import Svg from '$components/svg.svelte';
	import type { Partnerships } from '$lib/types';

	export let component: Partnerships;
</script>

<div class="container mt-12 space-y-10">
	{#if component.heading}
		<h3 class="text-center text-xl">{component.heading}</h3>
	{/if}
	<div class="grid grid-cols-2 justify-items-center gap-10 px-4 md:grid-cols-4 md:px-0">
		{#each component.partnerships as partnership}
			<a href={partnership.link} target="_blank" class="h-fit w-fit">
				<Svg
					src={partnership.imageUrl}
					class="h-20 text-foreground transition-transform hover:scale-105 md:h-24"
					overrideFill
				/>
			</a>
		{/each}
	</div>
</div>
