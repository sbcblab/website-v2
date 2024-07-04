<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import DownloadIcon from '~icons/lucide/download';

	export let options: { label: string; href: string }[];

	let open = false;
</script>

<button class="group relative text-start" on:mouseleave={() => (open = false)}>
	<button
		on:mouseenter={() => (open = true)}
		class="rounded-md bg-gray-200 p-3 text-gray-400 shadow-sm transition-colors group-hover:bg-gray-300 group-hover:text-gray-500"
	>
		<DownloadIcon class="size-5" />
	</button>
	{#if open}
		<div
			transition:fly={{ duration: 150, y: -4, easing: quintOut }}
			class="absolute left-1/2 top-full z-10 flex -translate-x-1/2 flex-col rounded-md bg-background p-1 shadow-lg"
		>
			{#each options as { label, href }}
				<a
					{href}
					target="_blank"
					class="text-nowrap rounded-sm px-4 py-1.5 text-sm hover:bg-gray-50"
				>
					{label}
				</a>
			{/each}
		</div>
	{/if}
</button>
