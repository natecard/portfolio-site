import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'v2';

const config = defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	// See docs on content modelling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			// {
			// 	name: 'page',
			// 	label: 'Pages',
			// 	path: 'content/pages',
			// 	format: 'json',
			// 	fields: [
			// 		{
			// 			type: 'string',
			// 			name: 'title',
			// 			label: 'Title',
			// 			isTitle: true,
			// 			required: true,
			// 		},
			// 		{
			// 			type: 'string',
			// 			name: 'heading',
			// 			label: 'Heading',
			// 		},
			// 		{
			// 			type: 'string',
			// 			name: 'content',
			// 			label: 'Content',
			// 		},
			// 	],
			// 	ui: {
			// 		router: ({ document }) => `/page/${document._sys.basename}`,
			// 	},
			// },
			{
				name: 'post',
				label: 'Posts',
				path: 'blog/posts',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
					},
					{
						type: 'string',
						name: 'excerpt',
						label: 'Excerpt',
						required: true,
					},
					{
						type: 'image',
						name: 'coverImage',
						label: 'Cover Image',
						required: true,
					},
					// {
					// 	type: 'datetime',
					// 	name: 'date',
					// 	label: 'Date',
					// 	required: true,
					// },
					{
						type: 'string',
						name: 'author',
						label: 'Author',
						required: true,
					},
					{
						type: 'string',
						name: 'slug',
						label: 'Slug',
						required: true,
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
					},
				],
				ui: {
					router: ({ document }) => `/blog/post/${document._sys.filename}`,
				},
			},
		],
	},
});
export default config;
