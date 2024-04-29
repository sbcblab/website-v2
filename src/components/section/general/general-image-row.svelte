<script lang="ts">
	import type { ImageRow } from '$lib/types';
	import { cn } from '$lib/utils';

	export let component: ImageRow;
</script>

<div
	class="container my-6 flex"
	style={`gap: ${component?.gap || 1}rem; justify-content: ${component?.justify || 'center'};`}
>
	{#each component.images as image}
		{#if image?.link}
			<a href={image.link} target="_blank">
				<img
					src={image.imageUrl}
					alt=""
					height={component.imagesHeight}
					class={cn(
						component.border && 'border',
						'rounded-md transition-transform hover:scale-105'
					)}
				/>
			</a>
		{:else}
			<img
				src={image.imageUrl}
				alt=""
				height={component.imagesHeight}
				class={cn(component.border && 'border', 'rounded-md')}
			/>
		{/if}
	{/each}
</div>
