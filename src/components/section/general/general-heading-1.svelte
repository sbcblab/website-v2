<script lang="ts">
	export let component: {
		text: string;
	};
</script>

<div class="mb-12 bg-card text-center md:text-start">
	<h1 class="container py-6 text-card-foreground">{component.text}</h1>
</div>
