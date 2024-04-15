<script lang="ts">
	import Svg from './svg.svelte';

	export let component: {
		heading: string;
		partnerships: {
			link: string;
			imageUrl: string;
		}[];
	};
</script>

<div class="mt-12 space-y-10">
	{#if component.heading}
		<h3 class="text-center text-xl">{component.heading}</h3>
	{/if}
	<div class="grid grid-cols-2 justify-items-center gap-10 px-4 md:grid-cols-4 md:px-0">
		{#each component.partnerships as partnership}
			<a
				href={partnership.link}
				target="_blank"
				class="h-fit w-fit transition-opacity hover:opacity-70"
			>
				<Svg src={partnership.imageUrl} class="h-20 text-foreground md:h-24" overrideFill />
			</a>
		{/each}
	</div>
</div>
