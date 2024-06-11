<script lang="ts">
	import Svg from '$components/svg.svelte';
	import Button from '$components/ui/button/button.svelte';
	import type { Button as ButtonType } from '$lib/types';
	import { isExternalLink } from '$lib/utils';

	export let component: ButtonType;
</script>

<div class="container">
	<Button
		href={component.link}
		target={component.link && isExternalLink(component.link) ? '_blank' : ''}
		class="flex w-min items-center gap-2"
	>
		{#if component.iconUrl}
			<Svg src={component.iconUrl} class="h-4 w-4 shrink-0 opacity-70" />
		{/if}
		<span>{component.label}</span>
	</Button>
</div>
