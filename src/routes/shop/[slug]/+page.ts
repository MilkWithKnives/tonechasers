import { error } from '@sveltejs/kit';
import { getGuitar, guitars } from '$lib/guitars';
import type { PageLoad } from './$types';

// Prerender every product page for the static build.
export const entries = () => guitars.map((g) => ({ slug: g.slug }));

export const load: PageLoad = ({ params }) => {
	const guitar = getGuitar(params.slug);
	if (!guitar) throw error(404, 'Guitar not found');
	const related = guitars
		.filter((g) => g.slug !== guitar.slug && g.category === guitar.category && g.status === 'available')
		.slice(0, 4);
	return { guitar, related };
};
