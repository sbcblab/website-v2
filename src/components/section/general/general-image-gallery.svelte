<script lang="ts">
	import type { ImageGallery } from '$lib/types';
	import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import ChevronLeftIcon from '~icons/lucide/chevron-left';
	import XIcon from '~icons/lucide/x';
	import ZoomInIcon from '~icons/lucide/zoom-in';

	export let component: ImageGallery;

	const imageCount = component.images.length;

	let isOpen = false;
	let selectedIndex = 0;
	let modalElement: HTMLDivElement | undefined = undefined;

	$: if (modalElement) {
		modalElement?.addEventListener('click', handleClick);
		document.addEventListener('keydown', handleKeydown);
	}

	function open(index: number) {
		selectedIndex = index;
		isOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function close() {
		isOpen = false;
		document.body.style.overflow = 'auto';
	}

	function prev() {
		if (selectedIndex === 0) {
			selectedIndex = imageCount - 1;
		} else {
			selectedIndex--;
		}
	}

	function next() {
		if (selectedIndex + 1 === imageCount) {
			selectedIndex = 0;
		} else {
			selectedIndex++;
		}
	}

	function handleClick(event: any) {
		if (modalElement === event.target) {
			close();
		}
	}

	function handleKeydown(event: any) {
		switch (event.code) {
			case 'ArrowRight':
				next();
				break;
			case 'ArrowLeft':
				prev();
				break;
			case 'Escape':
				close();
				break;
		}
	}
</script>

{#if isOpen}
	<div
		transition:fade={{ duration: 300, easing: quintOut }}
		class="fixed inset-0 z-50 size-full bg-card/50 backdrop-blur-sm"
	>
		<button
			on:mousedown={close}
			class="group fixed right-2 top-2 z-50 rounded-full p-2 max-md:bg-card/50 md:right-4 md:top-4 md:p-4"
		>
			<XIcon class="size-8 rotate-180 text-white transition-colors group-hover:text-zinc-300" />
		</button>
		<button
			on:mousedown={prev}
			class="fixed left-2 top-1/2 z-50 -translate-y-1/2 rounded-full p-2 outline-none transition-colors max-md:bg-card/25 md:left-6 md:p-4 md:hover:bg-card/15"
		>
			<ChevronLeftIcon class="size-8 text-white" />
		</button>
		<button
			on:mousedown={next}
			class="fixed right-2 top-1/2 z-50 -translate-y-1/2 rounded-full p-2 outline-none transition-colors max-md:bg-card/25 md:right-6 md:p-4 md:hover:bg-card/15"
		>
			<ChevronLeftIcon class="size-8 rotate-180 text-white" />
		</button>
		<div class="absolute bottom-6 left-1/2 z-50 hidden -translate-x-1/2 gap-2 md:flex">
			{#each component.images as image, index}
				<button
					on:mousedown={() => (selectedIndex = index)}
					class="size-2 rounded-full transition-colors
					{index === selectedIndex ? 'bg-white' : 'bg-zinc-400'}"
				/>
			{/each}
		</div>
		{#key selectedIndex}
			<div
				bind:this={modalElement}
				class="fixed inset-0 flex items-center justify-center md:px-40 md:py-32"
			>
				<figure
					transition:fade={{ duration: 150, easing: quintOut }}
					class="flex h-full max-w-full flex-col items-center justify-center"
				>
					<img
						src={component.images[selectedIndex].imageUrl}
						alt={component.images[selectedIndex].caption}
						class="max-h-full rounded-none shadow-2xl md:rounded-md"
					/>
					<figcaption
						class="w-fit bg-card/50 px-8 py-3 text-sm font-medium text-card-foreground max-md:absolute max-md:bottom-2 max-md:rounded-md md:rounded-b-md"
					>
						{component.images[selectedIndex].caption}
					</figcaption>
				</figure>
			</div>
		{/key}
	</div>
{/if}

<div
	class="container my-10 flex flex-col gap-4 sm:grid"
	style={`grid-template-columns: repeat(${component.cols}, minmax(0, 1fr)); max-width: ${component.maxWidth}rem;`}
>
	{#each component.images as { imageUrl, caption }, index}
		<button on:click={() => open(index)} class="relative">
			<img src={imageUrl} alt={caption} class="h-full object-cover" />
			<div
				class="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-card/75 p-4 opacity-0 transition-opacity hover:opacity-100"
			>
				<span class="text-sm font-medium text-card-foreground">{caption}</span>
				<ZoomInIcon class="size-6 shrink-0 text-zinc-400" />
			</div>
		</button>
	{/each}
</div>
