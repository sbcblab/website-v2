<script lang="ts">
	let open: boolean = false;
</script>

<div
	on:pointerenter={() => (open = true)}
	on:pointerleave={() => (open = false)}
	class="relative z-10"
>
	<slot {open} />
</div>
