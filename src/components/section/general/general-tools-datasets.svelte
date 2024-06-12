<script lang="ts">
	import type { ToolsDatasets } from '$lib/types';
	import { isExternalLink } from '$src/lib/utils';
	import debounce from 'lodash.debounce';
	import { onMount } from 'svelte';

	export let component: ToolsDatasets;

	let cardsWrapper: HTMLDivElement | undefined;

	function normalizeHeight() {
		if (!cardsWrapper) return;

		const cardsArray = Array.from(cardsWrapper.children) as HTMLDivElement[];

		cardsArray.forEach((card) => (card.style.height = 'auto'));

		const heights = cardsArray.map((card) => card.clientHeight);
		const maxHeight = Math.max(...heights);

		cardsArray.forEach((card) => (card.style.height = `${maxHeight}px`));
	}

	onMount(() => {
		normalizeHeight();
		window.onresize = debounce(() => {
			normalizeHeight();
		}, 100);
	});
</script>

<div
	bind:this={cardsWrapper}
	class="container grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4"
>
	{#each [...component.tools, ...component.datasets] as item}
		<a
			href={item.link}
			target={isExternalLink(item.link || '') ? '_blank' : ''}
			class="flex items-center gap-8 rounded-3xl border p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg md:flex-col md:justify-center md:text-center"
		>
			<img src={item.imageUrl} alt={item.title} class="w-20 md:h-28 md:w-auto" />
			<div class="flex flex-col gap-3">
				<strong>{item.title}</strong>
				<span class="text-sm font-light text-foreground-paragraph/75">{item.description}</span>
			</div>
		</a>
	{/each}
</div>
