<script lang="ts">
	import Section from '$components/section.svelte';

	export let data;

	const { sections } = data;
</script>

<div class="container space-y-16">
	{#each sections as section}
		<Section {section} />
	{/each}
</div>
