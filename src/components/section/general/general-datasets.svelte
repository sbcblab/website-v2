<script lang="ts">
	import DownloadOptions from '$components/download-options.svelte';
	import * as Select from '$components/ui/select';
	import type { Datasets } from '$lib/types';
	import type { Selected } from 'bits-ui';
	import { quintOut } from 'svelte/easing';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import ArrowDownUpIcon from '~icons/lucide/arrow-down-up';
	import FilterIcon from '~icons/lucide/filter';
	import SearchIcon from '~icons/lucide/search';
	import SortAscIcon from '~icons/lucide/sort-asc';

	export let component: Datasets;

	let datasets = component.data;

	const gseFilter = writable<string | null>(null);
	const typeFilter = writable<Selected<string | null>>({ value: null, label: 'All' });
	const sort = writable<Selected<string>>({
		value: component.sortOptions[0].jsonPropName,
		label: component.sortOptions[0].label
	});
	const sortAscending = writable<boolean>(true);

	gseFilter.subscribe(() => (datasets = sortDatasets(filterDatasets(datasets))));
	typeFilter.subscribe(() => (datasets = sortDatasets(filterDatasets(datasets))));
	sort.subscribe(() => (datasets = sortDatasets(datasets)));
	sortAscending.subscribe(() => (datasets = sortDatasets(datasets)));

	function filterDatasets(datasets: any[]) {
		const typeFilterValue = $typeFilter.value;
		const filterPropJsonName = component.filterPropJsonName;
		let filteredDatasets = component.data;
		if (typeFilterValue) {
			filteredDatasets = filteredDatasets.filter(
				(dataset: any) => dataset[filterPropJsonName] === typeFilterValue
			);
		}
		if ($gseFilter) {
			filteredDatasets = filteredDatasets.filter((dataset: any) =>
				dataset.gse.toLowerCase().includes(($gseFilter as string).trim().toLowerCase())
			);
		}
		return filteredDatasets;
	}

	function sortDatasets(datasets: any[]) {
		if (datasets.length === 0) return [];

		const sortProp = $sort.value;
		let sortedDatasets;
		if (typeof datasets[0][sortProp] === 'number') {
			if ($sortAscending) {
				sortedDatasets = datasets.sort((a, b) => a[sortProp] - b[sortProp]);
			} else {
				sortedDatasets = datasets.sort((a, b) => b[sortProp] - a[sortProp]);
			}
		} else {
			if ($sortAscending) {
				sortedDatasets = datasets.sort((a, b) => a[sortProp].localeCompare(b[sortProp]));
			} else {
				sortedDatasets = datasets.sort((a, b) => b[sortProp].localeCompare(a[sortProp]));
			}
		}
		return sortedDatasets;
	}
</script>

<div class="container flex flex-col gap-4">
	<div class="flex flex-col-reverse items-end justify-between gap-4 md:flex-row">
		<div class="flex w-full items-center gap-3 rounded-sm bg-gray-100 pl-4 md:w-64">
			<SearchIcon class="size-4 text-gray-400" />
			<input
				type="text"
				bind:value={$gseFilter}
				placeholder="Search GSE..."
				class="grow bg-transparent py-2 pr-4 text-sm outline-none"
			/>
		</div>

		<div class="flex flex-col gap-3 max-md:w-full md:flex-row md:items-end md:gap-4">
			<div class="flex items-end gap-2">
				<div class="flex w-full flex-col gap-1 md:w-56">
					<span class="text-sm font-medium text-foreground">{component.filterPropLabel}</span>
					<Select.Root bind:selected={$typeFilter}>
						<Select.Trigger class="w-full">
							<div class="flex items-center gap-2.5">
								<FilterIcon class="size-4 text-gray-400" />
								<Select.Value placeholder="All" class="translate-y-[1px]" />
							</div>
						</Select.Trigger>
						<Select.Content
							transition={(el) => fly(el, { duration: 150, y: -4, easing: quintOut })}
						>
							<Select.Item value={null}>All</Select.Item>
							{#each component.filterOptions as option}
								<Select.Item value={option} label={option}>
									{option}
								</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
			</div>

			<div class="flex items-end gap-2">
				<div class="flex w-full flex-col gap-1 md:w-56">
					<span class="text-sm font-medium text-foreground">Sort by</span>
					<Select.Root bind:selected={$sort}>
						<Select.Trigger class="w-full">
							<div class="flex items-center gap-2.5">
								<ArrowDownUpIcon class="size-4 text-gray-400" />
								<Select.Value class="translate-y-[1px]" />
							</div>
						</Select.Trigger>
						<Select.Content
							transition={(el) => fly(el, { duration: 150, y: -4, easing: quintOut })}
						>
							{#each component.sortOptions as { jsonPropName, label }}
								<Select.Item value={jsonPropName} {label}>
									{label}
								</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>

				<button
					on:click={() => ($sortAscending = !$sortAscending)}
					class="size-9 shrink-0 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100"
				>
					<SortAscIcon class="size-full transition-transform {!$sortAscending && 'rotate-180'}" />
				</button>
			</div>
		</div>
	</div>

	{#if datasets.length === 0}
		<p class="text-center text-gray-500">No matching datasets.</p>
	{/if}
	{#each datasets as dataset}
		<div
			class="flex flex-col items-center gap-10 rounded-2xl bg-gray-100 px-14 py-10 md:flex-row md:gap-14"
		>
			<div class="grow">
				<div class="flex flex-wrap justify-between gap-8 border-b pb-4">
					{#each component.displayedInfo as info}
						{@const href = dataset[`${info.jsonPropName}_url`] || null}
						<a {href} target="_blank" class="group flex flex-col gap-1">
							<span class="text-xs font-bold uppercase text-gray-400">
								{info.label}
							</span>
							<span
								class="text-lg font-semibold text-gray-700
								{href && 'transition-colors group-hover:text-gray-400'}"
							>
								{dataset[info.jsonPropName]}
							</span>
						</a>
					{/each}
				</div>
				<div class="flex flex-wrap justify-between gap-8 pt-4">
					{#each Object.entries(dataset.scores) as [key, value]}
						{@const href = dataset.scores_url
							? `https://sbcb.inf.ufrgs.br${dataset.scores_url[key]}`
							: null}
						<a {href} target="_blank" class="group flex flex-col gap-1">
							<span class="text-xs font-bold uppercase text-gray-400">{key}</span>
							<span
								class="text-lg font-semibold text-gray-700
								{href && 'transition-colors group-hover:text-gray-400'}"
							>
								{value}
							</span>
						</a>
					{/each}
				</div>
			</div>
			{#if component.downloadOptions}
				<DownloadOptions
					options={component.downloadOptions.map((option) => {
						return {
							label: option.label,
							href: `https://sbcb.inf.ufrgs.br${
								dataset[option.jsonPropName] ||
								dataset.downloads[option.jsonPropName] ||
								dataset.images[option.jsonPropName]
							}`
						};
					})}
				/>
			{/if}
		</div>
	{/each}
</div>
