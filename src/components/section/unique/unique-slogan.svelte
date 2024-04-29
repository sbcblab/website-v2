<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import { env } from '$env/dynamic/public';
	import type { Slogan } from '$lib/types';

	export let component: Slogan;
</script>

<div
	class="slogan strong-underline container"
	style={`--underline: url(${env.PUBLIC_STRAPI_URL}/uploads/underline_8ae26a8847.svg)`}
>
	<Markdown content={component.text} />
</div>
