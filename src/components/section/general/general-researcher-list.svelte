<script lang="ts">
	import type { ResearcherList } from '$lib/types';
	import { cn } from '$lib/utils';

	export let component: ResearcherList;
</script>

<ul class="container grid list-none grid-cols-1 gap-6 md:grid-cols-2">
	{#each component.researchers as researcher}
		<li class="mt-0 flex h-16 items-center gap-4">
			{#if researcher.country}
				<img src={researcher.country.flagUrl} alt={researcher.country.name} class="w-14 rounded" />
			{:else}
				<div class="h-10 w-14 rounded" />
			{/if}
			<div class="flex flex-col gap-2">
				<a
					href={researcher.link}
					target="_blank"
					class={cn(
						!researcher.link ? 'cursor-default' : 'transition-opacity hover:opacity-70',
						'text-base/[1] font-medium text-primary'
					)}>{researcher.name}</a
				>
				{#if researcher.role}
					<span class="text-sm/[1]">{researcher.role}</span>
				{/if}
				{#if researcher.program || researcher.institute || researcher.university}
					<span class="text-sm/[1] text-gray-400">
						{[researcher.program, researcher.institute, researcher.university]
							.filter(Boolean)
							.join('/')}
					</span>
				{/if}
			</div>
		</li>
	{/each}
</ul>
