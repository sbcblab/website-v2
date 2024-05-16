<script lang="ts">
	import { Button } from '$components/ui/button';
	import type { Projects } from '$lib/types';
	import { isExternalLink } from '$src/lib/utils';

	export let component: Projects;
</script>

<div class="container mt-24 flex flex-col gap-24 md:mt-12 md:gap-12">
	{#each component.projects as project}
		<div
			class="flex flex-col items-center gap-8 rounded-lg text-center transition-shadow duration-200 md:flex-row md:p-8 md:text-start md:hover:shadow-[0_0_25px_-7px_rgba(0,0,0,0.2)]"
		>
			<a
				href={project.link}
				target={isExternalLink(project.link || '') ? '_blank' : ''}
				class="shrink-0"
			>
				<img
					src={project.imageUrl}
					alt={project.title}
					class="aspect-square w-64 rounded-lg object-contain"
				/>
			</a>
			<div class="flex flex-col items-center gap-8 md:items-start">
				<a href={project.link} target={isExternalLink(project.link || '') ? '_blank' : ''}>
					<span class="text-lg font-medium md:text-xl">{project.title}</span>
				</a>
				<span class="text-sm font-light text-foreground-paragraph md:text-base">
					{project.description}
				</span>
				{#if project.link}
					<Button href={project.link} target={isExternalLink(project.link || '') ? '_blank' : ''}>
						Read more
					</Button>
				{/if}
			</div>
		</div>
	{/each}
</div>
