<script lang="ts">
	import type { Guest } from '$lib/data';
	import { cn } from '$lib/utils';
	import FaCalendar from '~icons/fa/calendar';

	export let component: {
		guests: Guest[];
	};

	const { guests } = component;
</script>

<div class="grid grid-cols-2 gap-10">
	{#each guests as guest}
		<div class="flex flex-col gap-1">
			<div class="flex items-baseline gap-1 leading-none">
				<FaCalendar class="text-xs" />
				<span>
					<span>{guest.year} -</span>
					<a
						href={guest.url}
						target="_blank"
						class={cn(!guest.url && 'cursor-default', 'font-medium text-primary')}
					>
						{guest.name}
					</a>
				</span>
			</div>
			<div class="flex">
				<span class="text-foreground-paragraph">{guest.university} - {guest.country}</span>
			</div>
		</div>
	{/each}
</div>
