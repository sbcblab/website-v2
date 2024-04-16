import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { processSectionContent } from '$lib/content';
import urlParamsObject from '$lib/json/url-params.json';
import qs from 'qs';

export interface Sections {
	[key: string]: Section[];
}

export interface Section {
	slug: string;
	content: any[];
}

export interface IFrame {
	title: string;
	src: string;
	allowfullscreen: boolean;
	styles: {
		key: string;
		value: string;
	}[];
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

export interface Member {
	pictureUrl: string;
	name: string;
	role: string;
	areas: string[];
	googleScholar: string;
	orcid: string;
	researchGate: string;
	lattes: string;
	dblp: string;
}

export interface Guest {
	name: string;
	university: string;
	country: string;
	url: string;
	year: number;
}

export interface Collaborator {
	name: string;
	institute: string;
	university: string;
	url: string;
	country: {
		name: string;
		flagUrl: string;
	};
}

export interface ResearchArea {
	title: string;
	fullTitle: string;
	description: string;
	iconUrl: string;
	keywords: string[];
}

export interface NavLink {
	label: string;
	href: string;
	subLinks?: NavLink[];
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

export interface ContactSection {
	subheading: string;
	showEmail: boolean;
	showPhone: boolean;
	showLocation: boolean;
	showAddress: boolean;
	info: Contact;
}

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

export async function getNav(): Promise<NavLink[]> {
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
