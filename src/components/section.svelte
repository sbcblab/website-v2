<script lang="ts">
	import type { Section } from '$lib/data';
	import { onMount } from 'svelte';
	import Markdown from './markdown.svelte';
	import SectionImage from './section-image.svelte';
	import ToolsDatasets from './tools-datasets.svelte';

	export let section: Section;
</script>

<section id={section.slug}>
	{#if section.heading}
		<h2>{section.heading}</h2>
	{/if}
	{#each section.body as component}
		{#if component.type === 'rich-text'}
			<Markdown content={component.content || ''} />
		{:else if ['image', 'image-row'].includes(component.type)}
			<div
				class={`my-6 flex`}
				style={`gap: ${component?.gap || 1}rem; justify-content: ${component?.justify || 'center'};`}
			>
				{#if component?.images}
					{#each component.images as image}
						<SectionImage component={image} />
					{/each}
				{:else}
					<SectionImage {component} />
				{/if}
			</div>
		{:else if component.type === 'tools-datasets'}
			<ToolsDatasets {component} />
		{/if}
	{/each}
</section>
