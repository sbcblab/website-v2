<script lang="ts">
	import { HeaderContactPopover } from '$components/header';
	import type { Contact } from '$lib/types';
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
		<div class="flex items-center gap-3 text-card-foreground/75">
			<svelte:component this={item.icon} class="h-4 w-4" />
			<span class="text-sm font-light">{item.text}</span>
		</div>
	{/each}
</div>

<div class="flex items-center gap-4 md:hidden">
	{#each items as item}
		<HeaderContactPopover {item} />
	{/each}
</div>
