<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let content: string | undefined;
</script>

{#if content}
	<SvelteMarkdown source={content} />
{/if}
