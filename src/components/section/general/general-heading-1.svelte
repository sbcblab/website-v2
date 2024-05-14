<script lang="ts">
	import type { Heading } from '$lib/types';

	export let component: Heading;
</script>

<h1>{component.text}</h1>
