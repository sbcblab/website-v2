<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';

	export let component: {
		content: string;
	};

	const content = DOMPurify.sanitize(component.content);
</script>

<div class="html container">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html content}
</div>
