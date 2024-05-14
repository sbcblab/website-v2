<script lang="ts">
	import { cn } from '$src/lib/utils';
	import { onMount } from 'svelte';
	import ArrowUpIcon from '~icons/solar/double-alt-arrow-up-line-duotone';

	let visible: boolean = false;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function updateVisibility() {
		visible = window.scrollY > 250;
	}

	onMount(() => {
		updateVisibility();
		window.addEventListener('scroll', () => {
			updateVisibility();
		});
	});
</script>

<button
	class={cn(
		'fixed bottom-32 right-4 z-50 rounded-full bg-card/20 p-2 text-card-foreground backdrop-blur-sm transition-all md:right-8 md:p-3 md:hover:bg-card/60',
		!visible && 'pointer-events-none opacity-0'
	)}
	on:click={scrollToTop}
>
	<ArrowUpIcon class="h-7 w-7" />
</button>
