<script lang="ts">
	import Section from '$components/section';
	import NotFound from './+error.svelte';

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
