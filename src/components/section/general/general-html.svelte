<script lang="ts">
	import type { HTML } from '$lib/types';
	import DOMPurify from 'isomorphic-dompurify';

	export let component: HTML;

	const content = DOMPurify.sanitize(component.content);
</script>

<div class="html container">
	{@html content}
</div>
