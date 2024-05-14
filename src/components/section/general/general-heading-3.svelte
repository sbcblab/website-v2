<script lang="ts">
	import type { Heading } from '$lib/types';

	export let component: Heading;
</script>

<div class="container mb-5 mt-8">
	<h3 class="text-2xl">{component.text}</h3>
</div>
