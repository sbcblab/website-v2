<script lang="ts">
	import LogoIcon from '$components/assets/logo-icon.svelte';
	import { ScrollArea } from '$components/ui/scroll-area';
	import * as Sheet from '$components/ui/sheet';
	import type { NavLink } from '$lib/data';
	import { cn } from '$lib/utils';
	import { type Writable } from 'svelte/store';
	import TablerMenuDeep from '~icons/tabler/menu-deep';

	export let open: Writable<boolean>;
	export let nav: NavLink[];

	const closeSheet = () => open.set(false);
</script>

<Sheet.Root open={$open} onOpenChange={(value) => open.set(value)}>
	<Sheet.Trigger class={cn('inline-flex h-fit translate-x-3 self-center p-3', $$restProps.class)}>
		<TablerMenuDeep class="h-8 w-8" />
	</Sheet.Trigger>
	<Sheet.Content class="flex flex-col gap-5">
		<Sheet.Header class="h-10">
			<LogoIcon class="mr-auto text-primary-solid" />
		</Sheet.Header>
		<ScrollArea class="bottom-fade grow">
			<div class="flex flex-col gap-3 pb-12">
				{#each nav as link}
					<a href={link.href} class="font-semibold" on:click={closeSheet}>{link.label}</a>
					{#if link.subLinks}
						{#each link.subLinks as subLink}
							<a href={subLink.href} class="ml-4" on:click={closeSheet}>{subLink.label}</a>
							{#if subLink.subLinks}
								{#each subLink.subLinks as subSubLink}
									<a
										href={subSubLink.href}
										class="ml-8 text-sm text-muted-foreground"
										on:click={closeSheet}
									>
										{subSubLink.label}
									</a>
								{/each}
							{/if}
						{/each}
					{/if}
				{/each}
			</div>
		</ScrollArea>
	</Sheet.Content>
</Sheet.Root>

<style>
	a:hover {
		opacity: 0.7;
	}
</style>
