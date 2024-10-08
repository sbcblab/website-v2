import { env } from '$env/dynamic/public';
import type { Section } from '$lib/types';
import { formatMeetingDatetime, formatScheduleDate } from '$lib/utils';

export function processContent(content: any[]): Section['content'] {
	return content.map((component: any) => {
		switch (component.__component) {
			case 'general.button':
				return {
					type: 'button',
					label: component.label,
					iconUrl: component.icon.data
						? env.PUBLIC_STRAPI_URL + component.icon.data.attributes.url
						: undefined,
					link: component.link
				};
			case 'general.datasets':
				return {
					type: 'datasets',
					data: component.data,
					filterPropJsonName: component.filterPropJsonName,
					filterPropLabel: component.filterPropLabel,
					filterOptions: component.filterOptions.map((option: any) => option.name),
					displayedInfo: component.displayedInfo.map((info: any) => {
						return { jsonPropName: info.jsonPropName, label: info.label };
					}),
					sortOptions: component.sortOptions.map((option: any) => {
						return { jsonPropName: option.jsonPropName, label: option.label };
					}),
					downloadOptions: component.downloadOptions.map((option: any) => {
						return { jsonPropName: option.jsonPropName, label: option.label };
					})
				};
			case 'general.form':
				return {
					type: 'form',
					name: component.form.data.attributes.name,
					method: component.form.data.attributes.method,
					target: component.form.data.attributes.target,
					submitButton: component.form.data.attributes.submitButton,
					fields: component.form.data.attributes.fields
				};
			case 'general.header':
				return {
					type: 'header',
					eyebrow: component.eyebrow,
					title: component.title,
					lead: component.lead
				};
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
					text: component.text,
					anchorId: component.anchorId
				};
			case 'general.heading-4':
				return {
					type: 'heading-4',
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
			case 'general.image-gallery':
				return {
					type: 'image-gallery',
					cols: component.cols,
					maxWidth: component.maxWidth,
					images: component.images.map((image: any) => {
						return {
							imageUrl: env.PUBLIC_STRAPI_URL + image.image.data.attributes.url,
							caption: image.caption
						};
					})
				};
			case 'general.image-grid':
				return {
					type: 'image-grid',
					cols: component.cols,
					gap: component.gap,
					maxWidth: component.maxWidth,
					images: component.images.data.map((image: any) => {
						return {
							src: env.PUBLIC_STRAPI_URL + image.attributes.url,
							alt: image.attributes.alternativeText
						};
					})
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
			case 'general.i-frame':
				return {
					type: 'iframe',
					title: component.title,
					src: component.src,
					styles: component.styles.map((style: any) => {
						return {
							key: style.key,
							value: style.value
						};
					})
				};
			case 'general.partnerships':
				return {
					type: 'partnerships',
					partnerships: component.partnerships.data.map((partnership: any) => {
						return {
							name: partnership.attributes.name,
							link: partnership.attributes.link,
							imageUrl: env.PUBLIC_STRAPI_URL + partnership.attributes.image.data.attributes.url
						};
					})
				};
			case 'general.meetings':
				return {
					type: 'meetings',
					meetings: component.meetings.map((meeting: any) => {
						return {
							title: meeting.title,
							objective: meeting.objective,
							datetime: formatMeetingDatetime(meeting.datetime),
							location: meeting.location,
							participants: meeting.participants,
							description: meeting.description,
							link: meeting.link
						};
					})
				};
			case 'general.menu':
				return {
					type: 'menu',
					items: component.items.map((item: any) => {
						return {
							label: item.label,
							link: item.link
						};
					})
				};
			case 'general.missions':
				return {
					type: 'missions',
					missions: component.missions.map((mission: any) => {
						return {
							origin: {
								institute: mission.originInstitute,
								university: mission.originUniversity,
								country: {
									name: mission.originCountry.data.attributes.name,
									flagUrl:
										env.PUBLIC_STRAPI_URL +
										mission.originCountry.data.attributes.flag.data.attributes.url
								}
							},
							destination: {
								institute: mission.destinationInstitute,
								university: mission.destinationUniversity,
								country: {
									name: mission.destinationCountry.data.attributes.name,
									flagUrl:
										env.PUBLIC_STRAPI_URL +
										mission.destinationCountry.data.attributes.flag.data.attributes.url
								}
							},
							members: mission.members
						};
					})
				};
			case 'general.publication-list':
				return {
					type: 'publication-list',
					publications: component.publications.data.map((publication: any) => {
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
					externalPublications: component.externalPublications.map((externalPublication: any) => {
						return {
							title: externalPublication.title,
							year: externalPublication.year,
							publicationDate: externalPublication.publicationDate,
							doi: externalPublication.doi,
							authors: externalPublication.authors,
							booktitle: externalPublication.booktitle,
							volume: externalPublication.volume,
							pages: externalPublication.pages
						};
					})
				};
			case 'general.researcher-list':
				return {
					type: 'researcher-list',
					researchers: component.researchers.map((researcher: any) => {
						return {
							name: researcher.name,
							role: researcher.role,
							link: researcher.link,
							program: researcher.program,
							institute: researcher.institute,
							university: researcher.university,
							country: researcher.country.data
								? {
										name: researcher.country.data.attributes.name,
										flagUrl:
											env.PUBLIC_STRAPI_URL +
											researcher.country.data.attributes.flag.data.attributes.url
									}
								: undefined
						};
					})
				};
			case 'general.schedule':
				return {
					type: 'schedule',
					date: formatScheduleDate(component.date),
					events: component.events.map((event: any) => {
						return {
							name: event.name,
							time: event.time,
							location: event.location,
							people: event.people
						};
					})
				};
			case 'general.tabs':
				return {
					type: 'tabs',
					items: component.items.map((item: any) => {
						return {
							title: item.title,
							fullTitle: item.fullTitle,
							iconUrl: item.icon.data && env.PUBLIC_STRAPI_URL + item.icon.data.attributes.url,
							content: item.content,
							keywords: item.keywords?.split(',').map((item: string) => item.trim())
						};
					})
				};
			case 'general.tools-and-datasets':
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
			case 'unique.about-us':
				return {
					type: 'about',
					mainParagraph: component.mainParagraph,
					bodyText: component.bodyText,
					imageUrl: env.PUBLIC_STRAPI_URL + component.image.data.attributes.url,
					imageLink: component.imageLink
				};
			case 'unique.banner':
				return {
					type: 'banner',
					defaultBackgroundUrl:
						env.PUBLIC_STRAPI_URL + component.defaultBackground.data.attributes.url,
					slides: component.slides.map((slide: any) => {
						return {
							heading: slide.heading,
							headingColor: slide.headingColor,
							description: slide.description,
							link: slide.link,
							imageUrl: slide.image.data
								? env.PUBLIC_STRAPI_URL + slide.image.data?.attributes.url
								: undefined,
							backgroundUrl: slide.background.data
								? env.PUBLIC_STRAPI_URL + slide.background.data?.attributes.url
								: undefined
						};
					})
				};
			case 'unique.slogan':
				return {
					type: 'slogan',
					text: component.text
				};
			case 'unique.publications':
				return {
					type: 'publications',
					heading: component.heading,
					headingType: component.headingType,
					publications: []
				};
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
							link: guest.attributes.link,
							year: guest.attributes.year
						};
					})
				};
			case 'unique.hiring':
				return {
					type: 'hiring',
					aboveHeading: component.aboveHeading,
					heading: component.heading,
					lead: component.lead,
					requirements: {
						title: component.requirementsTitle,
						items: component.requirements.map((requirement: any) => {
							return {
								text: requirement.text,
								iconUrl: env.PUBLIC_STRAPI_URL + requirement.icon.data.attributes.url
							};
						})
					},
					benefits: {
						title: component.benefitsTitle,
						items: component.benefits.map((benefit: any) => {
							return {
								text: benefit.text,
								iconUrl: env.PUBLIC_STRAPI_URL + benefit.icon.data.attributes.url
							};
						})
					},
					ppgc: {
						description: component.ppgcDescription,
						iconUrl: env.PUBLIC_STRAPI_URL + component.ppgcIcon.data.attributes.url
					},
					ppgbcm: {
						description: component.ppgbcmDescription,
						iconUrl: env.PUBLIC_STRAPI_URL + component.ppgbcmIcon.data.attributes.url
					},
					apply: {
						link: component.applyLink,
						text: component.applyText
					}
				};
			case 'unique.collaborators':
				return {
					type: 'collaborators',
					collaborators: component.collaborators.data.map((collaborator: any) => {
						return {
							name: collaborator.attributes.name,
							institute: collaborator.attributes.institute,
							university: collaborator.attributes.university,
							link: collaborator.attributes.link,
							country: {
								name: collaborator.attributes.country.data.attributes.name,
								flagUrl:
									env.PUBLIC_STRAPI_URL +
									collaborator.attributes.country.data.attributes.flag.data.attributes.url
							}
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
