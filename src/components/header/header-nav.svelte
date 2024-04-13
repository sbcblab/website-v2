<script lang="ts">
	import { HeaderNavDropdown, HeaderNavItem } from '$components/header';
	import type { NavLink } from '$lib/data';
	import { cn } from '$lib/utils';

	export let nav: NavLink[];
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
