<script lang="ts">
	import type { ResearchArea, ResearchAreas } from '$lib/types';
	import { cn } from '$lib/utils';
	import Markdown from '../../markdown.svelte';
	import Svg from '../../svg.svelte';

	export let component: ResearchAreas;

	const { researchAreas } = component;

	let selectedArea: ResearchArea = researchAreas[0];
</script>

<div class="container flex flex-col md:flex-row">
	<div class="relative z-10 flex h-min flex-col border-y">
		<div class="absolute bottom-0 left-0 top-0 z-10 w-1 bg-[#6E6E6E]" />
		{#each researchAreas as area}
			<button
				on:click={() => (selectedArea = area)}
				class={cn(
					selectedArea === area ? 'bg-background text-primary' : 'bg-gray-100 text-foreground/80',
					'relative flex items-center gap-3 border-r py-2 pl-5 pr-10 md:py-3 md:pl-5 md:pr-16 [&:not(:last-child)]:border-b'
				)}
			>
				{#if selectedArea === area}
					<div class="absolute -right-1 bottom-0 top-0 hidden w-2 bg-background md:block" />
					<div class="absolute bottom-0 left-0 top-0 z-20 w-1 bg-primary" />
				{/if}
				{#if area.iconUrl}
					<Svg
						src={area.iconUrl}
						overrideFill
						class={cn(
							selectedArea === area ? 'text-primary' : 'text-foreground/80',
							'h-4 w-4 md:h-5 md:w-5'
						)}
					/>
				{/if}
				<span class="text-nowrap text-sm font-medium md:text-base">{area.title}</span>
			</button>
		{/each}
	</div>
	<div
		class="-translate-x-[1px] border px-5 py-8 text-center md:px-8 md:text-start [&>p]:text-base"
	>
		<h3 class="mb-4 text-lg">{selectedArea.fullTitle}</h3>
		<Markdown
			content={researchAreas.find((area) => area === selectedArea)?.description || ''}
			class="*:text-sm *:md:text-start *:md:text-base"
		/>
		{#if selectedArea.keywords.length !== 0}
			<h4 class="font-base mb-4 mt-10 text-base leading-none">Keywords</h4>
			<div
				class="flex flex-wrap justify-center gap-1 text-sm/[1] text-foreground/80 md:justify-start"
			>
				{#each selectedArea.keywords as keyword}
					<span class="rounded-full border px-2 py-1">{keyword}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
