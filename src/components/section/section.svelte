<script lang="ts">
	import * as Section from '$components/section';
	import type { Section as SectionType } from '$lib/types';

	export let section: SectionType;

	const components: { [key: string]: any } = {
		header: Section.General.Header,
		'heading-1': Section.General.Heading1,
		'heading-2': Section.General.Heading2,
		'heading-3': Section.General.Heading3,
		html: Section.General.Html,
		iframe: Section.General.IFrame,
		'image-row': Section.General.ImageRow,
		'image-grid': Section.General.ImageGrid,
		image: Section.General.Image,
		menu: Section.General.Menu,
		partnerships: Section.General.Partnerships,
		'publication-list': Section.General.PublicationList,
		'researcher-list': Section.General.ResearcherList,
		'rich-text': Section.General.RichText,
		tabs: Section.General.Tabs,
		'tools-datasets': Section.General.ToolsDatasets,
		about: Section.Unique.About,
		banner: Section.Unique.Banner,
		collaborators: Section.Unique.Collaborators,
		contact: Section.Unique.Contact,
		guests: Section.Unique.Guests,
		hiring: Section.Unique.Hiring,
		members: Section.Unique.Members,
		projects: Section.Unique.Projects,
		publications: Section.Unique.Publications,
		slogan: Section.Unique.Slogan
	};
</script>

<section id={section.slug}>
	{#each section.content as component}
		<svelte:component this={components[component.type]} {component} />
	{/each}
</section>
