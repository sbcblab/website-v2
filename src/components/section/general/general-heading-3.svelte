<script lang="ts">
	import type { Heading } from '$lib/types';

	export let component: Heading;
</script>

<div class="container mb-4 mt-8">
	<h3>{component.text}</h3>
</div>
