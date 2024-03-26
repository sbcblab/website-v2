import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import qs from 'qs';
import { processSectionBody } from './body';

type PageSlug = 'home' | 'research' | 'projects' | 'team' | 'contact';

export interface Section {
	heading: string;
	slug: string;
	body: any[];
}

export interface ToolDataset {
	title: string;
	link: string;
	description: string;
	imageUrl: string;
}

export interface Project {
	title: string;
	link: string;
	description: string;
	imageUrl: string;
}

export interface Publication {
	authors: string[];
	title: string;
	publishDate: Date;
	journal: string;
	volume: number;
	startPage: number;
	endPage: number;
	link: string;
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
							publications: {
								sort: ['publishDate:desc'],
								populate: {
									authors: '*'
								}
							},
							projects: {
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

	const sections = data[0].attributes.sections.data.map((section: any) => {
		return {
			heading: section.attributes.heading,
			slug: section.attributes.slug,
			body: processSectionBody(section.attributes.body)
		};
	});

	return sections;
}

export async function getPublications(): Promise<Publication[]> {
	const data = await fetchData('publications?populate=authors');

	return data.map((publication: any) => {
		return {
			authors: publication.attributes.authors,
			title: publication.attributes.title,
			publishDate: publication.attributes.publishDate,
			journal: publication.attributes.journal,
			volume: publication.attributes.volume,
			startPage: publication.attributes.startPage,
			endPage: publication.attributes.endPage,
			link: publication.attributes.link
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
