<script lang="ts">
	import { Button } from '$components/ui/button';
	import type { Projects } from '$lib/types';

	export let component: Projects;

	const { projects } = component;
</script>

<div class="container mt-24 flex flex-col gap-24 md:mt-12 md:gap-12">
	{#each projects as project}
		<div
			class="flex flex-col items-center gap-8 rounded-lg text-center transition-shadow duration-200 md:flex-row md:p-8 md:text-start md:hover:shadow-[0_0_25px_-7px_rgba(0,0,0,0.2)]"
		>
			<a href={`https://sbcb.inf.ufrgs.br${project.link}`} target="_blank" class="shrink-0">
				<img
					src={project.imageUrl}
					alt={project.title}
					class="aspect-square w-64 rounded-lg object-contain"
				/>
			</a>
			<div class="flex flex-col items-center gap-8 md:items-start">
				<a href={`https://sbcb.inf.ufrgs.br${project.link}`} target="_blank">
					<h3 class="text-lg font-medium md:text-xl">{project.title}</h3>
				</a>
				<span class="text-sm font-light text-foreground-paragraph md:text-base"
					>{project.description}</span
				>
				<Button
					href={`https://sbcb.inf.ufrgs.br${project.link}`}
					target="_blank"
					class="rounded-full"
				>
					Read more
				</Button>
			</div>
		</div>
	{/each}
</div>
