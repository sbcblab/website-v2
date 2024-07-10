<script lang="ts">
	import type { Schedule } from '$lib/types';
	import Icon from '@iconify/svelte';
	import debounce from 'lodash.debounce';
	import ClockIcon from '~icons/fa6-solid/clock';
	import PinIcon from '~icons/fa6-solid/location-dot';

	export let component: Schedule;

	let rowsWrapper: HTMLDivElement | undefined = undefined;

	$: if (rowsWrapper) {
		normalizeWidths();
		window.addEventListener('resize', debounce(normalizeWidths));
	}

	function normalizeWidths() {
		if (!rowsWrapper) return;

		const infoCells = rowsWrapper.querySelectorAll('.info');

		let maxWidth = 0;
		for (const cell of infoCells) {
			const cellWidth = cell.clientWidth;
			if (cellWidth > maxWidth) {
				maxWidth = cellWidth;
			}
		}

		infoCells.forEach((cell: any) => (cell.style.width = `${maxWidth}px`));
	}
</script>

<div class="container my-8">
	<div class="rounded-md text-sm shadow-sm">
		<div class="rounded-t-md border px-5 py-4 font-medium">{component.date}</div>
		<div bind:this={rowsWrapper} class="flex flex-col rounded-b-md border-x border-b">
			{#each component.events as { name, time, location, people }}
				<div
					class="flex flex-col items-start gap-6 px-8 py-10 last:rounded-b-md odd:bg-gray-50 md:flex-row md:items-center md:gap-20 md:p-5"
				>
					<div class="info flex shrink-0 flex-col justify-center gap-1 text-nowrap">
						{#if time}
							<div class="flex items-center gap-2">
								<ClockIcon class="size-4 text-gray-200" />
								<span class="text-gray-600">{time}</span>
							</div>
						{/if}
						{#if location}
							<div class="flex items-center gap-2">
								<PinIcon class="size-4 text-gray-200" />
								<span class="text-gray-600">{location}</span>
							</div>
						{/if}
					</div>
					<div class="flex flex-col gap-1.5">
						<span class="text-base text-gray-800">{name}</span>
						{#if people}
							<div class="flex flex-col gap-0.5 text-gray-600">
								{#each people as { name, countryAlpha2 }}
									<div class="flex items-center gap-2">
										<Icon
											class="shrink-0 rounded"
											font-size={14}
											icon="flag:{countryAlpha2.toLowerCase()}-4x3"
										/>
										<span>{name}</span>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
