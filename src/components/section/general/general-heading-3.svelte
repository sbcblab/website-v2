<script lang="ts">
	import type { Heading } from '$lib/types';

	export let component: Heading;
</script>

<h3 id={component.anchorId}>{component.text}</h3>
