<script>
	import '$src/app.css';
	import Footer from '$src/components/footer.svelte';
	import { Header } from '$src/components/header';

	import '@fontsource/roboto/latin-100.css';
	import '@fontsource/roboto/latin-300.css';
	import '@fontsource/roboto/latin-400.css';
	import '@fontsource/roboto/latin-500.css';
	import '@fontsource/roboto/latin-700.css';
	import '@fontsource/roboto/latin-900.css';

	export let data;

	const { socials, contact } = data;
</script>

<svelte:head>
	<title>SBCB Lab</title>
</svelte:head>

<div class="flex h-fit min-h-screen min-w-fit flex-col">
	<Header />
	<main class="relative grow pb-20">
		<slot />
	</main>
	<Footer {socials} {contact} />
</div>
