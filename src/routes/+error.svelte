<script lang="ts">
	import PhArrowLeftBold from '~icons/ph/arrow-left-bold';
</script>

<div
	class="align-center absolute left-1/2 top-1/2 my-auto flex w-full -translate-x-1/2 -translate-y-1/2 flex-col gap-2 text-center"
>
	<span class="text-lg font-medium text-primary">404</span>
	<span class="text-5xl font-semibold">Page not found</span>
	<span class="text-foreground/70">Sorry, we couldn’t find the page you’re looking for.</span>
	<a
		href="/"
		class="mx-auto mt-6 flex w-fit items-center justify-center gap-1 p-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
	>
		<PhArrowLeftBold class="h-4 w-4" />
		<span>Back to home</span>
	</a>
</div>
