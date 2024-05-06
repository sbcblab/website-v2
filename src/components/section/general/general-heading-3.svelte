<script lang="ts">
	import type { Heading } from '$lib/types';

	export let component: Heading;
</script>

<div class="container mb-10 mt-12">
	<h3>{component.text}</h3>
</div>
