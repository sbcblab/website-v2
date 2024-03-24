<script>
	import '@fontsource/poppins/100.css';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/900.css';

	import '$src/app.css';
	import Footer from '$src/components/footer.svelte';
	import { Header } from '$src/components/header';

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
