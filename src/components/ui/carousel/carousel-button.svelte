<script lang="ts">
	import { cn } from '$lib/utils.js';
	import ChevronRightIcon from '~icons/radix-icons/chevron-right';
	import { getEmblaContext } from './context.js';

	export let direction: 'next' | 'previous';

	const { orientation, handleKeyDown, canScrollNext, scrollNext, canScrollPrev, scrollPrev } =
		getEmblaContext('<Carousel.Button/>');
</script>

<button
	on:click
	class={cn(
		'absolute flex h-8 w-8 touch-manipulation items-center justify-center rounded-full bg-background opacity-15 transition-opacity hover:opacity-50 md:h-12 md:w-12',
		$orientation === 'horizontal'
			? `${direction === 'next' ? 'right-3 md:right-8' : 'left-3 md:left-8'} top-1/2 -translate-y-1/2`
			: `${direction === 'next' ? 'bottom-3 md:bottom-8' : 'top-3 md:top-8'} left-1/2 -translate-x-1/2 rotate-90`,
		$$restProps.class
	)}
	disabled={direction === 'next' ? !$canScrollNext : !$canScrollPrev}
	on:click={direction === 'next' ? scrollNext : scrollPrev}
	on:keydown={handleKeyDown}
	{...$$restProps}
>
	<ChevronRightIcon class={cn('h-1/2 w-1/2', direction === 'previous' && 'rotate-180')} />
	<span class="sr-only">{direction.toUpperCase()} slide</span>
</button>
