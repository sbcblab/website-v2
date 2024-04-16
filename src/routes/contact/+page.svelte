<script lang="ts">
	import Section from '$components/section';

	export let data;

	const sections = data.sections['contact'];
</script>

{#each sections as section}
	<Section {section} />
{/each}
