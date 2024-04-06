<script lang="ts">
	import Logo from '$components/assets/logo.svelte';
	import { HeaderInfo, HeaderNav } from '$components/header';
	import type { Contact, Socials } from '$lib/data';

	export let contact: Contact;
	export let socials: Socials;
</script>

<header>
	<HeaderInfo {contact} {socials} />
	<div class="container flex min-w-fit items-center justify-between gap-24 py-8">
		<Logo class="h-24 shrink-0" />
		<HeaderNav />
	</div>
</header>
