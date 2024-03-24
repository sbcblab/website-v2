<script lang="ts">
	import Section from '$components/section.svelte';

	export let data;

	const { sections } = data;
</script>

<div class="space-y-12">
	<div class="h-[26rem] bg-gray-200" />

	<div class="container space-y-16">
		{#each sections as section}
			<Section {section} />
		{/each}
	</div>
</div>
