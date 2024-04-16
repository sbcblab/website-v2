<script lang="ts">
	import { cn } from '$lib/utils';

	export let component: {
		imageUrl?: string;
		height?: number;
		link?: string;
		border?: boolean;
	};
</script>

<div class="container text-center">
	{#if component?.link}
		<a href={component.link} target="_blank">
			<img
				src={component.imageUrl}
				alt=""
				height={component.height}
				class={cn(component.border && 'border')}
			/>
		</a>
	{:else}
		<img
			src={component.imageUrl}
			alt=""
			height={component.height}
			class={cn(component.border && 'border')}
		/>
	{/if}
</div>
