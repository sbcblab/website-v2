import { env } from '$env/dynamic/public';
import { getContact } from './data';

export async function processSectionContent(content: any): Promise<(object | undefined)[]> {
	const proccessedContent: (object | undefined)[] = [];

	for (const component of content) {
		let proccessedComponent: object | undefined;

		if (component.__component === 'general.heading') {
			proccessedComponent = {
				type: 'heading',
				text: component.text
			};
		}

		if (component.__component === 'general.subheading') {
			proccessedComponent = {
				type: 'subheading',
				text: component.text
			};
		}

		if (component.__component === 'general.rich-text') {
			proccessedComponent = {
				type: 'rich-text',
				content: component.content
			};
		}

		if (component.__component === 'general.image') {
			proccessedComponent = {
				type: 'image',
				imageUrl: env.PUBLIC_STRAPI_URL + component.image.data.attributes.url,
				alt: component.image.data.attributes.alternativeText,
				height: component.height,
				link: component.link,
				border: component.border
			};
		}

		if (component.__component === 'general.image') {
			proccessedComponent = {
				type: 'image',
				imageUrl: env.PUBLIC_STRAPI_URL + component.image.data.attributes.url,
				alt: component.image.data.attributes.alternativeText,
				height: component.height,
				link: component.link,
				border: component.border
			};
		}

		if (component.__component === 'general.image-row') {
			proccessedComponent = {
				type: 'image-row',
				gap: component.gap,
				justify: component.justify,
				images: component.images.map((image: any) => {
					return {
						imageUrl: env.PUBLIC_STRAPI_URL + image.image.data.attributes.url,
						alt: image.image.data.attributes.alternativeText,
						height: component.imagesHeight,
						link: image.link,
						border: component.border
					};
				})
			};
		}

		if (component.__component === 'general.html') {
			proccessedComponent = {
				type: 'html',
				content: component.content
			};
		}

		if (component.__component === 'general.iframe') {
			proccessedComponent = {
				type: 'iframe',
				iframe: {
					title: component.title,
					src: component.src,
					allowfullscreen: component.allowfullscreen,
					styles: component.styles.map((style: any) => {
						return {
							key: style.key,
							value: style.value
						};
					})
				}
			};
		}

		if (component.__component === 'unique.banner') {
			proccessedComponent = {
				type: 'banner',
				defaultBackgroundUrl:
					env.PUBLIC_STRAPI_URL + component.defaultBackground.data.attributes.url,
				slides: component.slides.map((slide: any) => {
					return {
						heading: slide.heading,
						description: slide.description,
						link: slide.link,
						imageUrl: env.PUBLIC_STRAPI_URL + slide.image.data.attributes.url,
						backgroundUrl: env.PUBLIC_STRAPI_URL + slide.background.data.attributes.url
					};
				})
			};
		}

		if (component.__component === 'unique.slogan') {
			proccessedComponent = {
				type: 'slogan',
				text: component.text
			};
		}

		if (component.__component === 'unique.tools-and-datasets') {
			proccessedComponent = {
				type: 'tools-datasets',
				tools: component.tools.data.map((tool: any) => {
					return {
						title: tool.attributes.title,
						description: tool.attributes.description,
						link: tool.attributes.link,
						imageUrl: env.PUBLIC_STRAPI_URL + tool.attributes.image.data.attributes.url
					};
				}),
				datasets: component.datasets.data.map((dataset: any) => {
					return {
						title: dataset.attributes.title,
						description: dataset.attributes.description,
						link: dataset.attributes.link,
						imageUrl: env.PUBLIC_STRAPI_URL + dataset.attributes.image.data.attributes.url
					};
				})
			};
		}

		if (component.__component === 'unique.publications') {
			const publications = component.publications.data.reduce((acc: any, publication: any) => {
				const publishDate = new Date(publication.attributes.publishDate);
				const year = publishDate.getFullYear();
				if (!acc[year]) {
					acc[year] = [];
				}
				acc[year].push({
					authors: publication.attributes.authors.map((author: any) => author.name),
					title: publication.attributes.title,
					publishDate,
					journal: publication.attributes.journal,
					volume: publication.attributes.volume,
					startPage: publication.attributes.startPage,
					endPage: publication.attributes.endPage,
					link: publication.attributes.link
				});
				return acc;
			}, {});
			const years = Object.keys(publications);
			years.sort((a, b) => parseInt(b) - parseInt(a));
			const sortedPublications = years.map((year: any) => {
				return {
					year,
					publications: publications[year]
				};
			});
			proccessedComponent = {
				type: 'publications',
				publications: sortedPublications
			};
		}

		if (component.__component === 'unique.projects') {
			proccessedComponent = {
				type: 'projects',
				projects: component.projects.data.map((project: any) => {
					return {
						title: project.attributes.title,
						link: project.attributes.link,
						description: project.attributes.description,
						imageUrl: env.PUBLIC_STRAPI_URL + project.attributes.image.data.attributes.url
					};
				})
			};
		}

		if (component.__component === 'unique.members') {
			proccessedComponent = {
				type: 'members',
				members: component.members.data.map((member: any) => {
					return {
						pictureUrl: env.PUBLIC_STRAPI_URL + member.attributes.picture.data.attributes.url,
						name: member.attributes.name,
						role: member.attributes.role,
						areas: member.attributes.areas.data.map((area: any) => area.attributes.name),
						googleScholar: member.attributes.googleScholar,
						orcid: member.attributes.orcid,
						researchGate: member.attributes.researchGate,
						lattes: member.attributes.lattes,
						dblp: member.attributes.dblp
					};
				})
			};
		}

		if (component.__component === 'unique.guests') {
			proccessedComponent = {
				type: 'guests',
				guests: component.guests.data.map((guest: any) => {
					return {
						name: guest.attributes.name,
						university: guest.attributes.university,
						country: guest.attributes.country.data.attributes.name,
						url: guest.attributes.url,
						year: guest.attributes.year
					};
				})
			};
		}

		if (component.__component === 'unique.collaborators') {
			proccessedComponent = {
				type: 'collaborators',
				collaborators: component.collaborators.data.map((collaborator: any) => {
					return {
						name: collaborator.attributes.name,
						institute: collaborator.attributes.institute,
						university: collaborator.attributes.university,
						url: collaborator.attributes.url,
						country: {
							name: collaborator.attributes.country.data.attributes.name,
							flagUrl:
								env.PUBLIC_STRAPI_URL +
								collaborator.attributes.country.data.attributes.flag.data.attributes.url
						}
					};
				})
			};
		}

		if (component.__component === 'unique.research-areas') {
			proccessedComponent = {
				type: 'research-areas',
				researchAreas: component.researchAreas.data.map((area: any) => {
					return {
						title: area.attributes.title,
						fullTitle: area.attributes.fullTitle,
						description: area.attributes.description,
						iconUrl:
							area.attributes.icon.data &&
							env.PUBLIC_STRAPI_URL + area.attributes.icon.data.attributes.url,
						keywords: area.attributes.keywords.map((keyword: any) => keyword.name)
					};
				})
			};
		}

		if (component.__component === 'unique.contact-us') {
			const contactInfo = await getContact();
			proccessedComponent = {
				type: 'contact',
				contact: {
					subheading: component.subheading,
					showEmail: component.showEmail,
					showPhone: component.showPhone,
					showLocation: component.showLocation,
					showAddress: component.showAddress,
					info: contactInfo
				}
			};
		}

		proccessedContent.push(proccessedComponent);
	}

	return proccessedContent;
}
