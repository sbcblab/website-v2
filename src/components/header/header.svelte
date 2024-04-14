<script lang="ts">
	import Logo from '$components/assets/logo.svelte';
	import { HeaderInfo, HeaderNav, HeaderNavMobile } from '$components/header';
	import type { Contact, NavLink, Socials } from '$lib/data';
	import { writable } from 'svelte/store';

	export let contact: Contact;
	export let socials: Socials;
	export let nav: NavLink[];

	const mobileNavOpen = writable(false);
</script>

<header>
	<HeaderInfo {contact} {socials} />
	<div class="container relative flex h-[6.5rem] justify-between md:h-[8.5rem]">
		<a href="/" class="shrink-0 py-4 md:py-6">
			<Logo class="h-full shrink-0" />
		</a>
		<div class="flex">
			<HeaderNav {nav} class="hidden lg:flex" />
			<HeaderNavMobile {nav} open={mobileNavOpen} class="inline-flex lg:hidden" />
		</div>
	</div>
</header>
