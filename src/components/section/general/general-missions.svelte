<script lang="ts">
	import type { Missions } from '$lib/types';
	import { cn } from '$src/lib/utils';
	import PlaneIcon from '~icons/fa6-solid/plane';

	export let component: Missions;
</script>

<div class="container grid grid-cols-1 gap-8 text-center md:grid-cols-2">
	{#each component.missions as mission}
		<div class="flex flex-col items-center justify-center gap-10 rounded-2xl border p-12">
			<div class="flex items-center gap-4 md:gap-8">
				<div class="flex flex-col items-center gap-3.5">
					<img
						src={mission.origin.country.flagUrl}
						alt={mission.origin.country.name}
						class="h-12 rounded"
					/>
					<span class="">
						{[mission.origin.institute, mission.origin.university, mission.origin.country.name]
							.filter(Boolean)
							.join(', ')}
					</span>
				</div>
				<PlaneIcon class="size-6 shrink-0 text-zinc-300" />
				<div class="flex flex-col items-center gap-3.5">
					<img
						src={mission.destination.country.flagUrl}
						alt={mission.destination.country.name}
						class="h-12 rounded"
					/>
					<span>
						{[
							mission.destination.institute,
							mission.destination.university,
							mission.destination.country.name
						]
							.filter(Boolean)
							.join(', ')}
					</span>
				</div>
			</div>
			<div class="flex flex-col gap-5 text-sm">
				{#each mission.members as member}
					<div class="flex flex-col items-center gap-0.5">
						<a
							href={member.link}
							target="_blank"
							class={cn(
								!member.link ? 'cursor-default' : 'transition-opacity hover:opacity-70',
								'font-medium text-primary'
							)}
						>
							{member.name}
						</a>
						<span class="text-zinc-500">
							{[member.fromDate, member.toDate].filter(Boolean).join(' - ')}
						</span>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
