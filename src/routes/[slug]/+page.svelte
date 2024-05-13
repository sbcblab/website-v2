<script lang="ts">
	import { page } from '$app/stores';
	import Section from '$components/section';
	import { error } from '@sveltejs/kit';

	export let data;

	if (!Object.keys(data.sections).includes($page.url.pathname)) {
		error(404);
	}

	$: sections = data.sections[$page.url.pathname];
</script>

{#each sections as section}
	<Section {section} />
{/each}
