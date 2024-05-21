<script lang="ts">
	import type { PublicationList } from '$lib/types';
	import { cn } from '$lib/utils';

	export let component: PublicationList;
</script>

<div class={cn('container my-6', $$restProps.class)}>
	<ul class="!m-0 flex flex-col gap-4">
		{#each [...component.externalPublications, ...component.publications] as publication}
			{@const details = [
				publication.booktitle,
				publication.volume && `v. ${publication.volume}`,
				publication.pages && `p. ${publication.pages}`,
				publication.year
			].filter(Boolean)}

			<li class="!m-0">
				<a
					href={publication.doi}
					target="_blank"
					class="text-foreground transition-all hover:text-primary hover:brightness-[.8] md:flex md:flex-col md:gap-0.5"
				>
					<span class="text-base">{publication.title}</span>
					<span class="text-sm text-foreground-paragraph/60">
						<span>
							{Array.isArray(publication.authors)
								? publication.authors.join('; ')
								: publication.authors}
						</span>
						<span>{details.join(', ')}.</span>
					</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
