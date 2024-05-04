<script lang="ts">
	import type { Heading } from '$lib/types';

	export let component: Heading;
</script>

<div class="container mb-8 mt-32 text-center">
	<h2>{component.text}</h2>
</div>
