import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, params }) => {
	const searchParams = new URLSearchParams(url.searchParams).toString();

	const response = await fetch(`https://sbcb.inf.ufrgs.br/compute/${params.slug}/?${searchParams}`);

	try {
		const data = await response.json();
		return new Response(JSON.stringify(data));
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
	}
};
