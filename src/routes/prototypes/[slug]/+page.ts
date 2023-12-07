import { error } from '@sveltejs/kit';
import prototypes from '../prototypes.json'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const pageContent = prototypes.find(x => x.path == params.slug)
    
    if (!pageContent) throw error(404, 'Not found');

    return pageContent
}
