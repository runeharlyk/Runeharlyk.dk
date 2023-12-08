export interface prototype {
	name: string;
	description: string;
	path: string;
	next_page?: string;
	framed_demo?: string;
	source?: string;
	build_with?: string[];
	keywords?: string[];
}

export const backgroundSceneNames = ['Galaxy', 'Ocean'] as const;

export type BackgroundScene = (typeof backgroundSceneNames)[number];
