<script lang="ts">
	import type { Socials } from '$lib/data';
	import type { Contact } from 'lucide-svelte';
	import RiHome2Fill from '~icons/ri/home-2-fill';
	import RiMailFill from '~icons/ri/mail-fill';
	import RiMapPinFill from '~icons/ri/map-pin-fill';
	import RiPhoneFill from '~icons/ri/phone-fill';
	import LogoFooter from './assets/logo-footer.svelte';
	import SocialLinks from './social-links.svelte';

	export let socials: Socials;
	export let contact: Contact;
</script>

<footer class="bg-card">
	<div class="container">
		<div class="flex items-center justify-between py-12 text-card-foreground/70">
			<div class="flex flex-col gap-2 text-sm">
				<div class="flex items-center gap-2">
					<RiMailFill class="h-4 w-4" />
					<span>{contact.email}</span>
				</div>
				<div class="flex items-center gap-2">
					<RiPhoneFill class="h-4 w-4" />
					<span>{contact.phone}</span>
				</div>
				<div class="flex items-center gap-2">
					<RiHome2Fill class="h-4 w-4" />
					<span>{contact.location}</span>
				</div>
				<div class="flex items-center gap-2">
					<RiMapPinFill class="h-4 w-4" />
					<span>{contact.address}</span>
				</div>
			</div>
			<LogoFooter class="h-24" />
		</div>
		<div
			class="flex items-center justify-between border-t border-white/10 py-8 text-card-foreground/50"
		>
			<span class="text-xs">© Copyright 2022 SBCB Laboratory. All Rights Reserved.</span>
			<SocialLinks {socials} />
		</div>
	</div>
</footer>
