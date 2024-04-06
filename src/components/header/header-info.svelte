<script lang="ts">
	import SocialLinks from '$components/social-links.svelte';
	import type { Contact, Socials } from '$lib/data';
	import HeroiconsEnvelopeSolid from '~icons/heroicons/envelope-solid';
	import IcBaselinePhone from '~icons/ic/baseline-phone';

	export let contact: Contact;
	export let socials: Socials;

	const iconClass = 'h-5 w-5';
	const textClass = 'text-background/75';
	const contactClass = 'flex items-center gap-2';
</script>

<div class="bg-card text-sm text-background/50">
	<div class="container flex justify-between px-8 py-4">
		<div class="flex gap-9">
			<div class={contactClass}>
				<HeroiconsEnvelopeSolid class={iconClass} />
				<span class={textClass}>{contact.email}</span>
			</div>
			<div class={contactClass}>
				<IcBaselinePhone class={iconClass} />
				<span class={textClass}>{contact.phone}</span>
			</div>
		</div>
		<SocialLinks {socials} />
	</div>
</div>
