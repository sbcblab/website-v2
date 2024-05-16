<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a {href} {title} target="_blank">
	<slot />
</a>
