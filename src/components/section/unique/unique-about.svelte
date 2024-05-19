<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import type { AboutUs } from '$lib/types';

	export let component: AboutUs;
</script>

<div class="container flex flex-col items-center gap-12 lg:flex-row">
	<div class="flex flex-col gap-10">
		{#if component.mainParagraph}
			<Markdown content={component.mainParagraph} />
		{/if}
		{#if component.bodyText}
			<Markdown
				content={component.bodyText}
				class="flex flex-col gap-10 *:m-0 *:text-center *:lg:text-start"
			/>
		{/if}
	</div>
	{#if component.imageUrl}
		{#if component.imageLink}
			<a
				href={component.imageLink}
				class="w-full max-w-[32rem] shrink-0 transition-transform hover:scale-[1.01] lg:w-[32rem] lg:max-w-[50%]"
			>
				<img src={component.imageUrl} alt="About Us" />
			</a>
		{:else}
			<img src={component.imageUrl} alt="About Us" class="w-[32rem] max-w-full" />
		{/if}
	{/if}
</div>
