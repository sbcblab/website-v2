<script lang="ts">
	import type { Contact, ContactSection } from '$lib/data';
	import { getContext } from 'svelte';
	import MailIcon from '~icons/fa6-solid/envelope';
	import HouseIcon from '~icons/fa6-solid/house';
	import PinIcon from '~icons/fa6-solid/location-dot';
	import PhoneIcon from '~icons/fa6-solid/phone';

	export let component: ContactSection;

	const contact: Contact = getContext('contact');

	const items = [
		{ show: component.showEmail, icon: MailIcon, text: contact.email },
		{ show: component.showPhone, icon: PhoneIcon, text: contact.phone },
		{ show: component.showLocation, icon: HouseIcon, text: contact.location },
		{ show: component.showAddress, icon: PinIcon, text: contact.address }
	];
</script>

<div class="container flex flex-col gap-8">
	<span class="text-2xl font-medium">{component.subheading}</span>
	<div class="flex flex-col gap-3 text-foreground-paragraph md:gap-2">
		{#each items as { show, icon, text }}
			{#if show}
				<div class="flex items-center gap-3">
					<svelte:component this={icon} class="h-4 w-4 shrink-0 md:h-5 md:w-4" />
					<span class="text-sm font-light md:text-base">{text}</span>
				</div>
			{/if}
		{/each}
	</div>
</div>
