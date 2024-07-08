<script lang="ts">
	import {
		Heading1,
		Heading2,
		PublicationList as PublicationList1
	} from '$components/section/general';
	import type { Publication, Publications } from '$lib/types';
	import { cn, groupPublications } from '$lib/utils';
	import { getContext } from 'svelte';
	import BookChapterIcon from '~icons/solar/book-bold-duotone';
	import ProceedingIcon from '~icons/solar/document-bold-duotone';
	import JournalIcon from '~icons/solar/notebook-minimalistic-bold-duotone';

	export let component: Publications;

	const publications: Publication[] = getContext('publications');
	const groupedPublications = groupPublications(publications);

	const types = [
		{ name: 'Journals', icon: JournalIcon, key: 'Journal Paper' },
		{ name: 'Proceedings', icon: ProceedingIcon, key: 'Conference Paper' },
		{ name: 'Book Chapters', icon: BookChapterIcon, key: 'Book Chapter' }
	];

	let selectedTypeKey: string = types[0].key;
</script>

{#if component.heading}
	{#if component.headingType === 'h1'}
		<Heading1 component={{ text: component.heading }} />
	{:else}
		<Heading2 component={{ text: component.heading }} />
	{/if}
{/if}

<div class="flex flex-col gap-12">
	<div class="container flex flex-wrap justify-center gap-4 font-medium md:justify-start">
		{#each types as { name, icon, key }}
			<button
				on:click={() => (selectedTypeKey = key)}
				class={cn(
					'flex items-center justify-center gap-2.5 rounded-full px-5 py-2.5',
					key === selectedTypeKey
						? 'bg-primary/10 text-primary'
						: 'bg-gray-500/5 text-gray-400 transition-colors hover:bg-gray-500/10'
				)}
			>
				<svelte:component this={icon} class="h-7 w-7" />
				<span>{name}</span>
			</button>
		{/each}
	</div>

	{#each groupedPublications[selectedTypeKey] as { year, publications: yearPublications }}
		<div class="flex flex-col gap-5">
			<div class="container">
				<h4 class="m-0 border-b pb-1 text-start text-lg font-bold text-primary">{year}</h4>
			</div>
			<PublicationList1
				component={{ publications: yearPublications, externalPublications: [] }}
				class="my-0"
			/>
		</div>
	{/each}
</div>
