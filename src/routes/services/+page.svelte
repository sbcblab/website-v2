<script lang="ts">
	import Section from '$components/section';
	import GlobeIcon from '~icons/lucide/globe';

	export let data;
	const { content, defaultLocale } = data;

	let locale: 'en' | 'pt' = defaultLocale;
</script>

<Section section={content[locale]} />

<button
	on:click={() => (locale = locale == 'en' ? 'pt' : 'en')}
	class="fixed bottom-4 right-4 z-50 !m-0 flex items-center gap-1.5 rounded-lg bg-card/20 px-3 py-2 text-white backdrop-blur-sm transition-all active:scale-95 active:bg-card/60 md:bottom-8 md:right-8 md:hover:bg-card/60"
>
	<GlobeIcon class="text-xs opacity-75" />
	{locale}
</button>
