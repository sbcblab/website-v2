<script lang="ts">
	import { HeaderContact, HeaderSocials } from '$components/header';
	import type { Contact, Socials } from '$lib/types';

	export let contact: Contact;
	export let socials: Socials;
</script>

<div class="bg-card">
	<div class="container flex justify-between py-3 md:py-4">
		<HeaderContact {contact} />
		<HeaderSocials {socials} />
	</div>
</div>
