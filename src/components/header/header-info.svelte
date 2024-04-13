<script lang="ts">
	import { HeaderContact, HeaderContactMobile, HeaderSocial } from '$components/header';
	import type { Contact, Socials } from '$lib/data';

	export let contact: Contact;
	export let socials: Socials;
</script>

<div class="bg-card text-sm text-background/50">
	<div class="container flex justify-between px-8 py-3">
		<HeaderContact {contact} class="hidden md:flex" />
		<HeaderContactMobile {contact} class="md:hidden" />
		<HeaderSocial {socials} />
	</div>
</div>
