<script lang="ts">
	import type { ContactSection } from '$lib/data';
	import MailIcon from '~icons/fa6-solid/envelope';
	import HouseIcon from '~icons/fa6-solid/house';
	import PinIcon from '~icons/fa6-solid/location-dot';
	import PhoneIcon from '~icons/fa6-solid/phone';

	export let component: {
		contact: ContactSection;
	};

	const { contact } = component;

	const items = [
		{ show: contact.showEmail, icon: MailIcon, text: contact.info.email },
		{ show: contact.showPhone, icon: PhoneIcon, text: contact.info.phone },
		{ show: contact.showLocation, icon: HouseIcon, text: contact.info.location },
		{ show: contact.showAddress, icon: PinIcon, text: contact.info.address }
	];
</script>

<div class="flex flex-col gap-8">
	<span class="text-2xl font-medium">{contact.subheading}</span>
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
