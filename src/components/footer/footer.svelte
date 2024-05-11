<script lang="ts">
	import LogoFooter from '$components/assets/logo-footer.svelte';
	import CopyToClipboard from '$components/copy-to-clipboard.svelte';
	import { FooterSocials } from '$components/footer';
	import type { Contact, Socials } from '$lib/types';
	import CopyIcon from '~icons/bi/copy';
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
	<div class="container">
		<div class="flex flex-col items-center justify-between gap-10 py-10 md:flex-row">
			<div class="flex flex-col gap-4 md:gap-3">
				{#each items as item}
					<div class="flex items-center gap-3">
						<svelte:component this={item.icon} class="size-4 shrink-0 text-card-foreground/75" />
						<CopyToClipboard text={item.text} class="flex items-center gap-3">
							<span class="text-start text-xs font-light text-card-foreground/75 md:text-sm"
								>{item.text}</span
							>
							<CopyIcon class="size-3 shrink-0 text-card-foreground/25" />
						</CopyToClipboard>
					</div>
				{/each}
			</div>
			<LogoFooter class="h-24 text-card-foreground/75" />
		</div>
		<div
			class="flex flex-col-reverse items-center justify-between gap-10 border-t border-background/10 py-8 md:flex-row"
		>
			<span class="text-center text-xs font-light text-card-foreground/50 md:text-start">
				© Copyright 2022 SBCB Laboratory. All Rights Reserved.
			</span>
			<FooterSocials {socials} />
		</div>
	</div>
</footer>
