<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Markdown from './markdown.svelte';

	export let text: string;
</script>

<div
	class="slogan strong-underline"
	style={`--underline: url(${env.PUBLIC_STRAPI_URL}/uploads/underline_8ae26a8847.svg)`}
>
	<Markdown content={text} />
</div>
