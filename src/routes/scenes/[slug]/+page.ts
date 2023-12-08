import { backgroundSceneNames } from '$lib/models';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const scene = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
	const sceneName = backgroundSceneNames.find((validName) => validName === scene);

	if (!sceneName) throw error(404, 'Not found');

	return { sceneName };
}
