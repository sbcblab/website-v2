<script>
	import '$src/app.css';
	import '@fontsource-variable/inter';

	import BackToTop from '$components/back-to-top.svelte';
	import { Footer } from '$components/footer';
	import { Header } from '$components/header';
	import { setContext } from 'svelte';

	export let data;

	const { socials, contact, nav, publications, projectPages, toolDatasetPages } = data;

	setContext('contact', contact);
	setContext('publications', publications);
	setContext('project-pages', projectPages);
	setContext('tool-dataset-pages', toolDatasetPages);
</script>

<svelte:head>
	<title>SBCB Lab</title>
</svelte:head>

<div class="flex h-fit min-h-screen flex-col">
	<BackToTop />
	<Header {socials} {contact} {nav} />
	<main class="mb-56 flex grow flex-col space-y-56">
		<slot />
	</main>
	<Footer {socials} {contact} />
</div>
