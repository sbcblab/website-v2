<script lang="ts">
	import type { Header } from '$lib/types';

	export let component: Header;
</script>

<div class="flex flex-col items-center *:text-center">
	{#if component.eyebrow}
		<p class="my-0 text-base font-semibold text-primary">{component.eyebrow}</p>
	{/if}
	<h2 class="mb-0 mt-3 px-0">{component.title}</h2>
	{#if component.lead}
		<p class="mb-0 mt-4 max-w-[48rem]">{component.lead}</p>
	{/if}
</div>
