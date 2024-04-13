import { getContact, getNav, getSocials } from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const socialsPromise = getSocials();
	const contactPromise = getContact();
	const navPromise = getNav();

	const [socials, contact, nav] = await Promise.all([socialsPromise, contactPromise, navPromise]);

	return { socials, contact, nav };
};
