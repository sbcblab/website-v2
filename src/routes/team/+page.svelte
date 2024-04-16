<script lang="ts">
	import Section from '$components/section';

	export let data;

	const sections = data.sections['team'];
</script>

{#each sections as section}
	<Section {section} />
{/each}
