<script lang="ts">
	import type { ResearchArea, ResearchAreas } from '$lib/types';
	import { cn } from '$lib/utils';
	import Markdown from '../../markdown.svelte';
	import Svg from '../../svg.svelte';

	export let component: ResearchAreas;

	const { researchAreas } = component;

	let selectedArea: ResearchArea = researchAreas[0];
</script>

<div class="container flex w-full flex-col md:flex-row">
	<div
		class="flex h-fit justify-center overflow-hidden rounded-t-[2rem] bg-gray-500/5 px-3 pt-3 md:flex-col md:rounded-bl-3xl md:rounded-tr-none md:pb-3 md:pr-0"
	>
		{#each researchAreas as area}
			<button
				on:click={() => (selectedArea = area)}
				class={cn(
					'flex items-center gap-4 text-nowrap rounded-t-full p-3.5 text-start text-sm font-medium md:rounded-bl-full md:rounded-tr-none md:pl-5 md:pr-12',
					area === selectedArea
						? 'shadow-center rounded-tab z-10 bg-background text-primary'
						: 'text-gray-400'
				)}
			>
				<Svg src={area.iconUrl} overrideFill class="h-5 w-5 shrink-0" />
				<span class="hidden md:inline">{area.title}</span>
			</button>
		{/each}
	</div>

	<div
		class="shadow-center grow rounded-3xl rounded-t-none p-8 text-center md:w-min md:rounded-tr-3xl md:text-start"
	>
		<h3 class="text-lg">{selectedArea.fullTitle}</h3>
		<Markdown
			content={researchAreas.find((area) => area === selectedArea)?.description || ''}
			class="*:text-s *:md:text-start *:md:text-base"
		/>
		{#if selectedArea.keywords.length > 0}
			<div
				class="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-xs font-light text-foreground-paragraph/60 md:justify-start"
			>
				{#each selectedArea.keywords as keyword}
					<span>{keyword}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
