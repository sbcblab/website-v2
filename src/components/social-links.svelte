<script lang="ts">
	import type { Socials } from '$lib/data';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiInstagramLine from '~icons/ri/instagram-line';
	import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';

	export let socials: Socials;

	const linkClass = 'transition-colors duration-150 hover:text-card-foreground/70';
	const iconClass = 'h-6 w-6';
</script>

<div class="flex gap-6">
	<a href={socials.twitter} class={linkClass}>
		<RiTwitterXFill class={iconClass} />
	</a>
	<a href={socials.instagram} class={linkClass}>
		<RiInstagramLine class={iconClass} />
	</a>
	<a href={socials.github} class={linkClass}>
		<RiGithubFill class={iconClass} />
	</a>
	<a href={socials.linkedin} class={linkClass}>
		<RiLinkedinBoxFill class={iconClass} />
	</a>
</div>
