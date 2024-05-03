<script>
	import '$src/app.css';
	import '@fontsource-variable/inter';

	import { Footer } from '$components/footer';
	import { Header } from '$components/header';
	import { setContext } from 'svelte';

	export let data;

	const { socials, contact, nav } = data;

	setContext('contact', contact);
</script>

<svelte:head>
	<title>SBCB Lab</title>
</svelte:head>

<div class="flex h-fit min-h-screen min-w-fit flex-col">
	<Header {socials} {contact} {nav} />
	<main class="relative mb-32 min-h-[30rem] grow">
		<slot />
	</main>
	<Footer {socials} {contact} />
</div>
