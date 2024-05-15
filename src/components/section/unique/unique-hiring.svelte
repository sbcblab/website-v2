<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import Svg from '$components/svg.svelte';
	import { Button } from '$components/ui/button';
	import type { Hiring } from '$lib/types';

	export let component: Hiring;

	const programs = [
		{
			iconUrl: component.ppgc.iconUrl,
			link: 'https://www.inf.ufrgs.br/ppgc/en',
			description: component.ppgc.description,
			name: 'Postgraduate Program in Computing (PPGC)',
			color: 'hsl(184, 90%, 41%)'
		},
		{
			iconUrl: component.ppgbcm.iconUrl,
			link: 'https://www.ufrgs.br/ppgbcm',
			description: component.ppgbcm.description,
			name: 'Postgraduate Program in Molecular and Cell Biology (PPGBCM)',
			color: 'hsl(160, 90%, 39%)'
		}
	];
</script>

<div class="container flex flex-col items-center gap-12 text-center">
	<div class="flex flex-col items-center">
		{#if component.aboveHeading}
			<span class="font-semibold text-primary">{component.aboveHeading}</span>
		{/if}
		{#if component.heading}
			<h2 class="my-0">{component.heading}</h2>
		{/if}
		{#if component.lead}
			<p class="max-w-[42rem] text-center">{component.lead}</p>
		{/if}
	</div>

	<div class="flex flex-col gap-12 md:grid md:grid-cols-3">
		{#each [component.requirements, component.benefits] as column}
			<div class="flex flex-col gap-6">
				<strong class="text-start text-base">{column.title}</strong>
				<ul class="flex flex-col gap-6 pl-0">
					{#each column.items as { iconUrl, text }}
						<li class="flex items-center gap-4">
							<Svg src={iconUrl} class="size-8 shrink-0 text-primary" />
							<Markdown content={text} class="*:!mb-0 *:text-sm *:md:text-base" />
						</li>
					{/each}
				</ul>
			</div>
		{/each}

		<ul class="m-0 flex flex-col gap-6 p-0 text-start">
			<strong>Programs</strong>
			{#each programs as program}
				<li class="flex items-center gap-4">
					<Svg src={program.iconUrl} class="size-10 shrink-0" style={`color: ${program.color}`} />
					<div class="flex flex-col gap-1 text-base text-foreground-paragraph">
						<a
							href={program.link}
							target="_blank"
							class="text-sm font-medium transition-colors hover:text-primary-blue md:text-base"
						>
							{program.name}
						</a>
						{#if program.description}
							<span class="text-xs text-foreground-paragraph/60 md:text-sm">
								{program.description}
							</span>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>

	{#if component.apply.link}
		<Button href={component.apply.link} target="_blank">Apply</Button>
	{/if}
	{#if component.apply.text}
		<Markdown
			content={component.apply.text}
			class="apply-text max-w-[32rem] text-sm text-foreground-paragraph/60"
		/>
	{/if}
</div>
