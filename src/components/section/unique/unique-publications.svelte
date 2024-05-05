<script lang="ts">
	import { Heading1, Heading2 } from '$components/section/general';
	import type { Publication, Publications } from '$lib/types';
	import { groupPublicationsByYear } from '$lib/utils';
	import { getContext } from 'svelte';

	export let component: Publications;

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

<div class="container mb-24">
	{#each publicationsByYear as { year, publications: yearPublications }}
		<h4 class="mt-8 border-b pb-1 text-xl font-medium md:text-2xl">{year}</h4>
		<ul class="my-2 flex flex-col gap-3">
			{#each yearPublications as publication}
				<li>
					<a
						href={publication.doi}
						target="_blank"
						class="block text-xs font-light transition-all hover:text-primary hover:brightness-[.8] md:text-sm"
					>
						<span>{publication.authors?.join('; ')} </span><span class="font-medium">
							{publication.title}</span
						><span>. {publication.booktitle}</span>{#if publication.volume}<span
								>, v. {publication.volume}</span
							>{/if}{#if publication.pages}<span>, p. {publication.pages}</span>{/if}<span
							>, {publication.year}.</span
						>
					</a>
				</li>
			{/each}
		</ul>
	{/each}
</div>
