<script lang="ts">
	import type { Collaborators } from '$lib/types';
	import { cn } from '$lib/utils';

	export let component: Collaborators;

	const { collaborators } = component;
</script>

<div class="container grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2">
	{#each collaborators as collaborator}
		<div class="flex items-center gap-3">
			<img
				class="w-12 rounded"
				src={collaborator.country.flagUrl}
				alt={collaborator.country.name}
			/>
			<div class="flex flex-col">
				<a
					href={collaborator.link}
					target="_blank"
					class={cn(
						!collaborator.link ? 'cursor-default' : 'transition-opacity hover:opacity-70',
						'font-medium text-primary'
					)}
				>
					{collaborator.name}
				</a>
				<span class="text-sm leading-none text-foreground-paragraph">
					{[collaborator.institute, collaborator.university, collaborator.country.name]
						.filter((x) => !!x)
						.join('/')}
				</span>
			</div>
		</div>
	{/each}
</div>
