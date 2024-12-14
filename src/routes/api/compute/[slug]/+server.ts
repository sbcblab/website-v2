import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, params }) => {
	let searchParams = new URLSearchParams(url.searchParams).toString();
	let response = await fetch(`https://sbcb.inf.ufrgs.br/compute/${params.slug}/?${searchParams}`, {
		method: 'POST'
	});

	if (response.ok) {
		let data = await response.json();
		return json(data);
	} else {
		return error(400, 'Failed to fetch data');
	}
};

export const POST: RequestHandler = async ({ url, params, request }) => {
	let searchParams = new URLSearchParams(url.searchParams).toString();
	let body = await request.json();
	let response = await fetch(`https://sbcb.inf.ufrgs.br/${params.slug}/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});

	if (response.ok) {
		let data = await response.json();
		return json(data);
	} else {
		let data = await response.json();
		return error(400, 'Failed to fetch data');
	}
};
