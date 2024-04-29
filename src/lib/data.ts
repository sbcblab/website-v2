import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { processSectionContent } from '$lib/content';
import urlParamsObject from '$lib/json/url-params.json';
import type { Contact, Global, Sections, Socials } from '$lib/types';
import qs from 'qs';

async function fetchData(endpoint: string, urlParamsObject?: object) {
	const queryString = decodeURI(qs.stringify(urlParamsObject));
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

export async function getSections(): Promise<Sections> {
	const pages = await fetchData('pages', urlParamsObject);

	const processedSections: Sections = {};

	pages.forEach((page: any) => {
		const sections = page.attributes.sections.data.map((section: any) => {
			return {
				slug: section.attributes.slug,
				content: processSectionContent(section.attributes.content)
			};
		});

		processedSections[page.attributes.slug] = sections;
	});

	return processedSections;
}

export async function getNav(): Promise<Global['nav']> {
	const data = await fetchData('global');

	return data.attributes.nav;
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
