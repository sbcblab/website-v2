import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Publication } from './types';

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

export function processPublications(component: any) {
	const publicationsByYear: { [year: string]: Publication[] } = {};
	const years = new Set<string>();

	component.publications.data.forEach((publication: any) => {
		const {
			title,
			year,
			publicationDate,
			type,
			doi,
			authors,
			booktitle,
			address,
			volume,
			issue,
			pages
		} = publication.attributes;

		if (!years.has(year)) {
			years.add(year);
			publicationsByYear[year] = [];
		}

		publicationsByYear[year].push({
			authors: authors.map((author: any) => author.name),
			title,
			year,
			publicationDate,
			type,
			doi,
			booktitle,
			address,
			volume,
			issue,
			pages
		});
	});

	const sortedYears = Array.from(years).sort((a, b) => {
		return parseInt(b) - parseInt(a);
	});

	const sortedPublications = sortedYears.map((year) => {
		const publications = publicationsByYear[year];
		return {
			year,
			publications
		};
	});

	return {
		type: 'publications',
		publications: sortedPublications
	};
}
