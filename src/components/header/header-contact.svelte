<script lang="ts">
	import type { Contact } from '$lib/data';
	import { cn } from '$lib/utils';
	import HeroiconsEnvelopeSolid from '~icons/heroicons/envelope-solid';
	import IcBaselinePhone from '~icons/ic/baseline-phone';

	export let contact: Contact;

	const iconClass = 'h-5 w-5';
	const textClass = 'text-background/75';
	const contactClass = 'flex items-center gap-2';
</script>

<div class={cn($$restProps.class, 'gap-9')}>
	<div class={contactClass}>
		<HeroiconsEnvelopeSolid class={iconClass} />
		<span class={textClass}>{contact.email}</span>
	</div>
	<div class={contactClass}>
		<IcBaselinePhone class={iconClass} />
		<span class={textClass}>{contact.phone}</span>
	</div>
</div>
