<script lang="ts">
	import { Button } from '$components/ui/button';
	import type { Menu } from '$lib/types';
	import { isExternalLink } from '$src/lib/utils';

	export let component: Menu;
</script>

<div class="container my-16 flex flex-wrap justify-center gap-4">
	{#each component.items as { label, link }}
		<Button href={link} target={isExternalLink(link) ? '_blank' : ''}>
			{label}
		</Button>
	{/each}
</div>
