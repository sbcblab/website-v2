<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	export let content: string;
</script>

<div {...$$restProps}>
	<SvelteMarkdown source={content} />
</div>
