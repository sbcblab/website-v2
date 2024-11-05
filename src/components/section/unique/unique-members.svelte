<script lang="ts">
	import type { Members } from '$lib/types';
	import Member from '$src/components/member.svelte';

	export let component: Members;
</script>

<div
	class="container mt-12 flex grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] flex-col gap-12 sm:grid sm:gap-x-10 sm:gap-y-24 sm:text-center"
>
	{#each component.members as member}
		<Member {member} />
	{/each}
</div>
