<script lang="ts">
	import { HeaderNavDropdown, HeaderNavItem } from '$components/header';
	import { cn } from '$lib/utils';

	const pages = [
		{ label: 'Home', href: '/' },
		{
			label: 'Research',
			href: '/research',
			subpages: [
				{
					label: 'Tools',
					href: '/research#tools-datasets',
					subpages: [
						{ label: 'BR-EASE', href: '/brease' },
						{ label: 'ConfID', href: '/confid' },
						{ label: 'COVID-19', href: '/covid' },
						{ label: 'NIAS', href: '/nias' },
						{ label: 'GEVA', href: 'https://github.com/sbcblab/geva' },
						{ label: 'N3O', href: 'https://github.com/sbcblab/NEAT-Microarray' },
						{ label: 'RelAgg', href: 'https://github.com/sbcblab/RelAgg' }
					]
				},
				{
					label: 'Datasets',
					href: '/research#tools-datasets',
					subpages: [
						{ label: 'Angle Probability List', href: '/apl' },
						{ label: 'BARRA:CuRDa', href: '/barracurda' },
						{ label: 'CuMiDa', href: '/cumida' }
					]
				},
				{ label: 'Publications', href: '/research#publications' },
				{ label: 'Laboratory Facilities', href: '/research#facilities' }
			]
		},
		{ label: 'Projects', href: '/projects' },
		{ label: 'Members', href: '/team' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<nav class={cn($$props.class)}>
	{#each pages as page}
		{#if !page.subpages}
			<HeaderNavItem {page} />
		{:else}
			<HeaderNavDropdown {page} />
		{/if}
	{/each}
</nav>
