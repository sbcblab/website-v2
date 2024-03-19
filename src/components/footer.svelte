<script lang="ts">
	import type { Socials } from '$lib/data';
	import SocialLinks from './social-links.svelte';

	export let socials: Socials;
</script>

<footer class="bg-card">
	<div class="container">
		<div
			class="mt-32 flex items-center justify-between border-t border-white/10 py-8 text-card-foreground/50"
		>
			<span class="text-xs">© Copyright 2022 SBCB Laboratory. All Rights Reserved.</span>
			<SocialLinks {socials} />
		</div>
	</div>
</footer>
