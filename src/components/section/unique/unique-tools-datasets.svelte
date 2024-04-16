<script lang="ts">
	import type { ToolDataset } from '$lib/data';

	export let component: {
		tools: ToolDataset[];
		datasets: ToolDataset[];
	};

	const { tools, datasets } = component;
</script>

<div class="container mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
	{#each [...tools, ...datasets] as item}
		<div class="flex flex-col gap-1 rounded-lg border p-4 text-sm">
			<img src={item.imageUrl} alt={item.title} class="aspect-[5/4]" />
			<strong>{item.title}</strong>
			<span>{item.description}</span>
			<a href={item.link} target="_blank" class="mt-auto w-fit pt-4 font-medium">Read more</a>
		</div>
	{/each}
</div>
