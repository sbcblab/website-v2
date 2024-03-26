import { env } from '$env/dynamic/public';

export function processSectionBody(body: object[]): (object | undefined)[] {
	return body.map((component: any) => {
		if (component.__component === 'elements.rich-text') {
			return {
				type: 'rich-text',
				content: component.content
			};
		}
		if (component.__component === 'elements.image') {
			return {
				type: 'image',
				imageUrl: env.PUBLIC_STRAPI_URL + component.image.data.attributes.url,
				alt: component.image.data.attributes.alternativeText,
				height: component.height,
				link: component.link,
				border: component.border
			};
		}
		if (component.__component === 'elements.image-row') {
			return {
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
		if (component.__component === 'elements.html') {
			return {
				type: 'html',
				content: component.content
			};
		}
		if (component.__component === 'elements.tools-and-datasets') {
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
		}
		if (component.__component === 'elements.projects') {
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
		}
	});
}
