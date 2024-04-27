<script lang="ts">
	import { HeaderNavItem } from '$components/header';
	import * as Dropdown from '$components/ui/dropdown';
	import type { NavLink } from '$lib/data';

	export let link: NavLink;
</script>

<Dropdown.Menu let:open>
	<HeaderNavItem {link} />
	<Dropdown.Content {open}>
		{#if link.subLinks}
			{#each link.subLinks as subLink}
				{#if !subLink.subLinks}
					<Dropdown.Item href={subLink.href}>{subLink.label}</Dropdown.Item>
				{:else}
					<Dropdown.SubMenu let:open={subOpen} href={subLink.href}>
						{subLink.label}
						<Dropdown.SubContent open={subOpen}>
							{#each subLink.subLinks as subSubLink}
								<Dropdown.Item href={subSubLink.href}>{subSubLink.label}</Dropdown.Item>
							{/each}
						</Dropdown.SubContent>
					</Dropdown.SubMenu>
				{/if}
			{/each}
		{/if}
	</Dropdown.Content>
</Dropdown.Menu>
