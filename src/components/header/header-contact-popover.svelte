<script lang="ts">
	import * as Popover from '$components/ui/popover';
	import { cn, copyToClipboard } from '$lib/utils';
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

	function handleClick(target: any) {
		copyToClipboard(target.textContent);
		copied = true;
	}
</script>

<Popover.Root open={popoverOpen} onOpenChange={(value) => (popoverOpen = value)}>
	<Popover.Trigger
		class={cn(
			popoverOpen ? 'text-card-foreground' : 'text-card-foreground/75',
			'flex items-center gap-1 transition-colors'
		)}
	>
		<svelte:component this={item.icon} class="h-4 w-4" />
		<ChevronDownIcon class="h-3 w-3" />
	</Popover.Trigger>
	<Popover.Content class="mt-1 flex w-fit flex-col items-center gap-2 border-background/10 bg-card">
		<button on:click={(e) => handleClick(e.currentTarget)} class="flex items-center gap-2 text-sm">
			<span class="text-card-foreground/75">{item.text}</span>
			<CopyIcon class="h-3 w-3 text-background/50" />
		</button>
		{#if copied}
			<span class="flex items-center gap-1 text-xs text-background/40">
				<CheckIcon class="h-3 w-3" />
				<span>Copied to clipboard</span>
			</span>
		{/if}
	</Popover.Content>
</Popover.Root>
