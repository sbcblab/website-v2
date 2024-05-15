<script lang="ts">
	export let href: string;
	export let title: string;
	export let text: string;

	console.log(href, title, text);
</script>

<a {href} {title} target="_blank">
	<slot />
</a>
