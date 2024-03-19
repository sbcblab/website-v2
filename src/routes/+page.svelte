<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import Button from '$components/ui/button/button.svelte';

	export let data;

	const { sections, tools, datasets } = data;
</script>

<div class="space-y-16">
	<div class="align-center mb-24 mt-12 flex flex-col justify-center gap-8 text-center">
		<h1>Bioinformatics and Data Science in Biotechnology</h1>
		<a href="/contact" class="mx-auto">
			<Button size="lg">CONTACT US</Button>
		</a>
	</div>

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
					<a href={item.url} class="mt-auto w-fit pt-3 font-medium">Read more</a>
				</div>
			{/each}
		</div>
	</section>

	<!-- International Cooperation -->
	<section id={sections.internationalCooperation.slug}>
		<h2>{sections.internationalCooperation.title}</h2>
		<Markdown content={sections.internationalCooperation.body} />
	</section>

	<!-- Parterships -->
	<section id={sections.partnerships.slug}>
		<h2>{sections.partnerships.title}</h2>
		<Markdown content={sections.partnerships.body} />
	</section>
</div>
