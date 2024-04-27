<script lang="ts">
	export let href: string | undefined = undefined;
</script>

<a {href} class="flex cursor-pointer py-2 pl-4 pr-12 hover:bg-background/10">
	<slot />
</a>
