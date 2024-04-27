<script lang="ts">
	import ChevronRightIcon from '~icons/radix-icons/chevron-right';

	export let href: string | undefined = undefined;

	let open: boolean = false;
</script>

<a
	{href}
	class="relative flex cursor-pointer items-center justify-between px-4 py-2 hover:bg-background/10"
	on:pointerenter={() => (open = true)}
	on:pointerleave={() => (open = false)}
>
	<slot {open} />
	<ChevronRightIcon class="ml-4 h-4 w-4 text-card-foreground/70" />
</a>
