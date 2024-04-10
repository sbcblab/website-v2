<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';

	let path: string | null = null;

	$: path = $page.url.pathname;

	const pages = [
		{ label: 'Home', href: '/' },
		{
			label: 'Research',
			href: '/research',
			subpages: [
				{ label: 'Tools', href: '/research#tools' },
				{ label: 'Datasets', href: '/research#datasets' },
				{ label: 'Publications', href: '/research#publications' },
				{ label: 'Laboratory Facilities', href: '/research#facilities' }
			]
		},
		{ label: 'Projects', href: '/projects' },
		{ label: 'Members', href: '/team' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<nav class={cn($$props.class)}>
	{#each pages as page}
		<a
			href={page.href}
			class={cn(
				path === page.href
					? 'bg-accent text-accent-foreground'
					: 'text-foreground/50 hover:text-foreground',
				'relative inline-flex items-center px-6 transition-colors'
			)}
		>
			{page.label}
			<div
				class={cn(
					!(path === page.href) && 'scale-y-0',
					'absolute left-0 right-0 top-0 h-[0.375rem] origin-top bg-primary-solid transition-transform'
				)}
			/>
		</a>
	{/each}
</nav>
