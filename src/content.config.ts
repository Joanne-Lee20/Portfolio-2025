import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const codeProjects = defineCollection({
	// Load Markdown and MDX files in the `src/content/codeProjects/` directory.
	loader: glob({ base: './src/content/codeProjects', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const designProjects = defineCollection({
	loader: glob({ base: './src/content/designProjects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const extraProjects = defineCollection({
	loader: glob({ base: './src/content/extraProjects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { codeProjects, designProjects, extraProjects };
