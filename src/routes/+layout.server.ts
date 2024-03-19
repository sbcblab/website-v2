import { getSocials } from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const socials = await getSocials();

	return { socials };
};
