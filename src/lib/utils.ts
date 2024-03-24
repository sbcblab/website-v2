import { env } from '$env/dynamic/public';
import { clsx, type ClassValue } from 'clsx';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

export function toCamelCase(str: string): string {
	return str.replace(/-([a-z])/g, function (match, group1) {
		return group1.toUpperCase();
	});
}

export function formatHsl(hsl: string): string {
	const [h, s, l] = hsl.split(' ');
	return `hsl(${h}, ${s}, ${l})`;
}

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
	});
}
