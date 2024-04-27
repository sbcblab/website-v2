<script lang="ts">
	import type { Project } from '$lib/data';

	export let component: {
		projects: Project[];
	};

	const { projects } = component;
</script>

<div class="container flex flex-col gap-8">
	{#each projects as project}
		<div class="space-y-4 border p-4">
			<a href={`https://sbcb.inf.ufrgs.br${project.link}`} target="_blank" class="text-foreground">
				<h3 class="text-xl/[1.25]">{project.title}</h3>
			</a>
			<div class="flex gap-4">
				<img src={project.imageUrl} alt={project.title} class="h-52 rounded-md" />
				<div class="flex h-52 flex-col justify-between gap-4 text-sm/[1.5]">
					<span class="overflow-hidden text-ellipsis whitespace-pre-line">
						{project.description}
					</span>
					<a
						href={`https://sbcb.inf.ufrgs.br${project.link}`}
						target="_blank"
						class="font-medium text-primary transition-opacity hover:opacity-70">Read more</a
					>
				</div>
			</div>
		</div>
	{/each}
</div>
