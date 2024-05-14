<script>
	import '$src/app.css';
	import '@fontsource-variable/inter';

	import BackToTop from '$components/back-to-top.svelte';
	import { Footer } from '$components/footer';
	import { Header } from '$components/header';
	import { setContext } from 'svelte';

	export let data;

	const { socials, contact, nav, publications, projectPages } = data;

	setContext('contact', contact);
	setContext('publications', publications);
	setContext('project-pages', projectPages);
</script>

<svelte:head>
	<title>SBCB Lab</title>
</svelte:head>

<div class="flex h-fit min-h-screen flex-col">
	<BackToTop />
	<Header {socials} {contact} {nav} />
	<main class="relative mb-32 min-h-[30rem] grow space-y-48">
		<slot />
	</main>
	<Footer {socials} {contact} />
</div>
