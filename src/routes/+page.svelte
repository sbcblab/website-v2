<script lang="ts">
	import NotFound from '$components/not-found.svelte';
	import Section from '$components/section';

	export let data;

	const sections = data.sections['/'];
</script>

{#if Array.isArray(sections)}
	{#each sections as section}
		<Section {section} />
	{/each}
{:else}
	<NotFound />
{/if}
