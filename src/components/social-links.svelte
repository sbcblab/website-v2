<script lang="ts">
	import type { Socials } from '$lib/data';
	import { cn } from '$lib/utils';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiInstagramLine from '~icons/ri/instagram-line';
	import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';

	export let socials: Socials;

	const linkClass = 'transition-colors hover:text-card-foreground/75';
	const iconClass = 'h-6 w-6';
</script>

<div class={cn($$restProps.class, 'flex items-center gap-6')}>
	<a href={socials.twitter} class={linkClass} target="_blank">
		<RiTwitterXFill class={iconClass} />
	</a>
	<a href={socials.instagram} class={linkClass} target="_blank">
		<RiInstagramLine class={iconClass} />
	</a>
	<a href={socials.github} class={linkClass} target="_blank">
		<RiGithubFill class={iconClass} />
	</a>
	<a href={socials.linkedin} class={linkClass} target="_blank">
		<RiLinkedinBoxFill class={iconClass} />
	</a>
</div>
