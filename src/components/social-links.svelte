<script lang="ts">
	import type { Socials } from '$lib/data';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiInstagramLine from '~icons/ri/instagram-line';
	import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';

	export let socials: Socials;
</script>

<div class="flex gap-6">
	<a href={socials.twitter}>
		<RiTwitterXFill class="h-6 w-6 hover:text-card-foreground/70" />
	</a>
	<a href={socials.instagram}>
		<RiInstagramLine class="h-6 w-6 hover:text-card-foreground/70" />
	</a>
	<a href={socials.github}>
		<RiGithubFill class="h-6 w-6 hover:text-card-foreground/70" />
	</a>
	<a href={socials.linkedin}>
		<RiLinkedinBoxFill class="h-6 w-6 hover:text-card-foreground/70" />
	</a>
</div>
