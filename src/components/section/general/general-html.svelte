<script lang="ts">
	import type { HTML } from '$lib/types';
	import DOMPurify from 'isomorphic-dompurify';

	export let component: HTML;

	const content = DOMPurify.sanitize(component.content);
</script>

<div class="html container">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html content}
</div>
