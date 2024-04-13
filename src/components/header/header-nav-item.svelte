<script lang="ts">
	import { page as pageStore } from '$app/stores';
	import type { NavLink } from '$lib/data';
	import { cn } from '$lib/utils';

	export let link: NavLink;

	let path: string | null = null;

	$: path = $pageStore.url.pathname;
</script>

<a
	on:pointerenter
	on:pointerleave
	href={link.href}
	class={cn(
		path === link.href
			? 'bg-accent text-accent-foreground'
			: 'text-foreground/50 hover:text-foreground',
		'relative inline-flex h-full items-center px-6 transition-colors'
	)}
>
	{link.label}
	<div
		class={cn(
			!(path === link.href) && 'scale-y-0',
			'absolute left-0 right-0 top-0 h-[0.375rem] origin-top bg-primary transition-transform'
		)}
	/>
</a>
