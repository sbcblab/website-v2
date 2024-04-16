<script lang="ts">
	import Markdown from '$components/markdown.svelte';

	export let component: {
		content: string;
	};
</script>

<Markdown content={component.content} class="container" />
