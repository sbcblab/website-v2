<script lang="ts">
	import { page } from '$app/stores';
	import * as DropdownMenu from '$components/ui/dropdown-menu/index.js';
	import { cn } from '$lib/utils';
	import MynauiChevronDown from '~icons/mynaui/chevron-down';

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

<nav class={cn($$props.class, 'flex items-center gap-11 text-sm leading-none text-foreground-dim')}>
	{#each pages as page}
		{#if !page?.subpages}
			<a
				target="_blank"
				href={page.href}
				class={cn(
					'transition-all hover:text-foreground focus:text-foreground active:text-foreground',
					path === page.href && 'text-foreground'
				)}
			>
				{page.label}
			</a>
		{:else}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<a
						target="_blank"
						href={page.href}
						class={cn(
							'flex items-center gap-1 transition-all hover:text-foreground focus:text-foreground active:text-foreground',
							path === page.href && 'text-foreground'
						)}
					>
						{page.label}
						<MynauiChevronDown class="h-4 w-4" />
					</a>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					{#each page.subpages as subpage}
						<DropdownMenu.Item href={subpage.href}>{subpage.label}</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{/if}
	{/each}
</nav>
