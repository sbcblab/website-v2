<script lang="ts">
	import Section from '$components/section.svelte';

	export let data;

	const { sections } = data;
</script>

<div class="mb-12 h-[26rem] bg-gray-200" />

{#each sections as section}
	<Section {section} />
{/each}
