import { STRAPI_API_TOKEN } from '$env/static/private';
import { PUBLIC_STRAPI_URL } from '$env/static/public';
import { processContent } from '$src/lib/content';
import { POPULATE_GENERAL, POPULATE_UNIQUE } from '$src/lib/data';
import qs from 'qs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const urlParamsObject = {
		populate: { content: { populate: [POPULATE_GENERAL, POPULATE_UNIQUE].join(',') } }
	};
	const en = await fetch(
		`${PUBLIC_STRAPI_URL}/api/sections/24?${decodeURI(qs.stringify(urlParamsObject))}`,
		{
			headers: {
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			}
		}
	)
		.then((response) => response.json())
		.then((data) => processContent(data.data.attributes.content));
	const pt = await fetch(
		`${PUBLIC_STRAPI_URL}/api/sections/25?${decodeURI(qs.stringify(urlParamsObject))}`,
		{
			headers: {
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			}
		}
	)
		.then((response) => response.json())
		.then((data) => processContent(data.data.attributes.content));

	return {
		content: { en: { slug: 'services', content: en }, pt: { slug: 'services', content: pt } }
	};
};
