<script lang="ts">
	import SocialLinks from '$components/social-links.svelte';
	import type { Contact, Socials } from '$lib/data';
	import { HeaderContact, HeaderContactMobile } from './';

	export let contact: Contact;
	export let socials: Socials;
</script>

<div class="bg-card text-sm text-background/50">
	<div class="container flex justify-between px-8">
		<HeaderContact {contact} class="hidden md:flex" />
		<HeaderContactMobile {contact} class="md:hidden" />
		<SocialLinks {socials} class="py-4" />
	</div>
</div>
