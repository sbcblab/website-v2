<script lang="ts">
	import type { ToolDataset } from '$lib/data';

	export let component: {
		tools: ToolDataset[];
		datasets: ToolDataset[];
	};

	const { tools, datasets } = component;
</script>

<div class="grid grid-cols-4 gap-2">
	{#each [...tools, ...datasets] as item}
		<div class="flex flex-col gap-1 border p-4 text-sm">
			<img src={item.imageUrl} alt={item.title} class="aspect-[5/4]" />
			<strong>{item.title}</strong>
			<span>{item.description}</span>
			<a href={item.link} target="_blank" class="mt-auto w-fit pt-3 font-medium">Read more</a>
		</div>
	{/each}
</div>
