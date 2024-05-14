<script lang="ts">
	import { cn } from '$src/lib/utils';
	import rehypeRaw from 'rehype-raw';
	import remarkGfm from 'remark-gfm';
	import SvelteMarkdown from 'svelte-exmarkdown';

	export let content: string;
	const plugins = [{ rehypePlugin: rehypeRaw }, { rehypePlugin: remarkGfm }];
</script>

<div class={cn('markdown', $$restProps.class)} {...$$restProps}>
	<SvelteMarkdown md={content} {plugins} />
</div>
