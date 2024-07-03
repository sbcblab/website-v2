<script lang="ts">
	import { cn } from '$lib/utils';

	export let open: boolean;
</script>

<div class="pointer-events-none absolute left-1/2 -translate-x-1/2">
	<div class="overflow-hidden">
		<div
			class={cn(
				!open && '-translate-y-full opacity-0',
				'pointer-events-auto text-nowrap bg-card py-2 text-card-foreground transition-all duration-300'
			)}
		>
			<slot />
		</div>
	</div>
</div>
