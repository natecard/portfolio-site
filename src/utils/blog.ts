import client from '../../tina/__generated__/client';
import { Post } from '@/types/Interfaces';

export async function getAllPosts() {
  const postsResponse = await client.queries.postConnection();
  return postsResponse.data.postConnection.edges?.filter(
    (edge): edge is typeof edge & { node: Post } => 
      edge !== null && edge.node !== null
  ).map(edge => edge.node) || [];
}

export async function getPostBySlug(slug: string) {
	const response = await client.queries.post({
		relativePath: `${slug}.md`,
	});
	return response.data.post;
}
