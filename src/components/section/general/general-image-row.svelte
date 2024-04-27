<script lang="ts">
	import { cn } from '$lib/utils';

	export let component: {
		imagesHeight?: number;
		gap?: number;
		border?: boolean;
		justify?: 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end';
		images: {
			imageUrl: string;
			link?: string;
		}[];
	};
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
					class={cn(component.border && 'border', 'transition-transform hover:scale-105')}
				/>
			</a>
		{:else}
			<img
				src={image.imageUrl}
				alt=""
				height={component.imagesHeight}
				class={cn(component.border && 'border')}
			/>
		{/if}
	{/each}
</div>
