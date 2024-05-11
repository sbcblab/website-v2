<script lang="ts">
	import { flyAndScale } from '$lib/transition';
	import { cn, copyToClipboard } from '$lib/utils';
	import { Popover } from 'bits-ui';
	import CopyIcon from '~icons/bi/copy';
	import CheckIcon from '~icons/lucide/check';
	import ChevronDownIcon from '~icons/radix-icons/chevron-down';

	export let item: {
		text: string;
		icon: any;
	};

	let popoverOpen: boolean = false;
	let copied: boolean = false;

	$: if (copied && !popoverOpen) copied = false;

	function handleClick(text: any) {
		copyToClipboard(text);
		copied = true;
	}
</script>

<Popover.Root open={popoverOpen} onOpenChange={(value) => (popoverOpen = value)}>
	<Popover.Trigger
		class={cn(
			popoverOpen ? 'text-card-foreground/75' : 'text-card-foreground/50',
			'flex items-center gap-1 transition-colors'
		)}
	>
		<svelte:component this={item.icon} class="size-4" />
		<ChevronDownIcon class="size-3" />
	</Popover.Trigger>
	<Popover.Content
		transition={flyAndScale}
		sideOffset={21}
		class="flex flex-col items-center justify-center gap-2 rounded-lg bg-card px-5 py-4 text-sm font-medium text-card-foreground/75 shadow-lg"
	>
		<button on:click={() => handleClick(item.text)} class="flex items-center gap-2 text-sm">
			<span class="text-card-foreground/75">{item.text}</span>
			<CopyIcon class="size-3 text-background/50" />
		</button>
		{#if copied}
			<span class="flex items-center gap-1 text-xs text-background/50">
				<CheckIcon class="size-3" />
				<span>Copied to clipboard</span>
			</span>
		{/if}
	</Popover.Content>
</Popover.Root>
