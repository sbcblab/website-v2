<script lang="ts">
	import type { Section } from '$lib/data';
	import Collaborators from './collaborators.svelte';
	import Guests from './guests.svelte';
	import Markdown from './markdown.svelte';
	import Members from './members.svelte';
	import Projects from './projects.svelte';
	import Publications from './publications.svelte';
	import ResearchAreas from './research-areas.svelte';
	import SectionImage from './section-image.svelte';
	import ToolsDatasets from './tools-datasets.svelte';

	export let section: Section;
</script>

<section id={section.slug} class="my-4">
	{#if section.heading}
		<h2>{section.heading}</h2>
	{/if}
	{#each section.content as component}
		{#if component.type === 'rich-text'}
			<Markdown content={component.content || ''} />
		{:else if component.type === 'html'}
			{@html component.content}
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
		{:else if component.type === 'publications'}
			<Publications {component} />
		{:else if component.type === 'projects'}
			<Projects {component} />
		{:else if component.type === 'members'}
			<Members {component} />
		{:else if component.type === 'guests'}
			<Guests {component} />
		{:else if component.type === 'collaborators'}
			<Collaborators {component} />
		{:else if component.type === 'research-areas'}
			<ResearchAreas {component} />
		{/if}
	{/each}
</section>
