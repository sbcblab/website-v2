<script>
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '$src/app.css';
	import Footer from '$src/components/footer.svelte';
	import { Header } from '$src/components/header';

	import '@fontsource-variable/inter';

	export let data;

	const { socials, contact } = data;

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
	<Header {socials} {contact} />
	<main class="relative grow pb-8">
		<slot />
	</main>
	<Footer {socials} {contact} />
</div>
