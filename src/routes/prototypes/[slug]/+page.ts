import { error } from '@sveltejs/kit';
import prototypes from '../prototypes.json'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const pageContent = prototypes.find((x) => x.path == params.slug);
	const nextPageId = (prototypes.findIndex((x) => x.path == params.slug) + 1) % prototypes.length;
	const nextPage = prototypes[nextPageId].path;

	if (!pageContent) throw error(404, 'Not found');

	pageContent.next_page = nextPage;

	return pageContent;
}
