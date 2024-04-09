<script lang="ts">
	import type { Contact } from '$lib/data';
	import { cn } from '$lib/utils';
	import EnvelopeIcon from '~icons/heroicons/envelope-solid';
	import PhoneIcon from '~icons/ic/baseline-phone';
	import ContactPopover from '../contact-popover.svelte';

	export let contact: Contact;
</script>

<div class={cn($$restProps.class, 'flex items-center gap-3')}>
	<ContactPopover icon={EnvelopeIcon} text={contact.email} />
	<ContactPopover icon={PhoneIcon} text={contact.phone} />
</div>
