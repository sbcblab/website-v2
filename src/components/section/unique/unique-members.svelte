<script lang="ts">
	import type { Members } from '$lib/types';
	import { cn } from '$lib/utils';
	import DblpIcon from '~icons/academicons/dblp-square';
	import GoogleScholarIcon from '~icons/academicons/google-scholar-square';
	import LattesIcon from '~icons/academicons/lattes-square';
	import OrcidIcon from '~icons/academicons/orcid-square';
	import ResearchGateIcon from '~icons/academicons/researchgate-square';

	export let component: Members;

	const links: {
		slug: 'googleScholar' | 'orcid' | 'researchGate' | 'lattes' | 'dblp';
		icon: any;
	}[] = [
		{ slug: 'googleScholar', icon: GoogleScholarIcon },
		{ slug: 'orcid', icon: OrcidIcon },
		{ slug: 'researchGate', icon: ResearchGateIcon },
		{ slug: 'lattes', icon: LattesIcon },
		{ slug: 'dblp', icon: DblpIcon }
	];
</script>

<div
	class="container mt-12 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-16 sm:text-center md:grid-cols-3 lg:grid-cols-4"
>
	{#each component.members as member}
		<div class="flex items-center gap-5 sm:flex-col sm:items-stretch">
			<img
				src={member.pictureUrl}
				alt={member.name}
				class="aspect-square h-full max-w-[35%] rounded-md object-cover sm:max-w-none"
			/>
			<div class="flex flex-col gap-5 sm:h-full">
				<div class="flex flex-col gap-0.5">
					<span class="text-lg/[1.2] font-medium sm:text-xl">{member.name}</span>
					<span class="text-xs font-medium text-primary">{member.role}</span>
				</div>
				<span class="text-xs font-light text-foreground-paragraph sm:grow sm:text-sm"
					>{member.areas.join(', ')}</span
				>
				<div class="flex gap-0.5 sm:justify-center">
					{#each links as { slug, icon }}
						<a
							href={member[slug]}
							target="_blank"
							class={cn(
								'text-foreground-paragraph/30 transition-colors hover:opacity-100',
								member[slug] && 'hover:text-foreground-paragraph/75'
							)}
						>
							<svelte:component this={icon} class="h-7 w-7 sm:h-9 sm:w-9" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
