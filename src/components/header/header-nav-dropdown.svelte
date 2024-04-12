<script lang="ts">
	import { HeaderNavItem } from '$components/header';
	import { cn, flyAndScale, sleep } from '$lib/utils';
	import { DropdownMenu } from 'bits-ui';
	import ChevronRightIcon from '~icons/radix-icons/chevron-right';

	export let page: any;

	let open: boolean = false;
	let pointerOnTrigger: boolean = false;
	let pointerOnContent: boolean = false;
	let pointerOnSub: boolean = false;

	$: if (pointerOnTrigger || pointerOnContent || pointerOnSub) {
		open = true;
	} else {
		sleep(500).then(() => (open = pointerOnTrigger || pointerOnContent || pointerOnSub));
	}

	const classes = {
		content: 'rounded-none px-0 py-2 shadow-lg bg-neutral-800 text-card-foreground border-none',
		item: 'cursor-pointer rounded-none px-4 py-2 data-[highlighted]:bg-background/10 data-[state=open]:bg-background/10 data-[highlighted]:text-card-foreground data-[state=open]:text-card-foreground flex items-center justify-between',
		label: 'text-nowrap pr-8 grow'
	};
</script>

<DropdownMenu.Root {open} disableFocusFirstItem>
	<DropdownMenu.Trigger class="focus:outline-none">
		<HeaderNavItem
			{page}
			on:pointerenter={() => (pointerOnTrigger = true)}
			on:pointerleave={() => (pointerOnTrigger = false)}
		/>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content
		class={cn('focus:outline-none focus:[&_*]:outline-none', classes.content)}
		transition={flyAndScale}
	>
		<div
			on:pointerenter={() => (pointerOnContent = true)}
			on:pointerleave={() => (pointerOnContent = false)}
		>
			{#each page.subpages as subpage}
				{#if !subpage.subpages}
					<DropdownMenu.Item class={classes.item}>
						<a href={subpage.href} class={classes.label}>{subpage.label}</a>
					</DropdownMenu.Item>
				{:else}
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger class={classes.item}>
							<a href={subpage.href} class={classes.label}>{subpage.label}</a>
							<ChevronRightIcon class="h-4 w-4" />
						</DropdownMenu.SubTrigger>
						<DropdownMenu.SubContent class={cn('-mt-2', classes.content)} transition={flyAndScale}>
							<div
								on:pointerenter={() => (pointerOnSub = true)}
								on:pointerleave={() => (pointerOnSub = false)}
							>
								{#each subpage.subpages as subsubpage}
									<DropdownMenu.Item href={subsubpage.href} class={classes.item}>
										<span class={classes.label}>{subsubpage.label}</span>
									</DropdownMenu.Item>
								{/each}
							</div>
						</DropdownMenu.SubContent>
					</DropdownMenu.Sub>
				{/if}
			{/each}
		</div>
	</DropdownMenu.Content>
</DropdownMenu.Root>
