<script lang="ts">
	import LogoFooter from '$components/assets/logo-footer.svelte';
	import { FooterSocials } from '$components/footer';
	import type { Contact, Socials } from '$lib/data';
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
		<div class="flex items-center justify-between py-10">
			<div class="flex flex-col gap-2">
				{#each items as item}
					<div class="flex items-center gap-3">
						<svelte:component this={item.icon} class="h-4 w-4" />
						<span class="text-sm font-light">{item.text}</span>
					</div>
				{/each}
			</div>
			<LogoFooter class="h-24" />
		</div>
		<div class="flex items-center justify-between border-t border-background/10 py-8">
			<span class="text-xs font-light text-card-foreground/50">
				© Copyright 2022 SBCB Laboratory. All Rights Reserved.
			</span>
			<FooterSocials {socials} />
		</div>
	</div>
</footer>
