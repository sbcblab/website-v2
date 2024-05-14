<script lang="ts">
	import type { Heading } from '$lib/types';

	export let component: Heading;
</script>

<h2>{component.text}</h2>
