<script lang="ts">
	import { HeaderContactPopover } from '$components/header';
	import type { Contact } from '$lib/data';
	import { cn } from '$lib/utils';
	import EnvelopeIcon from '~icons/heroicons/envelope-solid';
	import PhoneIcon from '~icons/ic/baseline-phone';

	export let contact: Contact;
</script>

<div class={cn($$restProps.class, 'flex items-center gap-3')}>
	<HeaderContactPopover icon={EnvelopeIcon} text={contact.email} />
	<HeaderContactPopover icon={PhoneIcon} text={contact.phone} />
</div>
