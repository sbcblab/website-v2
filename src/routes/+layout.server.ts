import {
	getContact,
	getNav,
	getProjectPages,
	getPublications,
	getSections,
	getSocials
} from '$lib/data';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	const sectionsPromise = getSections();
	const socialsPromise = getSocials();
	const contactPromise = getContact();
	const navPromise = getNav();
	const publicationsPromise = getPublications();
	const projectPagesPromise = getProjectPages();

	const [sections, socials, contact, nav, publications, projectPages] = await Promise.all([
		sectionsPromise,
		socialsPromise,
		contactPromise,
		navPromise,
		publicationsPromise,
		projectPagesPromise
	]);

	return { sections, socials, contact, nav, publications, projectPages };
};
