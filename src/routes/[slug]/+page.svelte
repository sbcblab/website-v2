<script lang="ts">
	import { page } from '$app/stores';
	import Section from '$components/section';
	import NotFound from '../+error.svelte';

	export let data;

	$: sections = data.sections[$page.url.pathname];
</script>

{#if sections !== undefined}
	{#each sections as section}
		<Section {section} />
	{/each}
{:else}
	<NotFound />
{/if}
