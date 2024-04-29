<script lang="ts">
	import type { Socials } from '$lib/types';
	import { cn } from '$lib/utils';
	import GithubIcon from '~icons/ri/github-fill';
	import InstagramIcon from '~icons/ri/instagram-line';
	import LinkedinIcon from '~icons/ri/linkedin-box-fill';
	import TwitterIcon from '~icons/ri/twitter-x-fill';

	export let socials: Socials;

	const items = [
		{ href: socials.twitter, icon: TwitterIcon },
		{ href: socials.instagram, icon: InstagramIcon },
		{ href: socials.github, icon: GithubIcon },
		{ href: socials.linkedin, icon: LinkedinIcon }
	];
</script>

<div class={cn('flex items-center gap-4 md:gap-5', $$restProps.class)}>
	{#each items as item}
		<a
			href={item.href}
			target="_blank"
			class="text-card-foreground/75 transition-colors hover:text-card-foreground"
		>
			<svelte:component this={item.icon} class="h-5 w-5" />
		</a>
	{/each}
</div>
