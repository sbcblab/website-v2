<script lang="ts">
	import { page } from '$app/stores';
	import { Heading1 } from '$components/section/general';
	import type { ProjectPage } from '$lib/types';
	import { error } from '@sveltejs/kit';
	import { getContext } from 'svelte';

	const projectPages: ProjectPage[] = getContext('project-pages');
	const project = projectPages.find((p) => p.slug === $page.params.slug);

	if (!project) {
		error(404);
	}
</script>

<Heading1 component={{ text: 'DSBA' }} />

<div class="container flex flex-col gap-12">
	<!-- Header -->
	<div class="flex flex-col items-center gap-3 text-center">
		<span class="font-semibold text-primary">{project.heading}</span>
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
	{#if project.imageUrls}
		<div class="flex h-52 gap-3">
			{#each project.imageUrls as imageUrl}
				<div class="w-full">
					<img src={imageUrl} alt="" class="h-full w-full rounded-lg object-cover" />
				</div>
			{/each}
		</div>
	{/if}

	<!-- Services -->
</div>
