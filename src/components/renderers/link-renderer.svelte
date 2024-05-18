<script lang="ts">
	export let href: string | undefined = undefined;
	export let title: string | undefined = undefined;
</script>

<a {href} {title} target="_blank">
	<slot />
</a>
