<script lang="ts">
	import type { Researcher } from '$lib/types';
	import { cn } from '$lib/utils';

	export let list: Researcher[];
</script>

<ul class="container grid list-none grid-cols-1 gap-8 md:grid-cols-2">
	{#each list as researcher}
		<li class="flex h-16 items-center gap-3">
			<img src={researcher.country.flagUrl} alt={researcher.country.name} class="w-14 rounded" />
			<div class="flex flex-col gap-2">
				<a
					href={researcher.link}
					target="_blank"
					class={cn(
						!researcher.link ? 'cursor-default' : 'transition-opacity hover:opacity-70',
						'text-lg/[1] font-medium text-primary'
					)}>{researcher.name}</a
				>
				{#if researcher.role}
					<span class="text-sm/[1] text-foreground-paragraph">{researcher.role}</span>
				{/if}
				{#if researcher.program || researcher.institute || researcher.university}
					<span class="text-sm/[1] font-light text-foreground-paragraph">
						{[researcher.program, researcher.institute, researcher.university]
							.filter(Boolean)
							.join('/')}
					</span>
				{/if}
			</div>
		</li>
	{/each}
</ul>
