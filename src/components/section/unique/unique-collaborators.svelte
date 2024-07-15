<script lang="ts">
	import type { Collaborators } from '$lib/types';
	import { cn } from '$lib/utils';

	export let component: Collaborators;
</script>

<div class="container grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2">
	{#each component.collaborators as { country, link, name, institute, university }}
		<div class="flex items-center gap-4">
			<img class="w-14 rounded" src={country.flagUrl} alt={country.name} />
			<div class="flex flex-col gap-0.5">
				<a
					href={link}
					target="_blank"
					class={cn(
						!link ? 'cursor-default' : 'transition-opacity hover:opacity-70',
						'text-base font-medium text-primary'
					)}
				>
					{name}
				</a>
				<span class="text-sm text-foreground-paragraph">
					{[institute, university, country.name].filter((x) => !!x).join('/')}
				</span>
			</div>
		</div>
	{/each}
</div>
