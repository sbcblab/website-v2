import {
	getContact,
	getNav,
	getProjectPages,
	getPublications,
	getSections,
	getSocials,
	getToolDatasetPages
} from '$lib/data';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const sectionsPromise = getSections();
	const socialsPromise = getSocials();
	const contactPromise = getContact();
	const navPromise = getNav();
	const publicationsPromise = getPublications();
	const projectPagesPromise = getProjectPages();
	const toolDatasetPagesPromise = getToolDatasetPages();

	const [sections, socials, contact, nav, publications, projectPages, toolDatasetPages] =
		await Promise.all([
			sectionsPromise,
			socialsPromise,
			contactPromise,
			navPromise,
			publicationsPromise,
			projectPagesPromise,
			toolDatasetPagesPromise
		]);

	return { sections, socials, contact, nav, publications, projectPages, toolDatasetPages };
};
