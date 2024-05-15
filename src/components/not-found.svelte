<script lang="ts">
	import { Button } from '$components/ui/button';
	import PhArrowLeftBold from '~icons/ph/arrow-left-bold';
</script>

<div class="flex grow flex-col items-center justify-center text-center">
	<span class="font-semibold text-primary">404</span>
	<h2 class="my-0">Page not found</h2>
	<span class="mt-3 max-w-[38rem] text-foreground-paragraph md:text-lg">
		Sorry, we couldn’t find the page you’re looking for.
	</span>
	<Button href="/" class="mt-8 flex items-center gap-2">
		<PhArrowLeftBold class="size-4" />
		<span>Back to home</span>
	</Button>
</div>
