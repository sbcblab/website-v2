<script lang="ts">
	export let text: string = '';
	export let task: boolean = false;
	export let checked: boolean = false;
</script>

<li {...$$restProps}>
	{#if task}
		<input type="checkbox" {checked} />
	{/if}
	<p>{text}</p>
</li>
