<script lang="ts">
	import { HeaderContactPopover } from '$components/header';
	import { flyAndScale } from '$lib/transition';
	import type { Contact } from '$lib/types';
	import { copyToClipboard } from '$src/lib/utils';
	import { Tooltip } from 'bits-ui';
	import CopyIcon from '~icons/bi/copy';
	import MailIcon from '~icons/fa6-solid/envelope';
	import PhoneIcon from '~icons/fa6-solid/phone';
	import CheckIcon from '~icons/lucide/check';

	export let contact: Contact;

	const items = [
		{ text: contact.email, icon: MailIcon },
		{ text: contact.phone, icon: PhoneIcon }
	];

	let copiedIndex: number | null = null;

	function handleClick(index: number) {
		copyToClipboard(items[index].text);
		copiedIndex = index;
	}
</script>

<div class="hidden gap-10 md:flex">
	{#each items as item, index}
		<div class="flex items-center gap-3">
			<svelte:component this={item.icon} class="size-4 text-card-foreground/50" />
			<Tooltip.Root
				openDelay={0}
				closeOnPointerDown={false}
				onOpenChange={() => (copiedIndex = null)}
			>
				<Tooltip.Trigger on:pointerdown={() => handleClick(index)} class="flex items-center gap-3">
					<span class="text-sm/[1] font-medium text-card-foreground/50">{item.text}</span>
					<CopyIcon class="size-3 text-card-foreground/25" />
				</Tooltip.Trigger>
				<Tooltip.Content
					transition={flyAndScale}
					transitionConfig={{ y: -8, duration: 150 }}
					sideOffset={22}
				>
					<div class="bg-card">
						<Tooltip.Arrow />
					</div>
					<div
						class="flex items-center justify-center rounded-full bg-card px-4 py-2 text-sm font-medium text-card-foreground/75 shadow-lg"
					>
						{#if copiedIndex === index}
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
		</div>
	{/each}
</div>

<div class="flex items-center gap-4 md:hidden">
	{#each items as item}
		<HeaderContactPopover {item} />
	{/each}
</div>
