<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import Svg from '$components/svg.svelte';
	import type { Tabs } from '$lib/types';
	import { cn } from '$lib/utils';

	export let component: Tabs;

	let selectedIndex = 0;
</script>

<div class="container my-16 flex w-full flex-col md:flex-row">
	<div
		class="flex h-fit justify-center overflow-hidden rounded-t-[2rem] bg-zinc-500/5 px-3 pt-3 md:flex-col md:rounded-bl-[2rem] md:rounded-tr-none md:pb-3 md:pr-0"
	>
		{#each component.items as item, itemIndex}
			<button
				on:click={() => (selectedIndex = itemIndex)}
				class={cn(
					'flex items-center gap-4 text-nowrap rounded-t-full p-3.5 text-start text-sm font-medium md:rounded-bl-full md:rounded-tr-none md:pl-5 md:pr-12',
					itemIndex === selectedIndex
						? 'shadow-center rounded-tab z-10 bg-background text-primary'
						: 'text-zinc-400 transition-colors hover:bg-zinc-500/5'
				)}
			>
				<Svg src={item.iconUrl} overrideFill class="h-5 w-5 shrink-0" />
				<span class="hidden md:inline">{item.title}</span>
			</button>
		{/each}
	</div>

	<div
		class="shadow-center grow rounded-[2rem] rounded-t-none p-8 text-center md:w-min md:rounded-tr-[2rem] md:text-start"
	>
		{#if component.items[selectedIndex].fullTitle}
			<h4 class="mb-8">{component.items[selectedIndex].fullTitle}</h4>
		{/if}
		<Markdown
			content={component.items[selectedIndex].content}
			class="font-size-unset *:md:text-start"
		/>
		{#if component.items[selectedIndex].keywords}
			<div
				class="mt-12 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-xs font-light text-foreground-paragraph/60 md:justify-start"
			>
				{#each component.items[selectedIndex].keywords || [] as keyword}
					<span>{keyword}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
