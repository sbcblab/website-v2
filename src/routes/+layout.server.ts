import { getContact, getNav, getPublications, getSections, getSocials } from '$lib/data';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const sectionsPromise = getSections();
	const socialsPromise = getSocials();
	const contactPromise = getContact();
	const navPromise = getNav();
	const publicationsPromise = getPublications();

	const [sections, socials, contact, nav, publications] = await Promise.all([
		sectionsPromise,
		socialsPromise,
		contactPromise,
		navPromise,
		publicationsPromise
	]);

	return { sections, socials, contact, nav, publications };
};
