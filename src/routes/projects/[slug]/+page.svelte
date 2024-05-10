<script lang="ts">
	import { page } from '$app/stores';
	import Markdown from '$components/markdown.svelte';
	import { Heading1, Tabs } from '$components/section/general';
	import { ToolsDatasets } from '$components/section/unique';
	import type { ProjectPage } from '$lib/types';
	import Researchers from '$src/components/researchers.svelte';
	import { error } from '@sveltejs/kit';
	import { getContext } from 'svelte';

	const projectPages: ProjectPage[] = getContext('project-pages');
	const project = projectPages.find((p) => p.slug === $page.params.slug);

	if (!project) {
		error(404);
	}

	const sections: { label: string; id: string }[] = [
		...(project.researchers.length > 0 ? [{ label: 'Researchers', id: 'researchers' }] : []),
		...(project.students.length > 0 ? [{ label: 'Students', id: 'students' }] : []),
		...(project.scholarshipStudents.length > 0
			? [{ label: 'Scholarship Students', id: 'scholarship-students' }]
			: []),
		...(project.tools.length > 0 || project.datasets.length > 0
			? [{ label: 'Tools & Datasets', id: 'tools-datasets' }]
			: []),
		...(project.publications.length > 0 ? [{ label: 'Publications', id: 'publications' }] : []),
		...(project.partners.length > 0 ? [{ label: 'Partners', id: 'partners' }] : [])
	];
</script>

<Heading1 component={{ text: project.heading }} />

<div class="flex flex-col gap-16">
	<!-- Header -->
	<div class="container flex flex-col items-center gap-3 text-center">
		{#if project.subHeading}
			<span class="font-semibold text-primary">{project.subHeading}</span>
		{/if}
		<h2>{project.title}</h2>
		{#if project.lead}
			<span class="max-w-[38rem] text-foreground-paragraph md:text-lg">{project.lead}</span>
		{/if}
		{#if project.startDate || project.endDate}
			<div class="mt-4 text-sm font-light text-foreground-paragraph/70">
				{#if project.startDate}
					{@const startDate = new Date(project.startDate + 'T00:00')}
					<span>{startDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
				{/if}
				{#if project.startDate && project.endDate}
					<span> - </span>
				{/if}
				{#if project.endDate}
					{@const endDate = new Date(project.endDate + 'T00:00')}
					<span>{endDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
				{/if}
			</div>
		{/if}
	</div>

	<!-- Images -->
	{#if project.imageUrls.length > 0}
		<div class="container flex h-52 gap-3">
			{#each project.imageUrls as imageUrl}
				<div class="w-full">
					<img src={imageUrl} alt="" class="h-full w-full rounded-lg object-cover" />
				</div>
			{/each}
		</div>
	{/if}

	<!-- Services -->
	{#if project.services.length > 0}
		<Tabs component={{ items: project.services }} />
	{/if}

	<!-- Navigation -->
	<div class="container flex flex-wrap justify-center gap-4">
		{#each sections as { label, id }}
			<a
				href={`#${id}`}
				class="rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-70"
			>
				{label}
			</a>
		{/each}
	</div>

	<!-- Description -->
	{#if project.description}
		<Markdown class="container *:my-0" content={project.description} />
	{/if}

	<!-- Researchers -->
	{#if project.researchers.length > 0}
		<section id="researchers" class="space-y-8">
			<h3 class="container text-center md:text-start">Researchers</h3>
			<Researchers list={project.researchers} />
		</section>
	{/if}

	<!-- Students -->
	{#if project.students.length > 0}
		<section id="students" class="space-y-8">
			<h3 class="container text-center md:text-start">Graduate Students/Collaborators</h3>
			<Researchers list={project.students} />
		</section>
	{/if}

	<!-- Scholarship Students -->
	{#if project.scholarshipStudents.length > 0}
		<section id="scholarship-students" class="space-y-8">
			<h3 class="container text-center md:text-start">Scholarship Students</h3>
			<Researchers list={project.scholarshipStudents} />
		</section>
	{/if}

	<!-- Tools and Datasets -->
	{#if project.tools.length > 0 || project.datasets.length > 0}
		<section id="tools-datasets" class="space-y-8">
			<h3 class="container text-center md:text-start">Tools & Datasets</h3>
			<ToolsDatasets component={{ tools: project.tools, datasets: project.datasets }} />
		</section>
	{/if}
</div>
