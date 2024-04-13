<script>
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { Footer } from '$components/footer';
	import { Header } from '$components/header';

	import '$src/app.css';
	import '@fontsource-variable/inter';

	export let data;

	const { socials, contact, nav } = data;

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
	<main class="relative grow pb-8">
		<slot />
	</main>
	<Footer {socials} {contact} />
</div>
