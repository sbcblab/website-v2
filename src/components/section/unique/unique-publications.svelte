<script lang="ts">
	import type { Publication } from '$lib/data';

	export let component: {
		publications: {
			year: string;
			publications: Publication[];
		}[];
	};

	const { publications } = component;
</script>

<div class="container mb-20">
	{#each publications as yearPublications}
		<h3 class="mt-6 text-xl font-medium">{yearPublications.year}</h3>
		<ul class="my-2 flex flex-col gap-2">
			{#each yearPublications.publications as publication}
				<li>
					<a
						href={publication.link}
						target="_blank"
						class="block text-sm font-light text-foreground transition-none"
					>
						<span>{publication.authors?.join('; ')} </span><span class="font-medium">
							{publication.title}</span
						><span>. {publication.journal}</span>{#if publication.volume}<span
								>, v. {publication.volume}</span
							>{/if}<span>, p. {publication.startPage}</span>{#if publication.endPage}<span>
								- {publication.endPage}</span
							>{/if}<span>, {publication.publishDate.getFullYear()}.</span>
					</a>
				</li>
			{/each}
		</ul>
	{/each}
</div>
