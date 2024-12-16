import client from '@/tina/__generated__/client';

export async function getAllPosts() {
	const postsResponse = await client.queries.postConnection();
	return postsResponse.data.postConnection.edges?.map((post) => post.node) || [];
}

export async function getPostBySlug(slug: string) {
	const response = await client.queries.post({
		relativePath: `${slug}.md`,
	});
	return response.data.post;
}
