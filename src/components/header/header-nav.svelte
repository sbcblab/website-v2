<script lang="ts">
	import { page } from '$app/stores';
	import * as DropdownMenu from '$components/ui/dropdown-menu/index.js';
	import navData from '$lib/data/nav.json';
	import { cn } from '$lib/utils';
	import MynauiChevronDown from '~icons/mynaui/chevron-down';

	let pages: Array<any> = [];
	let path: string | null = null;

	$: pages = navData.pages;
	$: path = $page.url.pathname;
</script>

<nav
	class={cn($$props.class, 'flex items-center gap-11 font-medium leading-none text-foreground-dim')}
>
	{#each pages as page}
		{#if !page?.subpages}
			<a
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
						href={page.href}
						class={cn(
							'flex items-center gap-1 transition-all hover:text-foreground',
							path === page.href && 'text-foreground'
						)}
					>
						{page.label}
						<MynauiChevronDown class="h-4 w-4" />
					</a>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					{#each page.subpages as subpage}
						{#if subpage?.subpages}
							<DropdownMenu.Sub>
								<DropdownMenu.SubTrigger>{subpage.label}</DropdownMenu.SubTrigger>
								<DropdownMenu.SubContent>
									{#each subpage.subpages as subsubpage}
										<DropdownMenu.Item
											href={subsubpage.href}
											target={subsubpage.href.includes('http') ? '_blank' : '_self'}
											>{subsubpage.label}</DropdownMenu.Item
										>
									{/each}
								</DropdownMenu.SubContent>
							</DropdownMenu.Sub>
						{:else}
							<DropdownMenu.Item href={subpage.href}>{subpage.label}</DropdownMenu.Item>
						{/if}
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{/if}
	{/each}
</nav>
