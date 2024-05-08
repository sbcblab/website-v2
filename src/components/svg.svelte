<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import { onMount } from 'svelte';

	export let src: string;
	export let overrideFill: boolean | undefined = false;

	let container: HTMLElement;

	onMount(() => {
		fetch(src)
			.then((response) => response.text())
			.then((text) => {
				const sanitizedText = DOMPurify.sanitize(text);

				const parser = new DOMParser();
				const svg = parser.parseFromString(sanitizedText, 'text/xml').documentElement;

				svg.setAttribute('width', '100%');
				svg.setAttribute('height', '100%');

				if (overrideFill) {
					svg.setAttribute('fill', 'currentColor');
					svg.querySelectorAll('path').forEach((path) => {
						path.style.color = 'currentColor';
						if (path.getAttribute('fill') && path.getAttribute('fill') !== 'none') {
							path.style.fill = 'currentColor';
						}
					});
				}

				container.appendChild(svg);
			});
	});
</script>

<div bind:this={container} class={$$restProps.class}></div>
