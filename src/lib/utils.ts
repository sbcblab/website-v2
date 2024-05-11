import type { Publication } from '$lib/types';
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

export function groupPublications(publications: Publication[]) {
	const groupedPublications: { [key: string]: { year: number; publications: Publication[] }[] } =
		{};
	const types = [...new Set(publications.map((publication) => publication.type))];

	types.forEach((type) => {
		const years = [
			...new Set(
				publications
					.filter((publication) => publication.type === type)
					.map((publication) => publication.year)
			)
		];

		groupedPublications[type] = years.map((year) => {
			return {
				year,
				publications: publications.filter(
					(publication) => publication.type === type && publication.year === year
				)
			};
		});
	});

	return groupedPublications;
}
