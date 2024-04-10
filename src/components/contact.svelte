<script lang="ts">
	import type { ContactSection } from '$lib/data';
	import RiHome2Fill from '~icons/ri/home-2-fill';
	import RiMailFill from '~icons/ri/mail-fill';
	import RiMapPinFill from '~icons/ri/map-pin-fill';
	import RiPhoneFill from '~icons/ri/phone-fill';

	export let component: {
		contact: ContactSection;
	};

	const { contact } = component;
</script>

<div class="flex flex-col gap-12">
	<div class="flex flex-col gap-8">
		<span class="text-2xl font-medium">{contact.subheading}</span>
		<div class="flex flex-col gap-2 text-sm">
			{#if contact.showEmail}
				<div class="flex items-center gap-2">
					<RiMailFill class="h-4 w-4 text-primary-solid" />
					<span>{contact.info.email}</span>
				</div>
			{/if}
			{#if contact.showPhone}
				<div class="flex items-center gap-2">
					<RiPhoneFill class="h-4 w-4 text-primary-solid" />
					<span>{contact.info.phone}</span>
				</div>
			{/if}
			{#if contact.showLocation}
				<div class="flex items-center gap-2">
					<RiHome2Fill class="h-4 w-4 text-primary-solid" />
					<span>{contact.info.location}</span>
				</div>
			{/if}
			{#if contact.showAddress}
				<div class="flex items-center gap-2">
					<RiMapPinFill class="h-4 w-4 text-primary-solid" />
					<span>{contact.info.address}</span>
				</div>
			{/if}
		</div>
	</div>
</div>
