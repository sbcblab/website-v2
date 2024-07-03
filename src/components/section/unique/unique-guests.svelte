<script lang="ts">
	import type { Guests } from '$lib/types';
	import { cn } from '$lib/utils';
	import FaCalendar from '~icons/fa/calendar';

	export let component: Guests;
</script>

<div class="container grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2">
	{#each component.guests as guest}
		<div class="flex flex-col gap-0.5">
			<div class="flex items-center gap-2.5">
				<div class="flex items-center gap-1.5 rounded bg-zinc-100 p-1.5">
					<FaCalendar class="-translate-y-0.5 text-[0.625rem] text-zinc-500" />
					<span class="text-sm font-medium leading-none text-zinc-500">{guest.year}</span>
				</div>
				<a
					href={guest.link}
					target="_blank"
					class={cn(
						!guest.link ? 'cursor-default' : 'transition-opacity hover:opacity-70',
						'font-medium text-primary'
					)}
				>
					{guest.name}
				</a>
			</div>
			<div class="flex">
				<span class="text-foreground-paragraph">{guest.university} - {guest.country}</span>
			</div>
		</div>
	{/each}
</div>
