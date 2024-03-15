<script lang="ts">
	import type { PageData } from './$types';
	import Markdown from '$components/markdown.svelte';

	export let data: PageData;
</script>

{#each data.sections as section}
	{#if section.title}
		<h1 id={section.slug}>{section.title}</h1>
	{/if}
	<Markdown source={section.body} />
{/each}
