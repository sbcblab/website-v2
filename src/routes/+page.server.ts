import { getDatasets, getSections, getTools } from '$lib/data';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const sections = await getSections();
	const tools = await getTools();
	const datasets = await getDatasets();

	return { sections, tools, datasets };
};
