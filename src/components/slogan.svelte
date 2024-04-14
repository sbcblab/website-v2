<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Markdown from './markdown.svelte';

	export let text: string;
</script>

<div
	class="container my-20 max-w-[32rem] text-center text-[2.5rem]/[1.1]"
	style={`--underline: url(${env.PUBLIC_STRAPI_URL}/uploads/underline_8ae26a8847.svg)`}
>
	<style>
		strong {
			font-weight: inherit;
			position: relative;
		}
		strong::after {
			background-image: var(--underline);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			content: '';
			display: block;
			height: 0.3em;
			left: -0.2em;
			position: absolute;
			top: calc(100% - 0.15em);
			width: calc(100% + 0.4em);
		}
	</style>
	<Markdown content={text} />
</div>
