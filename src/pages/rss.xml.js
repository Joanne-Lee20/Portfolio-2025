import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const codePosts = await getCollection('codeProjects');
	const designPosts = await getCollection('designProjects');
	const extraPosts = await getCollection('extraProjects');

	// Optionally add a "type" field or distinguish in the link
	const allPosts = [
		...codePosts.map((post) => ({
			...post.data,
			link: `/codeProjects/${post.id}/`,
		})),
		...designPosts.map((post) => ({
			...post.data,
			link: `/design/${post.id}/`,
		})),
		...extraPosts.map((post) => ({
			...post.data,
			link: `/extra/${post.id}/`,
		})),
	];

	// Optional: sort allPosts by date (if using pubDate)
	allPosts.sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: allPosts,
	});
}
