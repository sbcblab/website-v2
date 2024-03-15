<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let source: string;
</script>

<div class="markdown">
	<SvelteMarkdown {source} />
</div>
