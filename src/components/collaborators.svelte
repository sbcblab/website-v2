<script lang="ts">
	import type { Collaborator } from '$lib/data';
	import { cn } from '$lib/utils';

	export let component: {
		collaborators: Collaborator[];
	};

	const { collaborators } = component;
</script>

<div class="mt-10 grid grid-cols-2 gap-10">
	{#each collaborators as collaborator}
		<div class="flex items-center gap-3">
			<img class="w-12" src={collaborator.country.flagUrl} alt={collaborator.country.name} />
			<div class="flex flex-col">
				<a
					href={collaborator.url}
					target="_blank"
					class={cn(!collaborator.url && 'cursor-default', 'font-medium')}
				>
					{collaborator.name}
				</a>
				<span class="text-sm leading-none">
					{[collaborator.institute, collaborator.university, collaborator.country.name]
						.filter((x) => !!x)
						.join('/')}
				</span>
			</div>
		</div>
	{/each}
</div>
