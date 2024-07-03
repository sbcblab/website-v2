<script lang="ts">
	import type { Datasets } from '$lib/types';
	import DownloadIcon from '~icons/lucide/download';

	export let component: Datasets;
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
			<button
				class="rounded-md bg-gray-200 p-3 text-gray-400 transition-colors hover:bg-gray-300 hover:text-gray-500"
			>
				<DownloadIcon class="size-5" />
			</button>
		</div>
	{/each}
</div>
