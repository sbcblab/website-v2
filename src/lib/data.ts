import { env } from '$env/dynamic/private';
import { toCamelCase } from './utils';

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

// Output Types
interface Sections {
	[key: string]: {
		title: string;
		slug: string;
		body: string;
	};
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

async function fetchData(endpoint: string) {
	return await fetch(`${env.STRAPI_URL}/api/${endpoint}`, {
		headers: {
			Authorization: `Bearer ${env.STRAPI_API_TOKEN}`
		}
	})
		.then((response) => response.json())
		.then((data) => data.data);
}

export async function getSections(): Promise<Sections> {
	const data = await fetchData('sections');

	const sections: Sections = {};
	for (const section of data) {
		sections[toCamelCase(section.attributes.slug)] = {
			title: section.attributes.title,
			slug: section.attributes.slug,
			body: section.attributes.body
		};
	}

	return sections;
}

export async function getTools(): Promise<Tool[]> {
	const data = await fetchData('tools?populate=image');

	return data.map((tool: ToolData) => {
		return {
			title: tool.attributes.title,
			description: tool.attributes.description,
			imageUrl: env.STRAPI_URL + tool.attributes.image.data.attributes.url,
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
			imageUrl: env.STRAPI_URL + tool.attributes.image.data.attributes.url,
			url: tool.attributes.url
		};
	});
}
