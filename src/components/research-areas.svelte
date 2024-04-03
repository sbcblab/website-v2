<script lang="ts">
	import type { ResearchArea } from '$lib/data';
	import { cn } from '$lib/utils';
	import Markdown from './markdown.svelte';

	export let component: {
		researchAreas: ResearchArea[];
	};

	const { researchAreas } = component;

	let selectedArea: ResearchArea = researchAreas[0];
</script>

<div class="flex">
	<div class="relative z-10 flex h-min flex-col border-y">
		<div class="absolute bottom-0 left-0 top-0 z-10 w-1 bg-[#6E6E6E]" />
		{#each researchAreas as area}
			<button
				on:click={() => (selectedArea = area)}
				class={cn(
					selectedArea === area
						? 'bg-background text-primary-solid'
						: 'bg-gray-100 text-foreground/80',
					'relative flex items-center gap-3 text-nowrap border-r py-3 pl-5 pr-16 font-medium [&:not(:last-child)]:border-b'
				)}
			>
				{#if selectedArea === area}
					<div class="absolute -right-1 bottom-0 top-0 w-2 bg-background" />
					<div class="absolute bottom-0 left-0 top-0 z-20 w-1 bg-primary-solid" />
				{/if}
				{#if area.iconUrl}
					<div
						class={cn(
							selectedArea === area ? 'bg-primary-solid' : 'bg-foreground/80',
							'mask h-5 w-5'
						)}
						style={`mask-image: url(${area.iconUrl}); -webkit-mask-image: url(${area.iconUrl});`}
					/>
				{/if}
				<span>{area.title}</span>
			</button>
		{/each}
	</div>
	<div class="-translate-x-[1px] border p-8 [&>p]:text-base">
		<h3 class="mb-4 text-lg leading-none">{selectedArea.fullTitle}</h3>
		<Markdown content={researchAreas.find((area) => area === selectedArea)?.description || ''} />
		{#if selectedArea.keywords.length}
			<h4 class="font-base mb-4 mt-10 text-base leading-none">Keywords</h4>
			<div class="flex flex-wrap gap-1 text-sm/[1] text-foreground/80">
				{#each selectedArea.keywords as keyword}
					<span class="rounded-full border px-2 py-1">{keyword}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
