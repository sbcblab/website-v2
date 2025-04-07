<script lang="ts">
	import { page } from '$app/stores';
	import NotFound from '$components/not-found.svelte';
	import Section from '$components/section';
	import type { ToolDatasetPage } from '$lib/types';
	import Markdown from '$src/components/markdown.svelte';
	import { getContext } from 'svelte';

	const toolDatasetPages: ToolDatasetPage[] = getContext('tool-dataset-pages');
	$: toolDataset = toolDatasetPages.find((item) => item.slug === $page.params.slug);
</script>

{#if toolDataset}
	<div class="!mt-0 flex flex-col">
		<h1 class="my-0">{toolDataset.heading}</h1>

		<div class="container mt-16 flex flex-col items-center gap-3 text-center">
			{#if toolDataset.image}
				<img
					src={toolDataset.image.src}
					alt={toolDataset.image.alt}
					class="mb-3 size-32 rounded-2xl object-contain"
				/>
			{/if}
			<h2 class="my-0 text-5xl">{toolDataset.title}</h2>
			{#if toolDataset.lead}
				<Markdown
					content={toolDataset.lead}
					class="max-w-[38rem] text-lg text-foreground-paragraph"
				/>
			{/if}
			{#if toolDataset.updateDate}
				{@const updateDate = new Date(toolDataset.updateDate + 'T00:00')}
				<div class="mt-1 text-sm font-light text-foreground-paragraph/60">
					<span
						>Update: {updateDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span
					>
				</div>
			{/if}
		</div>

		<Section section={{ slug: toolDataset.slug, content: toolDataset.content }} />
	</div>
{:else}
	<NotFound />
{/if}
