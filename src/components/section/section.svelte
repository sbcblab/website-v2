<script lang="ts">
	import * as Section from '$components/section';
	import type { Section as SectionType } from '$lib/types';

	export let section: SectionType;

	const components: { [key: string]: any } = {
		'heading-1': Section.General.Heading1,
		'heading-2': Section.General.Heading2,
		'heading-3': Section.General.Heading3,
		'heading-4': Section.General.Heading4,
		'image-gallery': Section.General.ImageGallery,
		'image-grid': Section.General.ImageGrid,
		'image-row': Section.General.ImageRow,
		'publication-list': Section.General.PublicationList,
		'researcher-list': Section.General.ResearcherList,
		'rich-text': Section.General.RichText,
		'tools-datasets': Section.General.ToolsDatasets,
		button: Section.General.Button,
		datasets: Section.General.Datasets,
		form: Section.General.Form,
		header: Section.General.Header,
		html: Section.General.Html,
		iframe: Section.General.IFrame,
		image: Section.General.Image,
		meetings: Section.General.Meetings,
		menu: Section.General.Menu,
		missions: Section.General.Missions,
		partnerships: Section.General.Partnerships,
		schedule: Section.General.Schedule,
		tabs: Section.General.Tabs,
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
		{#if component}
			<svelte:component this={components[component.type]} {component} />
		{/if}
	{/each}
</section>
