<script lang="ts">
	import Publications from '$components/publications.svelte';
	import { Heading1, Heading2 } from '$components/section/general';
	import type { Publication, Publications as PublicationsT } from '$lib/types';
	import { groupPublicationsByYear } from '$lib/utils';
	import { getContext } from 'svelte';

	export let component: PublicationsT;

	const publications: Publication[] = getContext('publications');
	const publicationsByYear = groupPublicationsByYear(publications);
</script>

{#if component.heading}
	{#if component.headingType === 'h1'}
		<Heading1 component={{ text: component.heading }} />
	{:else}
		<Heading2 component={{ text: component.heading }} />
	{/if}
{/if}

<div class="mb-24">
	{#each publicationsByYear as { year, publications: yearPublications }}
		<div class="container">
			<h4 class="mt-8 border-b pb-1 text-xl font-medium md:text-2xl">{year}</h4>
		</div>
		<Publications list={yearPublications} />
	{/each}
</div>
