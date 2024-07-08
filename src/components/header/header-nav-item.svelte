<script lang="ts">
	import { page as pageStore } from '$app/stores';
	import type { NavLink } from '$lib/types';
	import { cn, isExternalLink } from '$lib/utils';

	export let link: NavLink;

	let path: string | null = null;

	$: path = $pageStore.url.pathname;
</script>

<a
	on:pointerenter
	on:pointerleave
	href={link.href}
	target={isExternalLink(link.href) ? '_blank' : ''}
	class={cn(
		path === link.href ? 'bg-gray-50 text-gray-950' : 'text-gray-500',
		'relative inline-flex h-full items-center px-6 transition-colors hover:text-gray-800'
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
