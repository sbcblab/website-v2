<script lang="ts">
	import type { Member } from '$lib/types';
	import DblpIcon from '~icons/academicons/dblp-square';
	import GoogleScholarIcon from '~icons/academicons/google-scholar-square';
	import LattesIcon from '~icons/academicons/lattes-square';
	import OrcidIcon from '~icons/academicons/orcid-square';
	import ResearchGateIcon from '~icons/academicons/researchgate-square';

	export let member: Member;

	const { name, pictureUrl, role, areas, googleScholar, orcid, researchGate, lattes, dblp } =
		member;
	const links: {
		slug: 'googleScholar' | 'orcid' | 'researchGate' | 'lattes' | 'dblp';
		icon: typeof DblpIcon;
	}[] = [
		{ slug: 'googleScholar', icon: GoogleScholarIcon },
		{ slug: 'orcid', icon: OrcidIcon },
		{ slug: 'researchGate', icon: ResearchGateIcon },
		{ slug: 'lattes', icon: LattesIcon },
		{ slug: 'dblp', icon: DblpIcon }
	];
</script>

<div class="grid grid-cols-5 flex-col items-center gap-5 sm:flex">
	<div class="col-span-2 overflow-hidden rounded-md bg-gray-200 max-sm:relative max-sm:h-full">
		<img src={pictureUrl} alt={name} class="h-full w-full object-cover max-sm:absolute" />
	</div>
	<div class="col-span-3 flex grow flex-col">
		<div class="mb-0.5 text-xl">{name}</div>
		<div class="mb-3 text-sm font-medium text-primary">{role}</div>
		<div class="mb-6 flex flex-wrap gap-x-0.5 gap-y-2 sm:justify-center">
			{#each areas as area}
				<span class="rounded-md bg-gray-100 px-2 text-xs text-gray-500">{area}</span>
			{/each}
		</div>
		<div class="mt-auto flex gap-[1px] sm:justify-center">
			{#each links as { slug, icon }}
				{@const href = member[slug]}
				<a {href} target="_blank">
					<svelte:component
						this={icon}
						class="size-8 text-gray-300 sm:size-9 {href &&
							'transition-colors duration-75 hover:text-gray-500'}"
					/>
				</a>
			{/each}
		</div>
	</div>
</div>
