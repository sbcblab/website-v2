<script lang="ts">
	import type { Section } from '$lib/data';
	import DOMPurify from 'isomorphic-dompurify';
	import Banner from './banner.svelte';
	import Collaborators from './collaborators.svelte';
	import Contact from './contact.svelte';
	import Guests from './guests.svelte';
	import Iframe from './iframe.svelte';
	import Markdown from './markdown.svelte';
	import Members from './members.svelte';
	import Partnerships from './partnerships.svelte';
	import Projects from './projects.svelte';
	import Publications from './publications.svelte';
	import ResearchAreas from './research-areas.svelte';
	import SectionImage from './section-image.svelte';
	import Slogan from './slogan.svelte';
	import ToolsDatasets from './tools-datasets.svelte';

	export let section: Section;
</script>

<section id={section.slug}>
	{#each section.content as component}
		{#if component.type === 'heading-1'}
			<div class="mb-12 bg-card text-center md:text-start">
				<h1 class="container py-6 text-card-foreground">{component.text}</h1>
			</div>
		{:else if component.type === 'heading-2'}
			<div class="container mb-8 mt-20 text-center md:text-start">
				<h2>{component.text}</h2>
			</div>
		{:else if component.type === 'heading-3'}
			<div class="container mb-4 mt-8">
				<h3>{component.text}</h3>
			</div>
		{:else if component.type === 'rich-text'}
			<div class="container">
				<Markdown content={component.content} />
			</div>
		{:else if component.type === 'banner'}
			<Banner {component} />
		{:else if component.type === 'slogan'}
			<Slogan text={component.text} />
		{:else}
			<div class="container mb-16">
				{#if ['image', 'image-row'].includes(component.type)}
					<div
						class="my-6 flex"
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
				{:else if component.type === 'html'}
					<!-- eslint-disable-next-line svelte/no-at-html-tags (sanitize() will prevent XSS attacks) -->
					{@html DOMPurify.sanitize(component.content)}
				{:else if component.type === 'iframe'}
					<Iframe {component} />
				{:else if component.type === 'tools-datasets'}
					<ToolsDatasets {component} />
				{:else if component.type === 'partnerships'}
					<Partnerships {component} />
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
				{:else if component.type === 'contact'}
					<Contact {component} />
				{/if}
			</div>
		{/if}
	{/each}
</section>
