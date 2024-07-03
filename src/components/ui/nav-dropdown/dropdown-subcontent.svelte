<script lang="ts">
	import { cn } from '$lib/utils';

	export let open: boolean;
</script>

<div class="pointer-events-none absolute -top-2 left-full -ml-[1px]">
	<div class="fixed overflow-hidden">
		<div
			class={cn(
				!open && '-translate-x-[101%] opacity-0',
				'pointer-events-auto bg-card py-2 text-card-foreground transition-all duration-300'
			)}
		>
			<slot />
		</div>
	</div>
</div>
