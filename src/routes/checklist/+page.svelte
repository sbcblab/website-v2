<script lang="ts">
	import { cn } from '$lib/utils';
	import LucideCheck from '~icons/lucide/check';
	import MdiDot from '~icons/mdi/dot';
	import checklist from './checklist.json';
</script>

<div class="container my-4">
	{#each Object.entries(checklist) as [title, tasks]}
		<h2>{title}</h2>
		<div class="mb-6">
			{#each tasks as task}
				{@const completed = task[1]}
				<div class={cn(completed && 'bg-primary-solid/20', 'flex items-center gap-4 p-4')}>
					<div class="h-5 w-5 shrink-0">
						{#if completed}
							<LucideCheck class="h-full w-full" />
						{:else}
							<MdiDot class="h-full w-full" />
						{/if}
					</div>
					<span class="font-medium">{task[0]}</span>
				</div>
			{/each}
		</div>
	{/each}
</div>
