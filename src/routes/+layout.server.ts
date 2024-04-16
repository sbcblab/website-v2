import { getContact, getNav, getSections, getSocials } from '$lib/data';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const sectionsPromise = getSections();
	const socialsPromise = getSocials();
	const contactPromise = getContact();
	const navPromise = getNav();

	const [sections, socials, contact, nav] = await Promise.all([
		sectionsPromise,
		socialsPromise,
		contactPromise,
		navPromise
	]);

	return { sections, socials, contact, nav };
};
