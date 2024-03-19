import { getContact, getSocials } from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const socials = await getSocials();
	const contact = await getContact();

	return { socials, contact };
};
