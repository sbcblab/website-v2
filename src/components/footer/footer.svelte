<script lang="ts">
	import LogoFooter from '$components/assets/logo-footer.svelte';
	import { FooterSocials } from '$components/footer';
	import type { Contact, Socials } from '$lib/types';
	import MailIcon from '~icons/fa6-solid/envelope';
	import HouseIcon from '~icons/fa6-solid/house';
	import PinIcon from '~icons/fa6-solid/location-dot';
	import PhoneIcon from '~icons/fa6-solid/phone';

	export let socials: Socials;
	export let contact: Contact;

	const items = [
		{ text: contact.email, icon: MailIcon },
		{ text: contact.phone, icon: PhoneIcon },
		{ text: contact.location, icon: HouseIcon },
		{ text: contact.address, icon: PinIcon }
	];
</script>

<footer class="bg-card">
	<div class="container text-card-foreground/75">
		<div class="flex flex-col items-center justify-between gap-10 py-10 md:flex-row">
			<div class="flex flex-col gap-3 md:gap-2">
				{#each items as item}
					<div class="flex items-center gap-3">
						<svelte:component this={item.icon} class="h-4 w-4 shrink-0" />
						<span class="text-xs font-light lg:text-sm">{item.text}</span>
					</div>
				{/each}
			</div>
			<LogoFooter class="h-24" />
		</div>
		<div
			class="flex flex-col-reverse items-center justify-between gap-10 border-t border-background/10 py-8 md:flex-row"
		>
			<span class="text-xs font-light text-card-foreground/50">
				© Copyright 2022 SBCB Laboratory. All Rights Reserved.
			</span>
			<FooterSocials {socials} />
		</div>
	</div>
</footer>
