<script lang="ts">
	import Section from '$components/section.svelte';

	export let data;

	const { sections } = data;
</script>

{#each sections as section}
	<Section {section} />
{/each}
