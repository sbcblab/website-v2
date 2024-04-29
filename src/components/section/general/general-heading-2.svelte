<script lang="ts">
	import type { Heading } from '$lib/types';

	export let component: Heading;
</script>

<div class="container mb-8 mt-20 text-center md:text-start">
	<h2>{component.text}</h2>
</div>
