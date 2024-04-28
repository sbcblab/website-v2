<script lang="ts">
	import type { ToolDataset } from '$lib/data';
	import { onMount } from 'svelte';

	export let component: {
		tools: ToolDataset[];
		datasets: ToolDataset[];
	};

	const { tools, datasets } = component;

	let cards: HTMLDivElement;

	function normalizeHeight() {
		const cardsArray = Array.from(cards.children) as HTMLDivElement[];

		cardsArray.forEach((card) => (card.style.height = 'auto'));

		const heights = cardsArray.map((card) => card.clientHeight);
		const maxHeight = Math.max(...heights);

		cardsArray.forEach((card) => (card.style.height = `${maxHeight}px`));
	}

	onMount(() => {
		normalizeHeight();
		window.addEventListener('resize', normalizeHeight);
	});
</script>

<div
	bind:this={cards}
	class="container mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4"
>
	{#each [...tools, ...datasets] as item}
		<a
			href={item.link}
			target="_blank"
			class="flex items-center gap-8 rounded-lg border p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg md:flex-col md:justify-center md:text-center"
		>
			<img src={item.imageUrl} alt={item.title} class="w-20 md:h-28 md:w-auto" />
			<div class="flex flex-col gap-3">
				<span class="text-lg font-semibold">{item.title}</span>
				<span class="text-xs font-light text-foreground-paragraph">{item.description}</span>
			</div>
		</a>
	{/each}
</div>
