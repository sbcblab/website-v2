<script lang="ts">
	import Logo from '$components/assets/logo.svelte';
	import { HeaderInfo, HeaderNav } from '$components/header';
	import type { Contact, Socials } from '$lib/data';

	export let contact: Contact;
	export let socials: Socials;
</script>

<header>
	<HeaderInfo {contact} {socials} />
	<div class="container flex h-[8.5rem] justify-between gap-16">
		<a href="/" class="py-6">
			<Logo class="h-full" />
		</a>
		<HeaderNav class="hidden md:flex" />
	</div>
</header>
