import { env as privateEnv } from '$env/dynamic/private';
import { env, env as publicEnv } from '$env/dynamic/public';
import { processSectionContent } from '$lib/content';
import urlParamsObject from '$lib/json/sections-url-params.json';
import type { Contact, Global, ProjectPage, Publication, Sections, Socials } from '$lib/types';
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

export async function getPublications(): Promise<Publication[]> {
	const data = await fetchData('publications', {
		populate: 'authors',
		sort: ['publicationDate:desc'],
		pagination: { limit: -1 }
	});

	return data.map((publication: any) => {
		return {
			title: publication.attributes.title,
			year: publication.attributes.year,
			publicationDate: publication.attributes.publicationDate,
			type: publication.attributes.type,
			doi: publication.attributes.doi,
			authors: publication.attributes.authors.map((author: any) => author.name),
			booktitle: publication.attributes.booktitle,
			address: publication.attributes.address,
			volume: publication.attributes.volume,
			issue: publication.attributes.issue,
			pages: publication.attributes.pages
		};
	});
}

export async function getProjectPages(): Promise<ProjectPage[]> {
	const data = await fetchData('project-pages', {
		populate:
			'images, services.icon, researchers.country.flag, students.country.flag, scholarshipStudents.country.flag, tools.image, datasets.image, publications.authors, partners.image'
	});

	return data.map((projectPage: any) => {
		return {
			slug: projectPage.attributes.slug,
			heading: projectPage.attributes.heading,
			subHeading: projectPage.attributes.subHeading,
			title: projectPage.attributes.title,
			lead: projectPage.attributes.lead,
			startDate: projectPage.attributes.startDate,
			endDate: projectPage.attributes.endDate,
			imageUrls: projectPage.attributes.images.data.map(
				(image: any) => env.PUBLIC_STRAPI_URL + image.attributes.url
			),
			services: projectPage.attributes.services.map((service: any) => {
				return {
					title: service.title,
					fullTitle: service.fullTitle,
					iconUrl: service.icon
						? env.PUBLIC_STRAPI_URL + service.icon.data.attributes.url
						: undefined,
					content: service.content,
					keywords: service.keywords?.split(',').map((item: string) => item.trim())
				};
			}),
			description: projectPage.attributes.description,
			researchers: projectPage.attributes.researchers.map((researcher: any) => {
				return {
					name: researcher.name,
					role: researcher.role,
					link: researcher.link,
					program: researcher.program,
					institute: researcher.institute,
					university: researcher.university,
					country: {
						name: researcher.country.data.attributes.name,
						flagUrl:
							env.PUBLIC_STRAPI_URL + researcher.country.data.attributes.flag.data.attributes.url
					}
				};
			}),
			students: projectPage.attributes.students.map((student: any) => {
				return {
					name: student.name,
					role: student.role,
					link: student.link,
					program: student.program,
					institute: student.institute,
					university: student.university,
					country: {
						name: student.country.data.attributes.name,
						flagUrl:
							env.PUBLIC_STRAPI_URL + student.country.data.attributes.flag.data.attributes.url
					}
				};
			}),
			scholarshipStudents: projectPage.attributes.scholarshipStudents.map(
				(scholarshipStudent: any) => {
					return {
						name: scholarshipStudent.name,
						role: scholarshipStudent.role,
						link: scholarshipStudent.link,
						program: scholarshipStudent.program,
						institute: scholarshipStudent.institute,
						university: scholarshipStudent.university,
						country: {
							name: scholarshipStudent.country.data.attributes.name,
							flagUrl:
								env.PUBLIC_STRAPI_URL +
								scholarshipStudent.country.data.attributes.flag.data.attributes.url
						}
					};
				}
			),
			tools: projectPage.attributes.tools.data.map((tool: any) => {
				return {
					title: tool.attributes.title,
					link: tool.attributes.link,
					description: tool.attributes.description,
					imageUrl: tool.attributes.image
						? env.PUBLIC_STRAPI_URL + tool.attributes.image.data.attributes.url
						: undefined
				};
			}),
			datasets: projectPage.attributes.datasets.data.map((dataset: any) => {
				return {
					title: dataset.title,
					link: dataset.link,
					description: dataset.description,
					imageUrl: dataset.attributes.image
						? env.PUBLIC_STRAPI_URL + dataset.attributes.image.data.attributes.url
						: undefined
				};
			}),
			publications: projectPage.attributes.publications.data.map((publication: any) => {
				return {
					title: publication.attributes.title,
					year: publication.attributes.year,
					publicationDate: publication.attributes.publicationDate,
					type: publication.attributes.type,
					doi: publication.attributes.doi,
					authors: publication.attributes.authors.map((author: any) => author.name),
					booktitle: publication.attributes.booktitle,
					address: publication.attributes.address,
					volume: publication.attributes.volume,
					issue: publication.attributes.issue,
					pages: publication.attributes.pages
				};
			}),
			partners: projectPage.attributes.partners.data.map((partner: any) => {
				return {
					name: partner.attributes.name,
					link: partner.attributes.link,
					image: partner.attributes.image
						? env.PUBLIC_STRAPI_URL + partner.attributes.image.data.attributes.url
						: undefined
				};
			})
		};
	});
}
