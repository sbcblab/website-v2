import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import qs from 'qs';
import { processSectionBody } from './utils';

type PageSlug = 'home' | 'research' | 'projects' | 'team' | 'contact';

// API Response Types
interface ToolData {
	attributes: {
		title: string;
		description: string;
		url: string;
		image: { data: { attributes: { url: string } } };
	};
}

interface DatasetData {
	attributes: {
		title: string;
		description: string;
		url: string;
		image: { data: { attributes: { url: string } } };
	};
}

interface SectionData {
	attributes: {
		heading: string;
		slug: string;
		body: any[];
	};
}

// Output Types
export interface Section {
	heading: string;
	slug: string;
	body: any[];
}

interface Tool {
	title: string;
	description: string;
	imageUrl: string;
	url: string;
}

interface Dataset {
	title: string;
	description: string;
	imageUrl: string;
	url: string;
}

export interface Socials {
	twitter: string;
	instagram: string;
	github: string;
	linkedin: string;
}

export interface Contact {
	email: string;
	phone: string;
	location: string;
	address: string;
}

async function fetchData(endpoint: string, urlParamsObject?: object) {
	const queryString = qs.stringify(urlParamsObject);
	return await fetch(
		`${publicEnv.PUBLIC_STRAPI_URL}/api/${endpoint}${queryString ? `?${queryString}` : ''}`,
		{
			headers: {
				Authorization: `Bearer ${privateEnv.STRAPI_API_TOKEN}`
			}
		}
	)
		.then((response) => response.json())
		.then((data) => data.data);
}

export async function getSections(pageSlug: PageSlug): Promise<Section[]> {
	const urlParamsObject = {
		filters: { slug: { $eq: pageSlug } },
		populate: {
			sections: {
				populate: {
					body: {
						populate: {
							image: '*',
							tools: {
								populate: {
									image: '*'
								}
							},
							datasets: {
								populate: {
									image: '*'
								}
							},
							images: {
								populate: '*'
							}
						}
					}
				}
			}
		}
	};
	const data = await fetchData('pages', urlParamsObject);

	const sections = data[0].attributes.sections.data.map((section: SectionData) => {
		return {
			heading: section.attributes.heading,
			slug: section.attributes.slug,
			body: processSectionBody(section.attributes.body)
		};
	});

	return sections;
}

export async function getTools(): Promise<Tool[]> {
	const data = await fetchData('tools?populate=image');

	return data.map((tool: ToolData) => {
		return {
			title: tool.attributes.title,
			description: tool.attributes.description,
			imageUrl: publicEnv.PUBLIC_STRAPI_URL + tool.attributes.image.data.attributes.url,
			url: tool.attributes.url
		};
	});
}

export async function getDatasets(): Promise<Dataset[]> {
	const data = await fetchData('datasets?populate=image');

	return data.map((tool: DatasetData) => {
		return {
			title: tool.attributes.title,
			description: tool.attributes.description,
			imageUrl: publicEnv.PUBLIC_STRAPI_URL + tool.attributes.image.data.attributes.url,
			url: tool.attributes.url
		};
	});
}

export async function getSocials(): Promise<Socials> {
	const data = await fetchData('social');

	return {
		twitter: data.attributes.twitter,
		instagram: data.attributes.instagram,
		github: data.attributes.github,
		linkedin: data.attributes.linkedin
	};
}

export async function getContact(): Promise<Contact> {
	const data = await fetchData('contact');

	return {
		email: data.attributes.email,
		phone: data.attributes.phone,
		location: data.attributes.location,
		address: data.attributes.address
	};
}
