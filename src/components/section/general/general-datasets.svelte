<script lang="ts">
	import type { Datasets } from '$lib/types';
	import DownloadIcon from '~icons/lucide/download';
	import SearchIcon from '~icons/lucide/search';

	export let component: Datasets;

	let filteredDatasets = component.data;
	let search = '';
	let filter = null;
	let sort = null;

	$: filteredDatasets = component.data.filter((dataset: any) =>
		dataset.gse.toLowerCase().includes(search.trim().toLowerCase())
	);
	function openDownload(e: any) {
		e.target.nextElementSibling.setAttribute('data-open', 'true');
	}

	function closeDownload(e: any) {
		e.target.children.item(1).setAttribute('data-open', 'false');
	}
</script>

<div class="container flex flex-col gap-4">
	<div class="flex md:max-w-64 items-center gap-3 rounded-sm bg-gray-100 pl-4">
		<SearchIcon class="size-4 text-gray-400" />
		<input
			type="text"
			bind:value={search}
			placeholder="Search GSE..."
			class="grow bg-transparent py-2 pr-4 outline-none"
		/>
	</div>
	{#if filteredDatasets.length === 0}
		<p class="text-gray-500">No matching datasets.</p>
	{/if}
	{#each filteredDatasets as dataset}
		<div
			class="flex flex-col items-center gap-10 rounded-2xl bg-gray-100 px-14 py-10 md:flex-row md:gap-14"
		>
			<div class="grow">
				<div class="flex flex-wrap justify-between gap-8 border-b pb-4">
					{#each component.displayedInfo as info}
						<div class="flex flex-col gap-1">
							<span class="text-xs font-bold uppercase text-gray-400">
								{info.label}
							</span>
							<span class="text-lg font-semibold text-gray-700">{dataset[info.jsonPropName]}</span>
						</div>
					{/each}
				</div>
				<div class="flex flex-wrap justify-between gap-8 pt-4">
					{#each Object.entries(dataset.scores) as [key, value]}
						<div class="flex flex-col gap-1">
							<span class="text-xs font-bold uppercase text-gray-400">{key}</span>
							<span class="text-lg font-semibold text-gray-700">{value}</span>
						</div>
					{/each}
				</div>
			</div>
			{#if component.downloadOptions}
				<button class="group relative text-start" on:mouseleave={closeDownload}>
					<button
						on:mouseenter={openDownload}
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
				</button>
			{/if}
		</div>
	{/each}
</div>
