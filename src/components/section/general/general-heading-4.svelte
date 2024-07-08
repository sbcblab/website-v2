<script lang="ts">
	import type { Heading } from '$lib/types';

	export let component: Heading;
</script>

<h4 class="container mb-3 text-2xl font-bold">{component.text}</h4>
