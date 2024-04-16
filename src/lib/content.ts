import { env } from '$env/dynamic/public';
import { proccessPublications } from '$lib/utils';

export function processSectionContent(content: any): Promise<(object | undefined)[]> {
	return content.map((component: any) => {
		switch (component.__component) {
			case 'general.heading-1':
				return {
					type: 'heading-1',
					text: component.text
				};
			case 'general.heading-2':
				return {
					type: 'heading-2',
					text: component.text
				};
			case 'general.heading-3':
				return {
					type: 'heading-3',
					text: component.text
				};
			case 'general.rich-text':
				return {
					type: 'rich-text',
					content: component.content
				};
			case 'general.image':
				return {
					type: 'image',
					imageUrl: env.PUBLIC_STRAPI_URL + component.image.data.attributes.url,
					height: component.height,
					link: component.link,
					border: component.border
				};
			case 'general.image-row':
				return {
					type: 'image-row',
					gap: component.gap,
					justify: component.justify,
					imagesHeight: component.imagesHeight,
					images: component.images.map((image: any) => {
						return {
							imageUrl: env.PUBLIC_STRAPI_URL + image.image.data.attributes.url,
							link: image.link
						};
					})
				};
			case 'general.html':
				return {
					type: 'html',
					content: component.content
				};
			case 'general.map':
				return {
					type: 'map',
					src: component.src,
					styles: component.styles.map((style: any) => {
						return {
							key: style.key,
							value: style.value
						};
					})
				};
			case 'unique.banner':
				return {
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
			case 'unique.slogan':
				return {
					type: 'slogan',
					text: component.text
				};
			case 'unique.tools-and-datasets':
				return {
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
			case 'unique.partnerships':
				return {
					type: 'partnerships',
					heading: component.heading,
					partnerships: component.partnerships.map((partnership: any) => {
						return {
							name: partnership.name,
							link: partnership.link,
							imageUrl: env.PUBLIC_STRAPI_URL + partnership.image.data.attributes.url
						};
					})
				};
			case 'unique.publications':
				return proccessPublications(component);
			case 'unique.projects':
				return {
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
			case 'unique.members':
				return {
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
			case 'unique.guests':
				return {
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
			case 'unique.collaborators':
				return {
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
			case 'unique.research-areas':
				return {
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
			case 'unique.contact-us':
				return {
					type: 'contact',
					subheading: component.subheading,
					showEmail: component.showEmail,
					showPhone: component.showPhone,
					showLocation: component.showLocation,
					showAddress: component.showAddress
				};
		}
	});
}
