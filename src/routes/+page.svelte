<script lang="ts">
	import Markdown from '$components/markdown.svelte';

	export let data;

	const { sections, tools, datasets } = data;
</script>

<div class="space-y-16">
	<!-- Introduction -->
	<section id={sections.intro.slug}>
		<Markdown content={sections.intro.body} />
	</section>

	<!-- We're Hiring! -->
	<section id={sections.hiring.slug}>
		<h2>{sections.hiring.title}</h2>
		<Markdown content={sections.hiring.body} />
	</section>

	<!-- Tools and Datasets -->
	<section id={sections.toolsDatasets.slug}>
		<h2>{sections.toolsDatasets.title}</h2>
		<Markdown content={sections.toolsDatasets.body} />
		<div class="grid grid-cols-4 gap-2">
			{#each [...tools, ...datasets] as item}
				<div class="flex flex-col gap-1 border p-4 text-sm">
					<img src={item.imageUrl} alt={item.title} class="aspect-[5/4]" />
					<strong>{item.title}</strong>
					<span>{item.description}</span>
					<a href={item.url} class="mt-auto pt-3 font-medium">Read more</a>
				</div>
			{/each}
		</div>
	</section>
</div>
