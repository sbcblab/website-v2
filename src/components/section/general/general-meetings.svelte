<script lang="ts">
	import type { Meetings } from '$lib/types';
	import Markdown from '$src/components/markdown.svelte';
	import { isExternalLink } from '$src/lib/utils';
	import ClockIcon from '~icons/fa6-solid/clock';
	import LinkIcon from '~icons/fa6-solid/link';
	import PinIcon from '~icons/fa6-solid/location-dot';
	import GroupIcon from '~icons/fa6-solid/user-group';

	export let component: Meetings;
</script>

<div class="container mt-16 flex flex-col gap-16 md:mt-10 md:gap-12">
	{#each component.meetings as { title, objective, participants, location, datetime, link, description }}
		<div class="flex flex-col">
			<h4 class="mb-0 text-2xl font-bold">{title}</h4>
			{#if objective}
				<span class="mt-3 text-sm md:text-base"
					><span class="text-gray-400">Objective: </span>{objective}</span
				>
			{/if}
			<div class="mt-4 flex flex-col gap-3 text-xs md:gap-2 md:text-sm">
				{#if participants}
					<div class="flex items-center gap-3">
						<GroupIcon class="size-4 shrink-0 text-gray-300" />
						<span class="text-gray-500">{participants}</span>
					</div>
				{/if}
				{#if location}
					<div class="flex items-center gap-3">
						<PinIcon class="size-4 shrink-0 text-gray-300" />
						<span class="text-gray-500">{location}</span>
					</div>
				{/if}
				{#if datetime}
					<div class="flex items-center gap-3">
						<ClockIcon class="size-4 shrink-0 text-gray-300" />
						<span class="text-gray-500">{datetime}</span>
					</div>
				{/if}
				{#if link}
					<div class="flex items-center gap-3">
						<LinkIcon class="size-4 shrink-0 text-gray-300" />
						<a
							href={link}
							target={isExternalLink(link) ? '_blank' : ''}
							class="text-gray-500 transition-colors hover:text-gray-400"
						>
							{link}
						</a>
					</div>
				{/if}
			</div>
			{#if description}
				<Markdown content={description} class="*:mb-0 *:text-sm *:md:text-base" />
			{/if}
		</div>
	{/each}
</div>
