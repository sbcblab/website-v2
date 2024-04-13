<script lang="ts">
	import type { Contact } from '$lib/data';
	import { cn } from '$lib/utils';
	import HeroiconsEnvelopeSolid from '~icons/heroicons/envelope-solid';
	import IcBaselinePhone from '~icons/ic/baseline-phone';

	export let contact: Contact;

	const iconClass = 'h-5 w-5';
	const textClass = 'text-background/70 text-sm';
	const contactClass = 'flex items-center gap-3';
</script>

<div class={cn($$restProps.class, 'gap-10')}>
	<div class={contactClass}>
		<HeroiconsEnvelopeSolid class={iconClass} />
		<span class={textClass}>{contact.email}</span>
	</div>
	<div class={contactClass}>
		<IcBaselinePhone class={iconClass} />
		<span class={textClass}>{contact.phone}</span>
	</div>
</div>
