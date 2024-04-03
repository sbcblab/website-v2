<script lang="ts">
	import type { Member } from '$lib/data';
	import { cn } from '$lib/utils';
	import AcademiconsDblpSquare from '~icons/academicons/dblp-square';
	import AcademiconsGoogleScholarSquare from '~icons/academicons/google-scholar-square';
	import AcademiconsLattesSquare from '~icons/academicons/lattes-square';
	import AcademiconsOrcidSquare from '~icons/academicons/orcid-square';
	import AcademiconsResearchgateSquare from '~icons/academicons/researchgate-square';

	export let component: {
		members: Member[];
	};

	const { members } = component;
</script>

<div class="mt-16 grid grid-cols-4 gap-10 gap-y-16">
	{#each members as member}
		<div class="flex flex-col gap-4 text-sm">
			<img
				src={member.pictureUrl}
				alt={member.name}
				class="aspect-square rounded-lg object-cover"
			/>
			<div class="flex flex-col gap-1">
				<span class="text-[1.1875rem]">{member.name}</span>
				<span class="font-medium text-primary-solid">{member.role}</span>
			</div>
			<span class="font-medium text-foreground/80">{member.areas.join(', ')}</span>
			<div class="mt-auto flex text-[2rem] [&>a]:text-foreground/80">
				<a
					href={member.googleScholar}
					target="_blank"
					class={cn(!member.googleScholar && 'hover:opacity-100')}
				>
					<AcademiconsGoogleScholarSquare />
				</a>
				<a href={member.orcid} target="_blank" class={cn(!member.orcid && 'hover:opacity-100')}>
					<AcademiconsOrcidSquare />
				</a>
				<a
					href={member.researchGate}
					target="_blank"
					class={cn(!member.researchGate && 'hover:opacity-100')}
				>
					<AcademiconsResearchgateSquare />
				</a>
				<a href={member.lattes} target="_blank" class={cn(!member.lattes && 'hover:opacity-100')}>
					<AcademiconsLattesSquare />
				</a>
				<a href={member.dblp} target="_blank" class={cn(!member.dblp && '!opacity-100')}>
					<AcademiconsDblpSquare />
				</a>
			</div>
		</div>
	{/each}
</div>
