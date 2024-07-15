<script lang="ts">
	import type { Meetings } from '$lib/types';
	import ClockIcon from '~icons/fa6-solid/clock';
	import PinIcon from '~icons/fa6-solid/location-dot';
	import GroupIcon from '~icons/fa6-solid/user-group';

	export let component: Meetings;
</script>

<div class="container mt-16 flex flex-col gap-16 md:mt-10 md:gap-12">
	{#each component.meetings as { title, objective, participants, location, datetime }}
		<div class="flex flex-col">
			<h4 class="mb-0 text-2xl font-bold">{title}</h4>
			{#if objective}
				<span class="mt-3 text-sm md:text-base"
					><span class="text-gray-400">Objective: </span>{objective}</span
				>
			{/if}
			<div class="mt-4 flex flex-col gap-3 text-xs md:gap-2 md:text-sm">
				<div class="flex items-center gap-3">
					<GroupIcon class="size-4 shrink-0 text-gray-300" />
					<span class="text-foreground-paragraph">{participants}</span>
				</div>
				<div class="flex items-center gap-3">
					<PinIcon class="size-4 shrink-0 text-gray-300" />
					<span class="text-foreground-paragraph">{location}</span>
				</div>
				<div class="flex items-center gap-3">
					<ClockIcon class="size-4 shrink-0 text-gray-300" />
					<span class="text-foreground-paragraph">{datetime}</span>
				</div>
			</div>
		</div>
	{/each}
</div>
