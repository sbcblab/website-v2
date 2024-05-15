<script lang="ts">
	import type { Guests } from '$lib/types';
	import { cn } from '$lib/utils';
	import FaCalendar from '~icons/fa/calendar';

	export let component: Guests;
</script>

<div class="container grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2">
	{#each component.guests as guest}
		<div class="flex flex-col gap-1">
			<div class="flex items-baseline gap-1 leading-none">
				<FaCalendar class="text-xs" />
				<span>
					<span>{guest.year} -</span>
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
				</span>
			</div>
			<div class="flex">
				<span class="text-foreground-paragraph">{guest.university} - {guest.country}</span>
			</div>
		</div>
	{/each}
</div>
