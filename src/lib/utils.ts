import type { Publication, Publications } from '$lib/types';
import { clsx, type ClassValue } from 'clsx';
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

export function groupPublicationsByYear(publications: Publication[]) {
	const publicationsByYearObject: { [key: string]: Publication[] } = {};
	const publicationsByYearArray: Publications['publications'] = [];
	const years = new Set<number>();

	publications.forEach((publication) => {
		const { year } = publication;

		if (!years.has(year)) {
			years.add(year);
			publicationsByYearObject[year] = [];
		}

		publicationsByYearObject[year].push(publication);
	});

	const sortedYears = Array.from(years).sort((a, b) => b - a);

	sortedYears.forEach((year) => {
		publicationsByYearArray.push({ year, publications: publicationsByYearObject[year] });
	});

	return publicationsByYearArray;
}
