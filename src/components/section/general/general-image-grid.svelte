<script lang="ts">
	import type { ImageGrid } from '$lib/types';

	export let component: ImageGrid;
</script>

<div
	class="container my-10 flex flex-col sm:grid"
	style={`grid-template-columns: repeat(${component.cols}, minmax(0, 1fr)); gap: ${component.gap}rem; max-width: ${component.maxWidth}rem;`}
>
	{#each component.images as image}
		<img src={image.src} alt={image.alt} />
	{/each}
</div>
