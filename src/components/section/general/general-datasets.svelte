<script lang="ts">
	import type { Datasets } from '$lib/types';
	import DownloadIcon from '~icons/lucide/download';

	export let component: Datasets;

	function handleMouseEnter(e: any) {
		e.target.nextElementSibling.setAttribute('data-open', 'true');
	}

	function handleMouseLeave(e: any) {
		e.target.children.item(1).setAttribute('data-open', 'false');
	}
</script>

<div class="container flex flex-col gap-4">
	{#each component.data as dataset}
		<div class="flex items-center gap-14 rounded-2xl bg-gray-100 px-14 py-10">
			<div class="grow">
				<div class="flex justify-between gap-10 border-b pb-4">
					{#each component.displayedInfo as info}
						<div class="flex flex-col gap-1">
							<span class="text-xs font-bold uppercase text-gray-400">
								{info.label}
							</span>
							<span class="text-lg font-semibold text-gray-700">{dataset[info.jsonPropName]}</span>
						</div>
					{/each}
				</div>
				<div class="flex justify-between gap-10 pt-4">
					{#each Object.entries(dataset.scores) as [key, value]}
						<div class="flex flex-col gap-1">
							<span class="text-xs font-bold uppercase text-gray-400">{key}</span>
							<span class="text-lg font-semibold text-gray-700">{value}</span>
						</div>
					{/each}
				</div>
			</div>
			{#if component.downloadOptions}
				<div class="group relative" on:pointerleave={handleMouseLeave}>
					<button
						on:mouseenter={handleMouseEnter}
						class="rounded-md bg-gray-200 p-3 text-gray-400 transition-colors group-hover:bg-gray-300 group-hover:text-gray-500"
					>
						<DownloadIcon class="size-5" />
					</button>
					<div
						data-open="false"
						class="absolute left-1/2 top-full z-10 flex w-32 -translate-x-1/2 flex-col rounded-sm bg-background py-2 shadow-lg data-[open=false]:pointer-events-none data-[open=false]:opacity-0"
					>
						{#each component.downloadOptions as option}
							<a
								href={`https://sbcb.inf.ufrgs.br${
									dataset[option.jsonPropName] ||
									dataset.downloads[option.jsonPropName] ||
									dataset.images[option.jsonPropName]
								}`}
								target="_blank"
								class="px-3 py-2 text-sm font-medium hover:bg-gray-100"
								>{option.label}
							</a>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
