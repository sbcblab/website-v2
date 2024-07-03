<script lang="ts">
	import { isExternalLink } from '$src/lib/utils';

	export let href: string | undefined = undefined;
</script>

<a
	{href}
	target={isExternalLink(href || '') ? '_blank' : ''}
	class="flex cursor-pointer py-2 pl-4 pr-12 hover:bg-background/10"
>
	<slot />
</a>
