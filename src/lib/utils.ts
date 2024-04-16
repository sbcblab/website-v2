import { clsx, type ClassValue } from 'clsx';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function copyToClipboard(text: string | null) {
	if (!text) return;
	navigator.clipboard.writeText(text);
}

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function proccessPublications(component: any) {
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
	return {
		type: 'publications',
		publications: sortedPublications
	};
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
		duration: params.duration ?? 150,
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
