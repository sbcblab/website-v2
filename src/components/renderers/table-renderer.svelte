<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import debounce from 'lodash.debounce';
	import { onMount } from 'svelte';

	let container: HTMLElement | undefined | null;
	let table: HTMLTableElement | undefined;
	let splitTable: HTMLTableElement | undefined;

	let containerWidth: number | undefined;
	let splitTableWidth: number | undefined;

	onMount(() => {
		if (table && table.clientHeight / table.clientWidth > 2) {
			container = table.parentElement;
			containerWidth = container?.clientWidth;
			splitTableWidth = table.clientWidth * 2;
			splitTable = createSplitTable();
		}
	});

	$: if (splitTable) {
		window.onresize = debounce(() => {
			containerWidth = container?.clientWidth;
		}, 100);
	}

	function createSplitTable() {
		if (!table) return;

		const newTable = table.cloneNode(true) as HTMLTableElement;

		const headerCells = newTable.querySelectorAll('th');
		const headerRow = newTable.querySelector('thead tr');
		headerCells.forEach((th) => headerRow?.appendChild(th.cloneNode(true)));

		const bodyRows = newTable.querySelectorAll('tbody tr');
		const midIndex = Math.ceil(bodyRows.length / 2);
		bodyRows.forEach((tr, i) => {
			if (i < midIndex) return;
			const cells = tr.querySelectorAll('td');
			cells.forEach((td) => {
				bodyRows[i - midIndex].appendChild(td.cloneNode(true));
			});
			tr.remove();
		});

		if (bodyRows.length % 2 === 1) {
			const midRow = bodyRows[Math.floor(bodyRows.length / 2)];
			const cells = midRow.querySelectorAll('td');
			for (let i = 0; i < cells.length; i++) {
				midRow.appendChild(document.createElement('td'));
			}
		}

		return newTable;
	}
</script>

{#if splitTable && containerWidth && splitTableWidth && containerWidth > splitTableWidth}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html DOMPurify.sanitize(splitTable)}
{:else}
	<table bind:this={table}>
		<slot />
	</table>
{/if}
