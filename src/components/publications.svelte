<script lang="ts">
	import type { Publication } from '$lib/types';

	export let list: Publication[];
</script>

<div class="container">
	<ul class="ml-5 flex flex-col gap-3">
		{#each list as publication}
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
</div>
