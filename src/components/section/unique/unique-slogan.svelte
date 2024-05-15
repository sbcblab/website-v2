<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import { env } from '$env/dynamic/public';
	import type { Slogan } from '$lib/types';

	export let component: Slogan;
</script>

<div
	class="slogan strong-underline container mb-20 max-w-[44rem] text-center text-[2.75rem]/[1.1] font-bold md:text-5xl/[1.1]"
	style={`--underline: url(${env.PUBLIC_STRAPI_URL}/uploads/underline_8ae26a8847.svg)`}
>
	<Markdown content={component.text} />
</div>
