<script lang="ts">
	import * as Section from '$components/section';
	import type { Section as SectionType } from '$lib/types';

	export let section: SectionType;

	const components: { [key: string]: any } = {
		'heading-1': Section.General.Heading1,
		'heading-2': Section.General.Heading2,
		'heading-3': Section.General.Heading3,
		html: Section.General.Html,
		'image-row': Section.General.ImageRow,
		image: Section.General.Image,
		map: Section.General.Map,
		'rich-text': Section.General.RichText,
		about: Section.Unique.About,
		banner: Section.Unique.Banner,
		collaborators: Section.Unique.Collaborators,
		contact: Section.Unique.Contact,
		guests: Section.Unique.Guests,
		hiring: Section.Unique.Hiring,
		members: Section.Unique.Members,
		partnerships: Section.Unique.Partnerships,
		projects: Section.Unique.Projects,
		publications: Section.Unique.Publications,
		'research-areas': Section.Unique.ResearchAreas,
		slogan: Section.Unique.Slogan,
		'tools-datasets': Section.Unique.ToolsDatasets
	};
</script>

<section id={section.slug}>
	{#each section.content as component}
		<svelte:component this={components[component.type]} {component} />
	{/each}
</section>
