<script lang="ts">
	import { LinkRenderer, TableRenderer } from '$components/renderers';
	import { cn } from '$lib/utils';
	import rehypeRaw from 'rehype-raw';
	import remarkGfm from 'remark-gfm';
	import SvelteMarkdown from 'svelte-exmarkdown';

	export let content: string;
	const plugins = [
		{ rehypePlugin: rehypeRaw },
		{ rehypePlugin: remarkGfm },
		{ renderer: { table: TableRenderer, a: LinkRenderer } }
	];
</script>

<div class={cn('markdown', $$restProps.class)} {...$$restProps}>
	<SvelteMarkdown md={content} {plugins} />
</div>
