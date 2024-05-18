<script lang="ts">
	import { page } from '$app/stores';
	import NotFound from '$components/not-found.svelte';
	import Section from '$components/section';
	import { Header } from '$components/section/general';
	import type { ProjectPage } from '$lib/types';
	import { getContext } from 'svelte';

	const projectPages: ProjectPage[] = getContext('project-pages');
	const project = projectPages.find((item) => item.slug === $page.params.slug);
</script>

{#if project}
	<div>
		<h1 class="mb-16">{project.heading}</h1>

		<div class="container flex flex-col gap-12">
			<Header component={project.header} />

			{#if project.startDate || project.endDate}
				<div class="-mt-4 text-center text-sm font-light text-foreground-paragraph/70">
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

			{#if project.images.length > 0}
				<div class="container flex h-52 gap-3">
					{#each project.images as image}
						<div class="w-full">
							<img src={image.url} alt="" class="h-full w-full rounded-lg object-cover" />
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<Section section={{ slug: project.slug, content: project.content }} />
	</div>
{:else}
	<NotFound />
{/if}
