<script lang="ts">
	import type { Publications } from '$lib/types';

	export let component: Publications;

	const { publications } = component;
</script>

<div class="container mb-24">
	{#each publications as { year, publications: yearPublications }}
		<h3 class="mt-8 border-b pb-1 text-2xl font-medium">{year}</h3>
		<ul class="my-2 flex flex-col gap-2">
			{#each yearPublications as publication}
				<li>
					<a
						href={publication.doi}
						target="_blank"
						class="block text-sm font-light transition-all hover:text-primary hover:brightness-[.8]"
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
