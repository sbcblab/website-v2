<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import type { RichText } from '$lib/types';

	export let component: RichText;
</script>

<Markdown content={component.content} class="container" />
