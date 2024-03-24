<script lang="ts">
	import { cn } from '$lib/utils';

	export let component: {
		imageUrl?: string;
		alt?: string;
		height?: number;
		link?: string;
		border?: boolean;
	};
</script>

{#if component?.link}
	<a href={component.link}>
		<img
			src={component.imageUrl}
			alt={component.alt}
			height={component.height}
			class={cn(component.border && 'border')}
		/>
	</a>
{:else}
	<img
		src={component.imageUrl}
		alt={component.alt}
		height={component.height}
		class={cn(component.border && 'border')}
	/>
{/if}
