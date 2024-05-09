<script lang="ts">
	import { page } from '$app/stores';
	import Markdown from '$components/markdown.svelte';
	import { Heading1, Tabs } from '$components/section/general';
	import type { ProjectPage } from '$lib/types';
	import { error } from '@sveltejs/kit';
	import { getContext, onMount } from 'svelte';

	const projectPages: ProjectPage[] = getContext('project-pages');
	const project = projectPages.find((p) => p.slug === $page.params.slug);

	if (!project) {
		error(404);
	}

	const sections = [
		project.researchers.length > 0 && 'Researchers',
		project.students.length > 0 && 'Students',
		project.scholarshipStudents.length > 0 && 'Scholarship Students',
		(project.tools.length > 0 || project.datasets.length > 0) && 'Tools and Datasets',
		project.publications.length > 0 && 'Publications',
		project.partners.length > 0 && 'Partners'
	].filter(Boolean);

	onMount(() => console.log(project));
</script>

<Heading1 component={{ text: project.heading }} />

<div class="flex flex-col gap-12">
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
	<div class="container my-8 flex flex-wrap justify-center gap-4">
		{#each sections as section}
			<button
				class="rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-70"
				>{section}</button
			>
		{/each}
	</div>

	<!-- Description -->
	{#if project.description}
		<Markdown class="container -my-8" content={project.description} />
	{/if}
</div>
