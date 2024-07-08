<script lang="ts">
	import type { Banner } from '$lib/types';
	import Markdown from '$src/components/markdown.svelte';
	import Button from '$src/components/ui/button/button.svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import ChevronLeftIcon from '~icons/radix-icons/chevron-left';
	import ChevronRightIcon from '~icons/radix-icons/chevron-right';

	export let component: Banner;

	let emblaApi: EmblaCarouselType;

	const options = { loop: true };
	const autoplay = Autoplay({ delay: 5000 });
	const plugins = [autoplay];

	const scroll = (target: 'prev' | 'next') => {
		target === 'prev' ? emblaApi.scrollPrev() : emblaApi.scrollNext();
		autoplay.reset();
	};
</script>

<div class="relative">
	<div
		use:emblaCarouselSvelte={{ options, plugins }}
		on:emblaInit={(e) => (emblaApi = e.detail)}
		class="overflow-hidden"
	>
		<div class="flex">
			{#each component.slides as slide}
				<div
					class="w-0 shrink-0 grow-0 basis-full bg-cover bg-center shadow-inner"
					style={`background-image: url(${slide.backgroundUrl || component.defaultBackgroundUrl})`}
				>
					<div
						class="container flex h-full flex-col items-center justify-center gap-12 px-8 py-16 md:flex-row-reverse md:justify-between md:px-24"
					>
						{#if slide.imageUrl}
							<div class="flex justify-center px-6 md:px-0">
								<img
									src={slide.imageUrl}
									alt={slide.heading}
									class="h-fit max-h-56 rounded-md md:max-h-none md:w-full md:max-w-[28rem]"
								/>
							</div>
						{/if}
						<div
							class="flex max-w-96 flex-col items-center gap-4 text-white md:w-full md:items-start lg:max-w-[30rem] lg:gap-6"
						>
							{#if slide.heading}
								<h3
									class="m-0 p-0 text-center text-2xl/[1] md:text-start lg:text-3xl/[1]"
									style={slide.headingColor && `color: ${slide.headingColor}`}
								>
									{slide.heading}
								</h3>
							{/if}
							{#if slide.description}
								<Markdown
									content={slide.description}
									class="*:m-0 *:text-center *:text-base *:text-white/75 *:md:text-start *:lg:text-xl"
								/>
							{/if}
							{#if slide.link}
								<Button
									href={slide.link}
									target="_blank"
									class="mt-6 bg-white text-foreground hover:bg-white/85"
								>
									Read more
								</Button>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<button
		on:click={() => scroll('prev')}
		class="absolute left-3 top-1/2 flex size-8 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-background opacity-15 transition-opacity hover:opacity-50 md:left-8 md:h-12 md:w-12"
	>
		<ChevronLeftIcon class="h-1/2 w-1/2" />
	</button>
	<button
		on:click={() => scroll('next')}
		class="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-background opacity-15 transition-opacity hover:opacity-50 md:right-8 md:h-12 md:w-12"
	>
		<ChevronRightIcon class="h-1/2 w-1/2" />
	</button>
</div>
