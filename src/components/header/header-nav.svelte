<script lang="ts">
	import { HeaderNavDropdown, HeaderNavItem } from '$components/header';
	import type { Global } from '$lib/types';
	import { cn } from '$lib/utils';

	export let nav: Global['nav'];
</script>

<nav class={cn($$props.class)}>
	{#each nav as link}
		{#if !link.subLinks}
			<HeaderNavItem {link} />
		{:else}
			<HeaderNavDropdown {link} />
		{/if}
	{/each}
</nav>
