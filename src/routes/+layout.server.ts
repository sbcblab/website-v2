import { getContact, getSocials } from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const socialsPromise = getSocials();
	const contactPromise = getContact();

	const [socials, contact] = await Promise.all([socialsPromise, contactPromise]);

	return { socials, contact };
};
