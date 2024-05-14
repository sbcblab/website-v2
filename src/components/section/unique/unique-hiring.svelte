<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import Svg from '$components/svg.svelte';
	import { Button } from '$components/ui/button';
	import type { Hiring } from '$lib/types';

	export let component: Hiring;
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
							<Markdown content={text} class="*:!mb-0 *:text-base" />
						</li>
					{/each}
				</ul>
			</div>
		{/each}

		<div class="flex flex-col gap-6 text-start">
			<strong>Programs</strong>
			<div class="flex items-center gap-4">
				<Svg src={component.ppgc.iconUrl} class="size-10 shrink-0 text-primary-blue" />
				<div class="flex flex-col gap-1 text-base text-foreground-paragraph">
					<a
						href="https://www.inf.ufrgs.br/ppgc/en"
						target="_blank"
						class="font-medium transition-colors hover:text-primary-blue"
					>
						Postgraduate Program in Computing (PPGC)
					</a>
					{#if component.ppgc.description}
						<span class="text-sm text-foreground-paragraph/60">
							{component.ppgc.description}
						</span>
					{/if}
				</div>
			</div>
			<div class="flex items-center gap-4">
				<Svg src={component.ppgbcm.iconUrl} class="size-10 shrink-0 text-primary-green" />
				<div class="flex flex-col gap-1 text-foreground-paragraph">
					<a
						href="https://www.ufrgs.br/ppgbcm"
						target="_blank"
						class="font-medium transition-colors hover:text-primary-green"
					>
						Postgraduate Program in Molecular and Cell Biology (PPGBCM)
					</a>
					{#if component.ppgbcm.description}
						<span class="text-sm text-foreground-paragraph/60">
							{component.ppgbcm.description}
						</span>
					{/if}
				</div>
			</div>
		</div>
	</div>

	{#if component.apply.link}
		<Button href={component.apply.link} target="_blank" class="px-5">Apply</Button>
	{/if}
	{#if component.apply.text}
		<Markdown
			content={component.apply.text}
			class="apply-text max-w-[32rem] text-sm text-foreground-paragraph/60"
		/>
	{/if}
</div>
