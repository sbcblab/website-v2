<script lang="ts">
	import type { IFrame } from '$lib/data';

	export let component: {
		iframe: IFrame;
	};

	const { iframe } = component;
</script>

<iframe
	class="mt-10 w-full"
	title={iframe.title}
	src={iframe.src}
	allowfullscreen={iframe.allowfullscreen}
	style={iframe.styles.map((style) => `${style.key}: ${style.value};`).join(' ')}
></iframe>
