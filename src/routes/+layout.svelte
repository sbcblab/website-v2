<script>
	import '$src/app.css';
	import '@fontsource-variable/inter';

	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { Footer } from '$components/footer';
	import { Header } from '$components/header';
	import { setContext } from 'svelte';

	export let data;

	const { socials, contact, nav } = data;

	setContext('contact', contact);

	afterNavigate(() => {
		const hash = $page.url.hash;
		if (hash) {
			document.getElementById(location.hash.slice(1))?.scrollIntoView({
				behavior: 'smooth'
			});
		}
	});
</script>

<svelte:head>
	<title>SBCB Lab</title>
</svelte:head>

<div class="flex h-fit min-h-screen min-w-fit flex-col">
	<Header {socials} {contact} {nav} />
	<main class="relative mb-20 min-h-[30rem] grow">
		<slot />
	</main>
	<Footer {socials} {contact} />
</div>
