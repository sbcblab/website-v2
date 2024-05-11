<script lang="ts">
	import CopyToClipboard from '$components/copy-to-clipboard.svelte';
	import { HeaderContactPopover } from '$components/header';
	import type { Contact } from '$lib/types';
	import CopyIcon from '~icons/bi/copy';
	import MailIcon from '~icons/fa6-solid/envelope';
	import PhoneIcon from '~icons/fa6-solid/phone';

	export let contact: Contact;

	const items = [
		{ text: contact.email, icon: MailIcon },
		{ text: contact.phone, icon: PhoneIcon }
	];
</script>

<div class="hidden gap-10 md:flex">
	{#each items as item}
		<div class="flex items-center gap-3">
			<svelte:component this={item.icon} class="size-4 text-card-foreground/50" />
			<CopyToClipboard text={item.text} offset={22} class="flex items-center gap-3">
				<span class="text-sm/[1] font-medium text-card-foreground/50">{item.text}</span>
				<CopyIcon class="size-3 text-card-foreground/25" />
			</CopyToClipboard>
		</div>
	{/each}
</div>

<div class="flex items-center gap-4 md:hidden">
	{#each items as item}
		<HeaderContactPopover {item} />
	{/each}
</div>
