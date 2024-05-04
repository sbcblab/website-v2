<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import Svg from '$components/svg.svelte';
	import { Button } from '$components/ui/button';
	import type { Hiring } from '$lib/types';

	export let component: Hiring;
</script>

<div class="container my-32 flex flex-col items-center gap-12 py-12 text-center">
	<div class="flex flex-col items-center gap-2">
		{#if component.aboveHeading}
			<span class="font-semibold text-primary">{component.aboveHeading}</span>
		{/if}
		{#if component.heading}
			<h2>{component.heading}</h2>
		{/if}
		{#if component.lead}
			<span class="mt-5 max-w-[38rem] text-foreground-paragraph md:text-lg">{component.lead}</span>
		{/if}
	</div>

	<div class="flex flex-col gap-12 md:grid md:grid-cols-3">
		{#each [component.requirements, component.benefits] as column}
			<div class="flex flex-col gap-5">
				<strong class="text-start">{column.title}</strong>
				{#each column.items as { iconUrl, text }}
					<div class="flex items-center gap-3">
						<Svg src={iconUrl} class="h-6 w-6 shrink-0 text-primary" />
						<Markdown
							content={text}
							class="strong-medium font-light text-foreground-paragraph *:m-0 *:text-start *:text-sm"
						/>
					</div>
				{/each}
			</div>
		{/each}

		<div class="flex flex-col gap-5 text-start">
			<strong class="text-start">Programs</strong>
			<div class="flex items-center gap-3">
				<Svg src={component.ppgc.iconUrl} class="h-10 w-10 shrink-0 text-primary-blue" />
				<div class="flex flex-col gap-1 text-sm text-foreground-paragraph">
					<a
						href="https://www.inf.ufrgs.br/ppgc/en"
						target="_blank"
						class="font-medium transition-colors hover:text-primary-blue"
					>
						Postgraduate Program in Computing (PPGC)
					</a>
					{#if component.ppgc.description}
						<span class="text-xs font-light">
							{component.ppgc.description}
						</span>
					{/if}
				</div>
			</div>
			<div class="flex items-center gap-3">
				<Svg src={component.ppgbcm.iconUrl} class="h-10 w-10 shrink-0 text-primary-green" />
				<div class="flex flex-col gap-1 text-sm text-foreground-paragraph">
					<a
						href="https://www.ufrgs.br/ppgbcm"
						target="_blank"
						class="font-medium transition-colors hover:text-primary-green"
					>
						Postgraduate Program in Molecular and Cell Biology (PPGBCM)
					</a>
					{#if component.ppgbcm.description}
						<span class="text-xs font-light">
							{component.ppgbcm.description}
						</span>
					{/if}
				</div>
			</div>
		</div>
	</div>

	{#if component.apply.link}
		<Button href={component.apply.link} target="_blank" size="sm" class="rounded-full px-5">
			Apply
		</Button>
	{/if}
	{#if component.apply.text}
		<Markdown content={component.apply.text} class="apply-text" />
	{/if}
</div>
