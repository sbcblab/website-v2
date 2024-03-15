import { env } from '$env/dynamic/private';

export async function getSections(page?: string) {
	const response = await fetch(`${env.STRAPI_URL}/api/sections?populate[0]=pages`, {
		headers: {
			Authorization: `Bearer ${env.STRAPI_API_TOKEN}`
		}
	});
	const data = await response.json();

	let sections = data.data;

	if (page) {
		sections = sections.filter(
			(section: {
				attributes: {
					title: string;
					body: string;
					pages: { data: { attributes: { title: string } }[] };
				};
			}) => {
				const pages = section.attributes.pages.data.map((page: { attributes: { title: string } }) =>
					page.attributes.title.toLowerCase()
				);

				return pages.includes(page.toLowerCase());
			}
		);
	}
	sections = sections.map(
		(section: {
			attributes: {
				title: string;
				slug: string;
				body: string;
			};
		}) => {
			return {
				title: section.attributes.title,
				slug: section.attributes.slug,
				body: section.attributes.body
			};
		}
	);

	return sections;
}
