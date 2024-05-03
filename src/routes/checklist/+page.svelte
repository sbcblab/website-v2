<script lang="ts">
	import checklist from '$lib/json/checklist.json';
	import { cn } from '$lib/utils';
	import FluentSpinnerIos16Regular from '~icons/fluent/spinner-ios-16-regular';
	import CheckIcon from '~icons/lucide/check';
	import DotIcon from '~icons/mdi/dot';
</script>

<div class="container mt-4">
	{#each checklist.tasks as task}
		{@const inProgress = task[1] === 2}
		{@const done = task[1] === 1}
		<div
			class={cn(
				done && 'bg-green-500/20',
				inProgress && 'bg-blue-500/20',
				'flex items-center gap-4 p-4'
			)}
		>
			<div class="h-5 w-5 shrink-0">
				{#if done}
					<CheckIcon class="h-full w-full" />
				{:else if inProgress}
					<FluentSpinnerIos16Regular class="h-full w-full animate-spin p-0.5" />
				{:else}
					<DotIcon class="h-full w-full" />
				{/if}
			</div>
			<span class="font-medium">{task[0]}</span>
		</div>
	{/each}
</div>
