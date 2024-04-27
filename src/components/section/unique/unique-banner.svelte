<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import Button from '$components/ui/button/button.svelte';
	import * as Carousel from '$components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';

	export let component: {
		defaultBackgroundUrl: string;
		slides: {
			heading?: string;
			description?: string;
			link?: string;
			imageUrl?: string;
			backgroundUrl?: string;
		}[];
	};

	const { slides } = component;

	const autoplay = Autoplay({ delay: 5000 });
</script>

<div class="shadow-xl">
	<Carousel.Root plugins={[autoplay]} opts={{ loop: true, watchSlides: false }}>
		<Carousel.Content class="ml-0">
			{#each slides as slide}
				<Carousel.Item
					class="bg-background bg-cover bg-center pl-0"
					style={slide.backgroundUrl
						? `background-image: url(${slide.backgroundUrl})`
						: `background-image: url(${component.defaultBackgroundUrl})`}
				>
					<div
						class="container grid h-[33rem] grid-rows-2 gap-8 p-12 drop-shadow-xl md:h-[30rem] md:grid-cols-2 md:grid-rows-1 md:gap-12 md:py-16"
					>
						{#if slide.imageUrl}
							<img
								src={slide.imageUrl}
								alt={slide.heading}
								class="h-full w-full rounded-md object-contain px-2 md:order-1 md:px-0"
							/>
						{/if}
						<div
							class="mx-auto flex max-w-[28rem] flex-col items-center gap-4 text-center md:items-start md:justify-center md:text-left"
						>
							{#if slide.heading}
								<h3 class="text-2xl text-secondary md:text-3xl">{slide.heading}</h3>
							{/if}
							{#if slide.description}
								<Markdown
									content={slide.description}
									class="*:m-0 *:text-center *:text-sm *:font-light *:text-secondary/85 *:md:text-start *:md:text-xl"
								/>
							{/if}
							{#if slide.link}
								<Button
									href={slide.link}
									target="_blank"
									variant="secondary"
									class="mt-4 h-8 px-3 text-xs hover:opacity-100 md:mt-8 md:h-10 md:px-5 md:text-sm"
								>
									Read more
								</Button>
							{/if}
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Button on:click={autoplay.reset} direction="previous" />
		<Carousel.Button on:click={autoplay.reset} direction="next" />
	</Carousel.Root>
</div>
