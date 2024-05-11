<script lang="ts">
	import { flyAndScale } from '$lib/transition';
	import { copyToClipboard } from '$lib/utils';
	import { Tooltip } from 'bits-ui';
	import CheckIcon from '~icons/lucide/check';

	export let text: string;
	export let offset: number | undefined = 8;

	let copied: boolean = false;

	function handleClick() {
		copyToClipboard(text);
		copied = true;
	}
</script>

<Tooltip.Root openDelay={0} closeOnPointerDown={false} onOpenChange={() => (copied = false)}>
	<Tooltip.Trigger on:pointerdown={handleClick} class={$$restProps.class}>
		<slot />
	</Tooltip.Trigger>
	<Tooltip.Content transition={flyAndScale} sideOffset={offset}>
		<div class="border-r bg-card">
			<Tooltip.Arrow class="border-l border-t border-card-foreground/10" />
		</div>
		<div
			class="flex items-center justify-center rounded-full border border-card-foreground/10 bg-card px-4 py-2 text-sm font-medium text-card-foreground/75 shadow-lg"
		>
			{#if copied}
				<span class="flex items-center gap-1.5">
					<CheckIcon class="size-4 text-card-foreground/50" />
					<span>Copied</span>
				</span>
			{:else}
				<span>Copy to clipboard</span>
			{/if}
		</div>
	</Tooltip.Content>
</Tooltip.Root>
