<script lang="ts">
	import type { Members } from '$lib/types';
	import { cn } from '$lib/utils';
	import DblpIcon from '~icons/academicons/dblp';
	import GoogleScholarIcon from '~icons/academicons/google-scholar';
	import LattesIcon from '~icons/academicons/lattes';
	import OrcidIcon from '~icons/academicons/orcid';
	import ResearchGateIcon from '~icons/academicons/researchgate';

	export let component: Members;

	const { members } = component;

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

<div class="container grid grid-cols-4 gap-x-4 gap-y-16 text-center md:gap-x-6 md:text-start">
	{#each members as member}
		<div
			class="col-span-2 flex flex-col gap-4 text-sm last:odd:col-start-2 md:col-span-1 md:last:odd:col-start-auto"
		>
			<img
				src={member.pictureUrl}
				alt={member.name}
				class="aspect-square rounded-md object-cover"
			/>
			<div class="flex flex-col gap-1">
				<span class="text-[1.1875rem]">{member.name}</span>
				<span class="font-medium text-primary">{member.role}</span>
			</div>
			<div class="flex grow flex-col justify-between gap-5">
				<span class="font-medium text-foreground-paragraph">{member.areas.join(', ')}</span>
				<div class="flex flex-wrap justify-center gap-2 text-[2rem] md:justify-start">
					{#each links as { slug, icon }}
						<a
							href={member[slug]}
							target="_blank"
							class={cn(
								'text-foreground-paragraph/30 transition-colors hover:opacity-100',
								member[slug] && 'hover:text-foreground-paragraph/75'
							)}
						>
							<svelte:component this={icon} class="h-6 w-6" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
