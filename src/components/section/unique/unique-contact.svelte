<script lang="ts">
	import type { Contact, ContactUs } from '$lib/types';
	import CopyToClipboard from '$src/components/copy-to-clipboard.svelte';
	import { getContext } from 'svelte';
	import CopyIcon from '~icons/bi/copy';
	import MailIcon from '~icons/fa6-solid/envelope';
	import HouseIcon from '~icons/fa6-solid/house';
	import PinIcon from '~icons/fa6-solid/location-dot';
	import PhoneIcon from '~icons/fa6-solid/phone';

	export let component: ContactUs;

	const contact: Contact = getContext('contact');

	const items = [
		{ show: component.showEmail, icon: MailIcon, text: contact.email },
		{ show: component.showPhone, icon: PhoneIcon, text: contact.phone },
		{ show: component.showLocation, icon: HouseIcon, text: contact.location },
		{ show: component.showAddress, icon: PinIcon, text: contact.address }
	];
</script>

<div class="container flex flex-col gap-12">
	<span class="text-center text-2xl font-medium md:text-start">{component.subheading}</span>
	<div class="flex flex-col gap-3">
		{#each items as { show, icon, text }}
			{#if show}
				<div class="flex items-center gap-3">
					<svelte:component this={icon} class="size-5 shrink-0" />
					<CopyToClipboard {text} class="flex items-center gap-3">
						<span class="text-start text-sm text-foreground-paragraph md:text-base">{text}</span>
						<CopyIcon class="size-3 shrink-0 text-foreground-paragraph/50" />
					</CopyToClipboard>
				</div>
			{/if}
		{/each}
	</div>
</div>
