import { getSections } from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const sections = await getSections('research');

	return { sections };
};
