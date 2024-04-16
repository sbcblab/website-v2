<script lang="ts">
	export let component: {
		src: string;
		styles: { key: string; value: string }[];
	};
</script>

<div class="container mt-12">
	<iframe
		class="rounded-lg bg-[#e5e3df] shadow-lg"
		title="Google Maps"
		src={component.src}
		style={component.styles.map((style) => `${style.key}: ${style.value};`).join(' ')}
		allowfullscreen
	></iframe>
</div>
