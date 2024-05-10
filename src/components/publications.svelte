<script lang="ts">
	import type { Publication } from '$lib/types';

	export let list: Publication[];
</script>

<div class="container">
	<ul class="ml-5 flex flex-col gap-4">
		{#each list as publication}
			<li class="mt-0">
				<a
					href={publication.doi}
					target="_blank"
					class="transition-all hover:text-primary hover:brightness-[.8] md:flex md:flex-col"
				>
					<span>{publication.title} </span>
					<span class="text-sm font-light text-foreground-paragraph/70">
						<span>{publication.authors?.join('; ')}</span>
						<span>
							<span>{publication.booktitle}</span>{#if publication.volume}<span
									>, v. {publication.volume}</span
								>{/if}{#if publication.pages}<span>, p. {publication.pages}</span>{/if}<span
								>, {publication.year}</span
							>
						</span>
					</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
