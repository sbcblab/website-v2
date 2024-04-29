<script lang="ts">
	import type { Image } from '$lib/types';
	import { cn } from '$lib/utils';

	export let component: Image;
</script>

<div class="container text-center">
	{#if component?.link}
		<a href={component.link} target="_blank">
			<img
				src={component.imageUrl}
				alt=""
				height={component.height}
				class={cn(component.border && 'border', 'rounded-md transition-transform hover:scale-105')}
			/>
		</a>
	{:else}
		<img
			src={component.imageUrl}
			alt=""
			height={component.height}
			class={cn(component.border && 'border', 'rounded-md')}
		/>
	{/if}
</div>
